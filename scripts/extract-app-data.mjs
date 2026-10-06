// Pulls letter data, words, letter outlines, colouring outlines and images
// straight from the iOS app sources, so the site never invents content.
//
//   APP_DIR=../alphabet/Alphabet node scripts/extract-app-data.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const APP = path.resolve(ROOT, process.env.APP_DIR ?? '../alphabet/Alphabet');
const read = (p) => fs.readFileSync(path.join(APP, p), 'utf8');
const writeJson = (p, data) => {
  fs.mkdirSync(path.dirname(path.join(ROOT, p)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, p), JSON.stringify(data, null, 2) + '\n');
};

const LANGS = {
  ru: { model: 'RussianAlphabet', lang: 'ru' },
  de: { model: 'GermanAlphabet', lang: 'de' },
};

// ---------- helpers ----------

// Body of `var <name>... {` up to the matching closing brace.
function block(src, signature) {
  const start = src.indexOf(signature);
  if (start < 0) return null;
  let i = src.indexOf('{', start);
  let depth = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '{') depth++;
    else if (src[j] === '}' && --depth === 0) return src.slice(i + 1, j);
  }
  return null;
}

// Splits a `switch self { case .a, .b: ... }` body into [[cases], body].
function switchCases(body) {
  const out = [];
  const re = /^\s*case\s+([^:]+?):/gm;
  const marks = [...body.matchAll(re)];
  marks.forEach((m, k) => {
    const end = k + 1 < marks.length ? marks[k + 1].index : body.length;
    const keys = m[1].split(',').map((s) => s.trim().replace(/^\.\s*/, ''));
    out.push([keys, body.slice(m.index + m[0].length, end)]);
  });
  return out;
}

const caseMap = (body) => {
  const map = new Map();
  for (const [keys, val] of switchCases(body)) for (const k of keys) map.set(k, val);
  return map;
};

// Russian enums mix Cyrillic ё with Latin ë in identifiers.
const norm = (s) => s.normalize('NFC').replace(/ë/g, 'ё').replace(/Ë/g, 'Ё');

// ---------- colours ----------

const colorSrc = read('Common/Extensions/UIColor.swift');
const colors = {};
for (const m of colorSrc.matchAll(/static let ([\p{L}\p{N}_]+)\s*=\s*#colorLiteral\(red: ([\d.]+), green: ([\d.]+), blue: ([\d.]+)/gu)) {
  colors[m[1]] = '#' + [m[2], m[3], m[4]].map((v) => Math.round(+v * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
}
for (const m of colorSrc.matchAll(/static let ([\p{L}\p{N}_]+)\s*=\s*UIColor\(hexString:\s*"#?(\w{6})"\)/gu)) colors[m[1]] = '#' + m[2].toUpperCase();
const colorOf = (expr) => {
  const hex = expr.match(/hexString:\s*"#?(\w{6})"/);
  if (hex) return '#' + hex[1].toUpperCase();
  const name = [...expr.matchAll(/\.([\p{L}\p{N}_]+)/gu)].map((m) => m[1]).find((n) => colors[n]);
  return colors[name] ?? null;
};

// ---------- words game (shared vocabulary with images) ----------

const wordsSrc = read('Scenes/Games/LetterGame/Models/LetterGameWords.swift');
const langWordsSrc = read('Scenes/Games/LetterGame/Models/LetterGameLanguage.swift');
const imageBody = block(wordsSrc, 'var image: UIImage?');
const wordImage = new Map();
for (const [keys, val] of switchCases(imageBody)) {
  const img = val.match(/R\.image\.(\w+)\(\)/)?.[1];
  if (img) for (const k of keys) wordImage.set(norm(k), img);
}
const textBody = block(wordsSrc, 'func text(for language: Language)');
function wordText(lang, key) {
  const langBlock = textBody.match(new RegExp(`case \\.${lang}:\\s*switch self \\{([\\s\\S]*?)default:`));
  if (langBlock) {
    const m = langBlock[1].match(new RegExp(`case \\.${key}: return "([^"]+)"`));
    if (m) return m[1];
  }
  return key;
}
const wordsBody = block(langWordsSrc, 'var words: [LetterGameWords]');
function wordsFor(lang) {
  const m = wordsBody.match(new RegExp(`case \\.${lang}: words =\\s*\\[([\\s\\S]*?)\\]`));
  return m[1].split(',').map((s) => norm(s.trim().replace(/^\./, ''))).filter(Boolean)
    .map((key) => ({ key, text: norm(wordText(lang, key)), image: wordImage.get(key) ?? null }));
}

// ---------- letter outlines (letter tracing game) ----------

const pathsSrc = read('Scenes/Games/LetterGame/Models/LetterPaths.swift');
const outlineMap = caseMap(block(pathsSrc, 'var letterPathString: String'));
const circlesMap = caseMap(block(pathsSrc, 'var circlesPathStrings'));
const modelSrc = read('Scenes/Games/LetterGame/Models/LetterModel.swift');
const modelPaths = caseMap(block(modelSrc, 'var paths: LetterPaths'));
const strings = (s) => [...(s ?? '').matchAll(/"([^"]+)"/g)].map((m) => m[1]);

function outlineFor(letter) {
  // LetterModel maps both Cyrillic and Latin letters onto shared outlines.
  const target = [...modelPaths].find(([k]) => norm(k) === norm(letter))?.[1]?.match(/\.(\S+)/)?.[1];
  if (!target) return null;
  const key = norm(target);
  const outline = [...outlineMap].find(([k]) => norm(k) === key)?.[1];
  const circles = [...circlesMap].find(([k]) => norm(k) === key)?.[1];
  const d = strings(outline)[0];
  // circlesPathStrings are the app's finger hit-areas, not stroke order; kept only for the bbox.
  return d ? { d, hitAreas: strings(circles) } : null;
}

// ---------- character lottie per letter ----------

const cardFiles = new Map();
(function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name.endsWith('CardView.swift')) cardFiles.set(f.name.replace('.swift', ''), p);
  }
})(path.join(APP, 'Cards'));
const lottieExists = (n) => n && fs.existsSync(path.join(APP, 'LottieAnimations', n + '.json'));

