// QA helper: all sheet previews of a language on one image.
//   node scripts/contact-sheet.mjs en out.png
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const [lang, out] = process.argv.slice(2);
const ROOT = path.resolve(import.meta.dirname, '..');
const letters = JSON.parse(fs.readFileSync(path.join(ROOT, `data/letters/${lang}.json`)));
const w = 300, h = 424, gap = 6, cols = 9;
const tiles = await Promise.all(letters.map(async (l, i) => ({
  input: await sharp(path.join(ROOT, `public/img/sheets/${lang}/${l.slug}.webp`)).resize(w, h).png().toBuffer(),
  left: (i % cols) * (w + gap), top: Math.floor(i / cols) * (h + gap),
})));
const rows = Math.ceil(letters.length / cols);
await sharp({ create: { width: cols * (w + gap), height: rows * (h + gap), channels: 3, background: '#888' } })
  .composite(tiles).png().toFile(out);
