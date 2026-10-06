// Renders the first frame of each letter's Lottie character from the app
// into a transparent WebP (site) and PNG (print sheets).
import fs from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const APP = path.resolve(ROOT, process.env.APP_DIR ?? '../alphabet/Alphabet');
const OUT = path.join(ROOT, 'public/img/characters');
const PRINT = path.join(ROOT, 'build-cache/characters');
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(PRINT, { recursive: true });

const letterRows = () => fs.readdirSync(path.join(ROOT, 'data/letters'))
  .flatMap((f) => JSON.parse(fs.readFileSync(path.join(ROOT, 'data/letters', f))));
const names = new Set(letterRows().map((x) => x.character).filter(Boolean));

// First frames of these animations don't show the character well (it is
// still off-screen, hatching or empty), so the app's words-game picture is used instead.
const USE_OBJECT_IMAGE = {
  brush: 'objectBrush', wolf: 'objectWolf', hedgehog_static: 'objectHedgehog', chick: 'objectChick',
  xylophoneBase: 'objectXylophone', clock: 'objectClock', cherry: 'objectCherry', drumStand: 'objectDrums',
  owl: 'objectOwl',
};
// The river animation only draws splashes; the river itself is the card background,
// so the app's river picture is used as a rounded card.
const USE_SCENE = { river: 'PuzzleImages/FullImages/puzzleRiverFullImage.imageset/puzzleRiverFullImage.jpeg' };
async function sceneCard(file) {
  const size = 600, r = 90;
  const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}"/></svg>`);
  return sharp(path.join(APP, 'Assets.xcassets', file)).resize(size, size, { fit: 'cover' })
    .composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
}
const objectPng = (asset) => {
  const dir = path.join(APP, 'Assets.xcassets/ObjectsImages', asset + '.imageset');
  return path.join(dir, fs.readdirSync(dir).find((f) => f.endsWith('.png')));
};
for (const x of letterRows()) if (x.characterImage && USE_OBJECT_IMAGE[x.characterImage]) names.add(x.characterImage);

const lottieJs = fs.readFileSync(path.join(ROOT, 'node_modules/lottie-web/build/player/lottie_svg.min.js'), 'utf8');
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 800, height: 800 } });
await page.setContent('<html><body style="margin:0;background:transparent"><div id="c" style="width:800px;height:800px"></div></body></html>');
await page.addScriptTag({ content: lottieJs });

for (const name of names) {
  if (USE_SCENE[name]) {
    const card = await sceneCard(USE_SCENE[name]);
    await sharp(card).resize(480).webp({ quality: 85 }).toFile(path.join(OUT, name + '.webp'));
    await sharp(card).png().toFile(path.join(PRINT, name + '.png'));
    continue;
  }
  if (USE_OBJECT_IMAGE[name]) {
    const trimmed = await sharp(objectPng(USE_OBJECT_IMAGE[name])).trim().toBuffer();
    await sharp(trimmed).resize(480, 480, { fit: 'inside' }).webp({ quality: 85 }).toFile(path.join(OUT, name + '.webp'));
    await sharp(trimmed).png().toFile(path.join(PRINT, name + '.png'));
    continue;
  }
  const data = JSON.parse(fs.readFileSync(path.join(APP, 'LottieAnimations', name + '.json'), 'utf8'));
  await page.evaluate(async (data) => {
    const el = document.getElementById('c');
    el.innerHTML = '';
    window.anim?.destroy();
    window.anim = lottie.loadAnimation({ container: el, renderer: 'svg', loop: false, autoplay: false, animationData: data });
    await new Promise((r) => window.anim.addEventListener('DOMLoaded', r));
    window.anim.goToAndStop(0, true);
  }, data);
  const png = await page.locator('#c').screenshot({ omitBackground: true });
  // Trim transparent margins so every character sits tight in its box.
  const trimmed = await sharp(png).trim().toBuffer();
  await sharp(trimmed).resize(480, 480, { fit: 'inside' }).webp({ quality: 85 }).toFile(path.join(OUT, name + '.webp'));
  await sharp(trimmed).png().toFile(path.join(PRINT, name + '.png'));
  process.stdout.write('.');
}

// Bounding boxes for the app's letter and colouring outlines, so pages can
// use a tight viewBox without guessing.
const outlines = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/letter-outlines.json')));
const coloring = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/coloring.json')));
const bbox = (paths) => page.evaluate((paths) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const g = document.createElementNS(svg.namespaceURI, 'g');
  for (const d of paths) { const p = document.createElementNS(svg.namespaceURI, 'path'); p.setAttribute('d', d); g.append(p); }
  svg.append(g); document.body.append(svg);
  const b = g.getBBox(); svg.remove();
  return [b.x, b.y, b.width, b.height].map((v) => Math.round(v * 10) / 10);
}, paths);
for (const o of Object.values(outlines)) o.box = await bbox([o.d]);
for (const c of Object.values(coloring)) c.box = await bbox(c.paths);
fs.writeFileSync(path.join(ROOT, 'data/letter-outlines.json'), JSON.stringify(outlines, null, 2) + '\n');
fs.writeFileSync(path.join(ROOT, 'data/coloring.json'), JSON.stringify(coloring) + '\n');

await browser.close();
console.log('\nrendered', names.size);
