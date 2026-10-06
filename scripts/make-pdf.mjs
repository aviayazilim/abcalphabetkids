// Builds printable letter sheets from data/letters/*.json:
//   page 1 — tracing (app letter outline + ruled rows), page 2 — colouring (app outline art).
// Also writes a preview image for the letter page and a 1200×630 Open Graph card.
//
//   npm run pdf                    all letters + whole alphabet, all languages
//   npm run pdf -- --lang ru --only bukva-a
import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';
import QRCode from 'qrcode';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const { values: args } = parseArgs({ options: { lang: { type: 'string' }, only: { type: 'string' } } });
const LANGS = args.lang ? [args.lang] : ['ru', 'de'];
const SITE = 'abcalphabetkids.com';
const APP_PAGE = { ru: '/ru/prilozhenie/', de: '/de/app/' };

const TEXT = {
  ru: {
    name: 'Имя', date: 'Дата', color: (w) => `Раскрась: ${w}`, qr: 'Услышь, как звучит буква, в приложении ABC Alphabet',
    scan: 'Наведите камеру телефона на код', ogTitle: (l) => `Буква ${l.letter}`, ogSub: 'Пропись и раскраска · PDF',
  },
  de: {
    name: 'Name', date: 'Datum', color: (w) => `Ausmalen: ${w}`, qr: 'Hör dir den Buchstaben in der App ABC Alphabet an',
    scan: 'Code mit der Handykamera scannen', ogTitle: (l) => `Buchstabe ${l.letter}`, ogSub: 'Nachspuren und Ausmalen · PDF',
  },
};

const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
const outlines = read('data/letter-outlines.json');
const coloring = read('data/coloring.json');
const file = (p) => pathToFileURL(path.join(ROOT, p)).href;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Print images: flattened on white, JPEG — keeps the PDFs small.
const PRINT = path.join(ROOT, 'build-cache/print');
fs.mkdirSync(PRINT, { recursive: true });
async function printImage(l) {
  const name = l.character ?? l.characterImage;
  if (!name) return null;
  const src = fs.existsSync(path.join(ROOT, 'build-cache/characters', name + '.png'))
    ? path.join(ROOT, 'build-cache/characters', name + '.png')
    : path.join(ROOT, 'public/img/characters', name + '.webp');
  const out = path.join(PRINT, name + '.jpg');
  if (!fs.existsSync(out)) {
    await sharp(src).resize(700, 700, { fit: 'inside' }).flatten({ background: '#ffffff' }).jpeg({ quality: 82 }).toFile(out);
  }
  return pathToFileURL(out).href;
}

