// CSV for Pinterest bulk create (Settings → Import content → Upload .csv).
// Images must already be live at /pins/<lang>/<slug>.jpg (built by `npm run pdf`).
//
//   node scripts/make-pins-csv.mjs --lang de --start 2026-10-08 --per-day 3 --hour 18 --out ~/Desktop/pinterest-de.csv
import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = 'https://abcalphabetkids.com';
const { values: a } = parseArgs({
  options: {
    lang: { type: 'string' }, start: { type: 'string' }, 'per-day': { type: 'string', default: '3' },
    hour: { type: 'string', default: '18' }, out: { type: 'string' },
  },
});
const languages = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/languages.json'), 'utf8'));
const L = languages[a.lang];
if (!L?.pin) throw new Error(`no pin texts for ${a.lang} in data/languages.json`);
const letters = JSON.parse(fs.readFileSync(path.join(ROOT, `data/letters/${a.lang}.json`), 'utf8'));
const fill = (tpl, vars) => tpl.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
const csv = (v) => `"${String(v).replace(/"/g, '""')}"`;

// Spread pins over days: Pinterest favours a steady pace over a one-off dump.
const perDay = Number(a['per-day']);
const start = new Date(`${a.start}T${a.hour.padStart(2, '0')}:00:00Z`);
const when = (i) => {
  const d = new Date(start);
  d.setUTCDate(d.getUTCDate() + Math.floor(i / perDay));
  d.setUTCMinutes((i % perDay) * 40);
  return d.toISOString().slice(0, 19);
};

const rows = letters.map((l, i) => {
  const vars = { letter: l.letter, lower: l.lower, word: l.word, coloring: l.coloring ? L.pin.coloring : '' };
  const title = fill(L.pin.title, vars);
  const description = fill(L.pin.description, vars);
  if (title.length > 100 || description.length > 500) throw new Error(`${l.letter}: title/description too long`);
  return [
    title,
    `${SITE}/pins/${a.lang}/${l.slug}.jpg`,
    L.pin.board,
    '',
    description,
    `${SITE}/${a.lang}/${L.sections.tracing}/${l.slug}/`,
    when(i),
    fill(L.pin.keywords, vars),
  ].map(csv).join(',');
});

const header = 'Title,Media URL,Pinterest board,Thumbnail,Description,Link,Publish date,Keywords';
const out = a.out.replace(/^~/, process.env.HOME);
fs.writeFileSync(out, [header, ...rows].join('\n') + '\n');
console.log(`${rows.length} pins → ${out}; first ${when(0)}Z, last ${when(rows.length - 1)}Z`);