// ---------- per language ----------

const translit = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l',
  м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh',
  щ: 'shch', ъ: 'tverdyy-znak', ы: 'y', ь: 'myagkiy-znak', э: 'e', ю: 'yu', я: 'ya',
};
// Distinct slugs where transliteration collides (е/э, й/ы).
const ruSlug = { е: 'bukva-e', э: 'bukva-e-oborotnoe', й: 'bukva-y-kratkoe', ы: 'bukva-y' };
const deSlug = { ä: 'ae', ö: 'oe', ü: 'ue', ß: 'eszett' };

const usedImages = new Set();
const allOutlines = {};

for (const [code, { model }] of Object.entries(LANGS)) {
  const src = read(`Models/Alphabets/${model}.swift`);
  const order = src.match(/enum \w+: String, BaseAlpahbet \{\s*case ([^}]*?)\n\s*\n/)[1]
    .split(/[,\s]+/).filter((s) => s && s !== 'case').map(norm);
  const words = caseMap(block(src, 'var wordStyle: WordStyle'));
  const cards = caseMap(block(src, 'var card: BaseCardView'));
  const lotties = caseMap(block(src, 'var startLottie: String'));
  const bg = caseMap(block(src, 'var backgroundColor: UIColor'));
  const fill = caseMap(block(src, 'var bigLetterFillColor: UIColor'));
  const free = caseMap(block(src, 'var free: Bool'));
  const emoji = caseMap(block(src, 'var emoji: String') ?? '');
  const vocab = wordsFor(code);
  const get = (map, k) => map.get(k) ?? [...map].find(([kk]) => norm(kk) === k)?.[1] ?? '';

  const letters = order.map((l) => {
    const ws = get(words, l);
    const wordParts = strings(ws.slice(ws.indexOf('word:')));
    const article = wordParts.length > 1 ? wordParts[0].trim() : null;
    const word = norm(wordParts.at(-1) ?? '');
    const card = get(cards, l).match(/(\w+CardView)/)?.[1] ?? null;
    let lottie = strings(get(lotties, l))[0] ?? '';
    let characterImage = null;
    if (!lottieExists(lottie) && card && cardFiles.has(card)) {
      const cardSrc = fs.readFileSync(cardFiles.get(card), 'utf8');
      lottie = cardSrc.match(/LottieAnimationView\(name:\s*"([^"]+)"\)/)?.[1] ?? '';
      // A few cards are plain images instead of animations.
      if (!lottieExists(lottie)) characterImage = cardSrc.match(/R\.image\.(\w+)\(\)/)?.[1] ?? null;
    }
    const upper = l.toLocaleUpperCase(code);
    const outline = outlineFor(l);
    if (outline) allOutlines[upper] = outline;
    // Hard sign, umlauts, ß etc. rarely start a word, so for them any position counts.
    const inside = ['ъ', 'ы', 'ь', 'ä', 'ö', 'ü', 'ß'].includes(l);
    const related = vocab.filter((w) => {
      const t = w.text.toLocaleLowerCase(code);
      return w.image && (inside ? t.includes(l) : t.startsWith(l));
    });
    related.forEach((w) => usedImages.add(w.image));
    const slug = code === 'ru'
      ? (ruSlug[l] ?? 'bukva-' + translit[l])
      : (deSlug[l] ?? l);
    return {
      letter: l === 'ß' ? 'ß' : upper,
      lower: l,
      slug,
      // Word shown on the letter's card in the app.
      // German nouns keep their capital; Russian words are lower case.
      word: word ? (code === 'de' ? word.charAt(0) + word.slice(1).toLocaleLowerCase(code) : word.toLocaleLowerCase(code)) : null,
      article,
      emoji: strings(get(emoji, l))[0] ?? null,
      character: lottieExists(lottie) ? lottie : null,
      characterImage,
      color: colorOf(get(bg, l)),
      letterColor: colorOf(get(fill, l)),
      freeInApp: false,
      outline: Boolean(outline),
      // More words from the app's words game, each with its picture.
      words: related.map((w) => ({ text: w.text, image: w.image })),
      source: 'app',
    };
  });
  // `free` lists the free letters explicitly; everything else is paid.
  const freeLine = block(src, 'var free: Bool').match(/case ([^:]+): return true/)?.[1] ?? '';
  const freeSet = new Set(freeLine.split(',').map((s) => norm(s.trim().replace(/^\./, ''))));
  letters.forEach((x) => (x.freeInApp = freeSet.has(x.lower)));
  writeJson(`data/letters/${code}.json`, letters);
  console.log(code, letters.length, 'letters;',
    letters.filter((x) => !x.character).map((x) => x.letter).join(' ') || 'all have characters', '| no outline:',
    letters.filter((x) => !x.outline).map((x) => x.letter).join(' ') || '-');
}