function outlineSvg(letter, { dashed }) {
  const o = outlines[letter];
  if (!o) {
    return `<svg viewBox="0 0 200 220"><text x="100" y="185" text-anchor="middle" font-size="210" class="trace-text">${esc(letter)}</text></svg>`;
  }
  const pad = 6;
  const [x, y, w, h] = o.box;
  return `<svg viewBox="${x - pad} ${y - pad} ${w + pad * 2} ${h + pad * 2}">
    <path d="${o.d}" fill="none" stroke="${dashed ? '#8a909c' : '#1f2330'}" stroke-width="${dashed ? 2.2 : 2.8}"
      ${dashed ? 'stroke-dasharray="6 5"' : ''} stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}

function coloringSvg(key) {
  const c = coloring[key];
  const [x, y, w, h] = c.box;
  const pad = Math.max(w, h) * 0.01;
  const shapes = c.paths.map((d, i) => {
    if (c.filled.includes(i)) return `<path d="${d}" fill="#1f2330"/>`;
    if (c.mask.includes(i)) return `<path d="${d}" fill="#fff"/>`;
    return `<path d="${d}" fill="#fff" stroke="#1f2330" stroke-width="2.6" vector-effect="non-scaling-stroke" stroke-linejoin="round"/>`;
  }).join('');
  return `<svg viewBox="${x - pad} ${y - pad} ${w + pad * 2} ${h + pad * 2}" preserveAspectRatio="xMidYMid meet">${shapes}</svg>`;
}

const isLight = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b > 170;
};

const wordMarkup = (l, lang) => {
  const w = l.word ?? '';
  const i = w.toLocaleLowerCase(lang).indexOf(l.lower);
  if (i < 0) return esc(w);
  return `${esc(w.slice(0, i))}<b style="color:${isLight(l.color) ? '#1f2330' : l.color}">${esc(w.slice(i, i + l.lower.length))}</b>${esc(w.slice(i + l.lower.length))}`;
};

async function sheetPages(l, lang, qrSvg) {
  const T = TEXT[lang];
  const img = await printImage(l);
  const hasUpper = l.letter !== l.lower;
  // Rows are filled in the browser, where glyph widths can be measured.
  const rows = [
    hasUpper && { text: l.letter, mode: 'repeat' },
    { text: l.lower, mode: 'repeat' },
    { text: l.word, mode: 'word' },
    { text: hasUpper ? l.letter + l.lower : l.lower, mode: 'half' },
    { text: '', mode: 'empty' },
  ].filter(Boolean);
  const footer = `
    <footer class="foot">
      <div class="qr">${qrSvg}</div>
      <div><p class="qr-title">${esc(T.qr)}</p><p class="qr-sub">${esc(T.scan)}</p></div>
      <div class="site"><img src="${file('public/icon-192.png')}" alt=""><span>${SITE}</span></div>
    </footer>`;
  const page1 = `
  <section class="page">
    <header class="head"><span>${esc(T.name)}: <i></i></span><span>${esc(T.date)}: <i class="short"></i></span></header>
    <div class="top">
      <div class="big">${outlineSvg(l.letter, { dashed: true })}</div>
      <div class="char" style="--c:${l.color}">
        ${img ? `<img src="${img}" alt="">` : ''}
        <p class="word">${wordMarkup(l, lang)}</p>
        <p class="pair">${esc(hasUpper ? l.letter + ' ' + l.lower : l.lower)}</p>
      </div>
    </div>
    <div class="rows">
      ${rows.map((r) => `<svg class="row" data-mode="${r.mode}" data-text="${esc(r.text)}" viewBox="0 0 186 24"></svg>`).join('')}
    </div>
    ${footer}
  </section>`;
  const page2 = l.coloring ? `
  <section class="page">
    <header class="head"><span>${esc(T.name)}: <i></i></span><span>${esc(T.date)}: <i class="short"></i></span></header>
    <h2 class="color-title">${esc(T.color(l.word))}</h2>
    <div class="color-wrap">
      <div class="color-letter">${outlineSvg(l.letter, { dashed: false })}</div>
      <div class="color-art">${coloringSvg(l.coloring)}</div>
    </div>
    ${footer}
  </section>` : '';
  return page1 + page2;
}

const CSS = `
@font-face { font-family: Andika; font-weight: 400; src: url(${file('node_modules/@fontsource/andika/files/andika-cyrillic-400-normal.woff2')}) format('woff2'); unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116; }
@font-face { font-family: Andika; font-weight: 400; src: url(${file('node_modules/@fontsource/andika/files/andika-latin-400-normal.woff2')}) format('woff2'); unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD; }
@font-face { font-family: Andika; font-weight: 400; src: url(${file('node_modules/@fontsource/andika/files/andika-latin-ext-400-normal.woff2')}) format('woff2'); unicode-range: U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF; }
@font-face { font-family: Nunito; font-weight: 200 1000; src: url(${file('node_modules/@fontsource-variable/nunito/files/nunito-cyrillic-wght-normal.woff2')}) format('woff2'); unicode-range: U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116; }
@font-face { font-family: Nunito; font-weight: 200 1000; src: url(${file('node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2')}) format('woff2'); }
@page { margin: 0; }
* { box-sizing: border-box; }
html, body { margin: 0; }
body { font-family: Nunito, sans-serif; color: #1f2330; }
.page { width: var(--pw); height: var(--ph); padding: 11mm 12mm 9mm; display: flex; flex-direction: column; page-break-after: always; overflow: hidden; }
.head { display: flex; gap: 10mm; font-size: 11pt; font-weight: 700; color: #5d6475; }
.head span { display: flex; align-items: flex-end; gap: 2mm; }
.head span:first-child { flex: 1; }
.head i { display: block; flex: 1; min-width: 30mm; border-bottom: 0.3mm solid #b9bec8; height: 5mm; }
.head i.short { flex: none; width: 30mm; }
.top { display: grid; grid-template-columns: 1fr 1fr; gap: 8mm; height: 86mm; margin: 6mm 0 4mm; }
.big svg { width: 100%; height: 86mm; }
.char { display: flex; flex-direction: column; align-items: center; justify-content: center; border: 0.6mm solid var(--c); border-radius: 6mm; padding: 4mm; }
.char img { max-width: 72%; max-height: 50mm; object-fit: contain; }
.word { margin: 3mm 0 0; font-family: Andika, sans-serif; font-size: 22pt; }
.pair { margin: 0; font-family: Andika, sans-serif; font-size: 16pt; color: #5d6475; letter-spacing: 1mm; }
.rows { flex: 1; display: flex; flex-direction: column; justify-content: space-between; padding: 1mm 0 3mm; }
.row { width: 100%; height: auto; display: block; overflow: visible; }
.trace-text { font-family: Andika, sans-serif; fill: none; stroke: #8a909c; stroke-width: 0.35; stroke-dasharray: 0.9 0.7; stroke-linecap: round; }
.model { font-family: Andika, sans-serif; fill: #c9ccd3; }
.foot { display: flex; align-items: center; gap: 4mm; border-top: 0.3mm solid #e2ddd2; padding-top: 3mm; }
.qr { width: 19mm; height: 19mm; flex: none; }
.qr svg { width: 100%; height: 100%; display: block; }
.qr-title { margin: 0; font-weight: 800; font-size: 10.5pt; }
.qr-sub { margin: 0; font-size: 9pt; color: #5d6475; }
.site { margin-left: auto; display: flex; align-items: center; gap: 2mm; font-weight: 800; font-size: 10pt; }
.site img { width: 8mm; height: 8mm; border-radius: 2mm; }
.color-title { font-size: 20pt; margin: 6mm 0 4mm; font-weight: 900; }
.color-wrap { flex: 1; position: relative; min-height: 0; }
.color-letter { position: absolute; left: 0; top: 0; width: 42mm; height: 46mm; }
.color-letter svg, .color-art svg { width: 100%; height: 100%; }
.color-art { position: absolute; inset: 14mm 0 4mm 22mm; }
`;

// Fills each ruled row: model glyph, then dashed copies across the line.
const LAYOUT = () => {
  const NS = 'http://www.w3.org/2000/svg';
  const BASE = 19, TOP = 3, MID = 10.2, SIZE = 21.5;
  for (const row of document.querySelectorAll('.row')) {
    const line = (y, dash) => {
      const l = document.createElementNS(NS, 'line');
      Object.entries({ x1: 0, x2: 186, y1: y, y2: y, stroke: dash ? '#c3c7cf' : '#9aa0aa', 'stroke-width': dash ? 0.25 : 0.3 })
        .forEach(([k, v]) => l.setAttribute(k, v));
      if (dash) l.setAttribute('stroke-dasharray', '1.5 1.2');
      row.append(l);
    };
    line(TOP); line(MID, true); line(BASE); line(23.5, true);
    const { mode, text } = row.dataset;
    if (mode === 'empty') continue;
    const make = (str, x, cls) => {
      const t = document.createElementNS(NS, 'text');
      t.setAttribute('x', x); t.setAttribute('y', BASE); t.setAttribute('font-size', SIZE); t.setAttribute('class', cls);
      t.textContent = str; row.append(t); return t;
    };
    const probe = make(text, 0, 'trace-text');
    const w = probe.getComputedTextLength(); probe.remove();
    const gap = mode === 'word' ? 14 : Math.max(5, w * 0.45);
    const count = Math.max(1, Math.floor((186 + gap) / (w + gap)));
    const limit = mode === 'half' ? Math.ceil(count / 2) : count;
    for (let i = 0, x = 1; i < limit; i++, x += w + gap) make(text, x, i === 0 && mode !== 'word' ? 'model' : 'trace-text');
  }
};

const SIZES = { a4: ['210mm', '297mm', 'A4'], letter: ['215.9mm', '279.4mm', 'Letter'] };

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();

async function render(html, size, out) {
  const [pw, ph, format] = SIZES[size];
  const tmp = path.join(ROOT, 'build-cache/sheet.html');
  fs.writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"><style>:root{--pw:${pw};--ph:${ph}}${CSS}</style></head><body>${html}</body></html>`);
  await page.goto(pathToFileURL(tmp).href);
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(LAYOUT);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.pdf({ path: out, format, printBackground: true, preferCSSPageSize: false });
}

async function preview(out, scale = 1) {
  // Screenshot of the first A4 page for the letter page and OG card.
  await page.setViewportSize({ width: 794, height: 1123 });
  const buf = await page.locator('.page').first().screenshot();
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await sharp(buf).resize(Math.round(595 * scale)).webp({ quality: 80 }).toFile(out);
  return buf;
}

async function ogCard(l, lang, sheetPng, out) {
  const T = TEXT[lang];
  const img = await printImage(l);
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}
    body { width: 1200px; height: 630px; background: #fbf8f3; display: grid; grid-template-columns: 1fr 430px; align-items: center; padding: 0 60px; gap: 40px; overflow: hidden; }
    h1 { font-size: 96px; margin: 0; font-weight: 900; line-height: 1; }
    .sub { font-size: 36px; font-weight: 700; color: #5d6475; margin: 18px 0 36px; }
    .chip { display: inline-flex; align-items: center; gap: 18px; background: ${l.color}; border-radius: 28px; padding: 14px 28px 14px 14px; }
    .chip img { width: 120px; height: 120px; object-fit: contain; background: #fff; border-radius: 20px; }
    .chip span { font-size: 44px; font-weight: 900; color: #fff; }
    .brand { margin-top: 40px; font-size: 28px; font-weight: 800; color: #1f2330; }
    .sheet { width: 430px; transform: rotate(3deg); box-shadow: 0 0 0 1px #e2ddd2; background: #fff; }
  </style></head><body>
    <div><h1>${esc(T.ogTitle(l))}</h1><p class="sub">${esc(T.ogSub)}</p>
      <div class="chip">${img ? `<img src="${img}">` : ''}<span>${esc(l.word ?? '')}</span></div>
      <p class="brand">ABC Alphabet · ${SITE}</p></div>
    <img class="sheet" src="data:image/png;base64,${sheetPng.toString('base64')}">
  </body></html>`;
  const tmp = path.join(ROOT, 'build-cache/og.html');
  fs.writeFileSync(tmp, html);
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(pathToFileURL(tmp).href);
  await page.evaluate(() => document.fonts.ready);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  await page.screenshot({ path: out, type: 'png' });
}

for (const lang of LANGS) {
  const letters = read(`data/letters/${lang}.json`);
  const qrSvg = await QRCode.toString(`https://${SITE}${APP_PAGE[lang]}?c=pdf`, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#1f2330', light: '#ffffff' } });
  const selected = args.only ? letters.filter((l) => l.slug === args.only) : letters;
  const all = [];
  for (const l of selected) {
    const html = await sheetPages(l, lang, qrSvg);
    all.push(html);
    await render(html, 'letter', path.join(ROOT, `public/pdf/${lang}/${l.slug}-letter.pdf`));
    await render(html, 'a4', path.join(ROOT, `public/pdf/${lang}/${l.slug}.pdf`));
    const shot = await preview(path.join(ROOT, `public/img/sheets/${lang}/${l.slug}.webp`));
    await ogCard(l, lang, shot, path.join(ROOT, `public/og/${lang}/${l.slug}.png`));
    const kb = Math.round(fs.statSync(path.join(ROOT, `public/pdf/${lang}/${l.slug}.pdf`)).size / 1024);
    console.log(`${lang} ${l.letter} → ${kb} KB`);
  }
  if (!args.only) {
    await render(all.join(''), 'a4', path.join(ROOT, `public/pdf/${lang}/alphabet.pdf`));
    await render(all.join(''), 'letter', path.join(ROOT, `public/pdf/${lang}/alphabet-letter.pdf`));
    console.log(`${lang} alphabet → ${Math.round(fs.statSync(path.join(ROOT, `public/pdf/${lang}/alphabet.pdf`)).size / 1024)} KB`);
  }
}
// Site-wide OG card: the app's letter tiles, no text to translate.
{
  const tiles = [...read('data/letters/ru.json').slice(0, 4), ...read('data/letters/de.json').slice(0, 4)];
  const cells = await Promise.all(tiles.map(async (l) => {
    const name = l.character ?? l.characterImage;
    const img = name && file(`public/img/characters/${name}.webp`);
    return `<div style="background:${l.color}"><b>${esc(l.letter)}</b>${img ? `<img src="${img}">` : ''}</div>`;
  }));
  fs.writeFileSync(path.join(ROOT, 'build-cache/og.html'), `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}
    body { width: 1200px; height: 630px; background: #fbf8f3; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 40px 60px; }
    div { position: relative; border-radius: 28px; display: grid; place-items: center; overflow: hidden; }
    b { position: absolute; top: 10px; left: 20px; font-size: 64px; font-weight: 900; color: #fff; }
    img { width: 70%; height: 70%; object-fit: contain; margin-top: 30px; }
  </style></head><body>${cells.join('')}</body></html>`);
  await page.setViewportSize({ width: 1200, height: 630 });
  await page.goto(pathToFileURL(path.join(ROOT, 'build-cache/og.html')).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(ROOT, 'public/og/default.png') });
}

await browser.close();
