// Pinterest profile pictures from app assets (shown as a circle, ~165px).
// Needs build-cache/icon.png (npm run pdf) and build-cache/icon-full.png (AppIcon at 1000px).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(import.meta.dirname, '..');
const OUT = path.join(ROOT, 'brand/pinterest');
const file = (p) => pathToFileURL(path.join(ROOT, p)).href;
const en = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/letters/en.json')));
const L = Object.fromEntries(en.map((l) => [l.letter, l]));
const ch = (l) => file(`public/img/characters/${l.character ?? l.characterImage}.webp`);

const font = `@font-face { font-family: Nunito; font-weight: 200 1000; src: url(${file('node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2')}) format('woff2'); }
* { box-sizing: border-box; } body { margin: 0; width: 1000px; height: 1000px; font-family: Nunito; overflow: hidden; }`;

const variants = {
  // 1. The app icon itself — same face as in the stores.
  'avatar-1-icon': `<body style="background:#fbf8f3;display:grid;place-items:center">
    <img src="${file('build-cache/icon.png')}" style="width:640px;height:640px;border-radius:140px"></body>`,
  // 1b. The app icon full-bleed: its green background fills Pinterest's circle.
  'avatar-1b-icon-full': `<body style="background:#5aa823;display:grid;place-items:center">
    <img src="${file('build-cache/icon-full.png')}" style="width:1000px;height:1000px"></body>`,
  // 3. One big character on the brand colour with "ABC".
  'avatar-3-cat': `<body style="background:${L.C.color};display:flex;flex-direction:column;align-items:center;justify-content:center">
    <div style="font-size:230px;font-weight:900;color:#fff;letter-spacing:-6px;line-height:.9;margin-top:40px">ABC</div>
    <img src="${ch(L.C)}" style="width:520px;height:440px;object-fit:contain;margin-top:10px"></body>`,
};

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1000, height: 1000 } });
for (const [name, body] of Object.entries(variants)) {
  const tmp = path.join(ROOT, 'build-cache/avatar.html');
  fs.writeFileSync(tmp, `<!doctype html><html><head><meta charset="utf-8"><style>${font}</style></head>${body}</html>`);
  await page.goto(pathToFileURL(tmp).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(OUT, name + '.png') });
}
await browser.close();
console.log('ok');