writeJson('data/letter-outlines.json', allOutlines);

// ---------- colouring outlines ----------

const paintSrc = read('Scenes/Games/PaintGame/PaintColorableObject.swift');
const paintCases = paintSrc.match(/case ([a-z0-9, ]+)\n/)[1].split(',').map((s) => s.trim());
const pPaths = caseMap(block(paintSrc, 'var paths: [String]'));
const pFilled = caseMap(block(paintSrc, 'var filledLayersIndexes: [Int]'));
const pMask = caseMap(block(paintSrc, 'var maskLayersIndexes: [Int]'));
const nums = (s) => [...(s ?? '').matchAll(/\d+/g)].map((m) => +m[0]);
const coloring = {};
for (const name of paintCases) {
  const paths = strings(pPaths.get(name));
  if (!paths.length) continue;
  coloring[name] = { paths, filled: nums(pFilled.get(name)), mask: nums(pMask.get(name)) };
}
writeJson('data/coloring.json', coloring);

// Link each letter's character to its colouring outline (names differ slightly).
const COLORING_ALIAS = {
  avokado: 'avocado', airplane: 'plane', flashlightOn: 'flashlight', chameleon1: 'chameleon', hug: 'huggle',
  popsicle: 'eskimo', yula: 'whirligig', xylophoneBase: 'xylophone',
};
for (const code of Object.keys(LANGS)) {
  const file = `data/letters/${code}.json`;
  const letters = JSON.parse(fs.readFileSync(path.join(ROOT, file)));
  for (const x of letters) {
    const base = (x.character ?? x.characterImage ?? '').replace(/_static$/, '');
    const key = COLORING_ALIAS[base] ?? base;
    x.coloring = coloring[key] ? key : null;
  }
  writeJson(file, letters);
  console.log(code, 'no colouring:', letters.filter((x) => !x.coloring).map((x) => x.letter).join(' '));
}
console.log('colouring outlines:', Object.keys(coloring).length);

// ---------- object pictures (webp) ----------

const objDir = path.join(APP, 'Assets.xcassets/ObjectsImages');
const outDir = path.join(ROOT, 'public/img/words');
fs.mkdirSync(outDir, { recursive: true });
const assetName = (r) => r.charAt(0).toLowerCase() + r.slice(1);
for (const img of usedImages) {
  const set = fs.readdirSync(objDir).find((d) => d.toLowerCase() === assetName(img).toLowerCase() + '.imageset');
  if (!set) { console.warn('missing image', img); continue; }
  const png = fs.readdirSync(path.join(objDir, set)).find((f) => f.endsWith('.png'));
  await sharp(path.join(objDir, set, png)).resize(320, 320, { fit: 'inside' }).webp({ quality: 82 })
    .toFile(path.join(outDir, img + '.webp'));
}
console.log('word images:', usedImages.size);

// ---------- character pictures for cards that are not animations ----------

const findSet = (dir, name) => {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.name.toLowerCase() === name.toLowerCase() + '.imageset') return p;
    if (f.isDirectory() && !f.name.endsWith('.imageset')) { const r = findSet(p, name); if (r) return r; }
  }
  return null;
};
const charDir = path.join(ROOT, 'public/img/characters');
fs.mkdirSync(charDir, { recursive: true });
for (const code of Object.keys(LANGS)) {
  const letters = JSON.parse(fs.readFileSync(path.join(ROOT, `data/letters/${code}.json`)));
  for (const x of letters.filter((x) => x.characterImage)) {
    const set = findSet(path.join(APP, 'Assets.xcassets'), x.characterImage);
    const png = set && fs.readdirSync(set).filter((f) => f.endsWith('.png')).sort().at(-1);
    if (!png) { console.warn('missing character image', x.characterImage); continue; }
    await sharp(path.join(set, png)).resize(600, 600, { fit: 'inside' }).webp({ quality: 85 })
      .toFile(path.join(charDir, x.characterImage + '.webp'));
  }
}
