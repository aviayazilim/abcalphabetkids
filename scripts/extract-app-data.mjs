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
  ru: 'RussianAlphabet', de: 'GermanAlphabet', en: 'EnglishAlphabet', tr: 'TurkishAlphabet',
  es: 'SpanishAlphabet', pt: 'PortugueseAlphabet', pl: 'PolishAlphabet', fr: 'FrenchAlphabet',
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
// Enum cases with an explicit raw value, e.g. `vışne = "vïşne"`.
const rawValues = new Map([...wordsSrc.matchAll(/([\p{L}]+) = "([^"]+)"/gu)].map((m) => [norm(m[1]), m[2]]));
function wordText(lang, key) {
  const text = wordTextRaw(lang, key);
  // In the app font, Turkish ï stands for the ordinary dotted i.
  return lang === 'tr' ? text.replace(/ï/g, 'i') : text;
}
function wordTextRaw(lang, key) {
  const langBlock = textBody.match(new RegExp(`case \\.${lang}:\\s*switch self \\{([\\s\\S]*?)default:`));
  if (langBlock) {
    const m = langBlock[1].match(new RegExp(`case \\.${key}: return "([^"]+)"`));
    if (m) return m[1];
  }
  return rawValues.get(key) ?? key;
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
// String literals in Swift source, minus locale identifiers, with \u{…} escapes decoded.
const strings = (s) => [...(s ?? '').replace(/Locale\(identifier:\s*"[^"]*"\)/g, '').matchAll(/"([^"]+)"/g)]
  .map((m) => m[1].replace(/\\u\{([0-9a-fA-F]+)\}/g, (_, h) => String.fromCodePoint(parseInt(h, 16))));

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
// Letter page slugs, written the way people of that language would read them.
const SLUG = {
  ru: (l) => ({ е: 'bukva-e', э: 'bukva-e-oborotnoe', й: 'bukva-y-kratkoe', ы: 'bukva-y' })[l] ?? 'bukva-' + translit[l],
  de: (l) => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'eszett' })[l] ?? l,
  en: (l) => 'letter-' + l,
  tr: (l) => (({ ç: 'ch', ğ: 'yumusak-g', ı: 'noktasiz-i', ö: 'oe', ş: 'sh', ü: 'ue' })[l] ?? l) + '-harfi',
  es: (l) => 'letra-' + (({ ñ: 'enie' })[l] ?? l),
  pt: (l) => 'letra-' + l,
  pl: (l) => 'litera-' + (({ ą: 'a-ogonek', ć: 'c-kreska', ę: 'e-ogonek', ł: 'l-kreska', ń: 'n-kreska',
    ó: 'o-kreska', ś: 's-kreska', ź: 'z-kreska', ż: 'z-kropka' })[l] ?? l),
  fr: (l) => 'lettre-' + l,
};

// Parsed alphabet models, shared because Polish borrows from the others.
const models = new Map();
function model(name) {
  if (models.has(name)) return models.get(name);
  const src = read(`Models/Alphabets/${name}.swift`);
  const m = {
    src,
    order: src.match(/enum \w+: String, BaseAlpahbet \{\s*case ([^}]*?)\n\s*\n/)[1]
      .split(/[,\s]+/).filter((x) => x && x !== 'case').map(norm),
    words: caseMap(block(src, 'var wordStyle: WordStyle') ?? ''),
    cards: caseMap(block(src, 'var card: BaseCardView') ?? ''),
    lotties: caseMap(block(src, 'var startLottie: String') ?? ''),
    bg: caseMap(block(src, 'var backgroundColor: UIColor') ?? ''),
    fill: caseMap(block(src, 'var bigLetterFillColor: UIColor') ?? ''),
    emoji: caseMap(block(src, 'var emoji: String') ?? ''),
    prototype: caseMap(block(src, 'private var prototype: any BaseAlpahbet') ?? ''),
    polishWord: caseMap(block(src, 'private var polishWord: String') ?? ''),
  };
  models.set(name, m);
  return m;
}
const get = (map, k) => map.get(k) ?? [...map].find(([kk]) => norm(kk) === k)?.[1] ?? '';

// Property of a letter, following Polish-style `prototype` delegation.
function prop(m, key, l) {
  const own = get(m[key], l);
  if (own) return own;
  const proto = get(m.prototype, l).match(/(\w+Alphabet)\.(\S+)/);
  return proto ? prop(model(proto[1]), key, norm(proto[2])) : '';
}

// French, Spanish and Portuguese accents don't make separate letters (é counts as e),
// except Spanish ñ. Everywhere else diacritics are letters of their own.
function fold(code, text) {
  if (!['fr', 'es', 'pt'].includes(code)) return text;
  return [...text].map((ch) => (ch === 'ñ' ? ch : ch.normalize('NFD').replace(/\p{M}/gu, ''))).join('');
}

// Case forms: Turkish has both dotless ı/I and dotted i/İ (Ï in the app).
function glyphs(code, raw) {
  if (code === 'tr' && raw === 'Ï') return { upper: 'İ', lower: 'i' };
  if (raw === 'ß') return { upper: 'ß', lower: 'ß' };
  return { upper: raw.toLocaleUpperCase(code), lower: raw.toLocaleLowerCase(code) };
}

const usedImages = new Set();
const allOutlines = {};

for (const [code, name] of Object.entries(LANGS)) {
  const m = model(name);
  const vocab = wordsFor(code);

  const letters = m.order.map((raw) => {
    const { upper, lower } = glyphs(code, raw);
    // Polish spells its own words but borrows everything else from a prototype letter.
    const ws = get(m.polishWord, raw) ? '' : prop(m, 'words', raw);
    const wordParts = ws ? strings(ws.slice(ws.indexOf('word:'))) : strings(get(m.polishWord, raw));
    const article = wordParts.length > 1 ? wordParts[0].trim() : null;
    let word = norm(wordParts.at(-1) ?? '');
    if (code === 'tr') word = word.replace(/Ï/g, 'İ').replace(/ï/g, 'i');
    const card = get(m.cards, raw).match(/(\w+CardView)/)?.[1] ?? null;
    let lottie = strings(prop(m, 'lotties', raw))[0] ?? '';
    let characterImage = null;
    if (!lottieExists(lottie) && card && cardFiles.has(card)) {
      const cardSrc = fs.readFileSync(cardFiles.get(card), 'utf8');
      lottie = cardSrc.match(/LottieAnimationView\(name:\s*"([^"]+)"\)/)?.[1] ?? '';
      // A few cards are plain images instead of animations.
      if (!lottieExists(lottie)) characterImage = cardSrc.match(/R\.image\.(\w+)\(\)/)?.[1] ?? null;
    }
    const outline = outlineFor(raw.toLowerCase());
    if (outline) allOutlines[upper] = outline;
    // Letters such as ъ, ğ, ą or ß rarely start a word, so then any position counts.
    const pick = (fn) => vocab.filter((w) => w.image && fn(fold(code, w.text.toLocaleLowerCase(code))));
    const key = fold(code, lower);
    let related = pick((t) => t.startsWith(key));
    const wordsMatch = related.length ? 'start' : 'inside';
    if (!related.length) related = pick((t) => t.includes(key)).slice(0, 6);
    related.forEach((w) => usedImages.add(w.image));
    // German nouns keep their capital; other languages show the word in lower case.
    const shown = word ? (code === 'de' ? word.charAt(0) + word.slice(1).toLocaleLowerCase(code) : word.toLocaleLowerCase(code)) : null;
    return {
      letter: upper,
      lower,
      slug: SLUG[code](lower),
      // Word shown on the letter's card in the app.
      word: shown,
      article,
      emoji: strings(prop(m, 'emoji', raw))[0] ?? null,
      character: lottieExists(lottie) ? lottie : null,
      characterImage,
      color: colorOf(prop(m, 'bg', raw)),
      letterColor: colorOf(prop(m, 'fill', raw)),
      freeInApp: false,
      outline: Boolean(outline),
      // More words from the app's words game, each with its picture.
      words: related.map((w) => ({ text: w.text, image: w.image })),
      wordsMatch,
      source: 'app',
    };
  });
  // `free` lists the free letters explicitly; everything else is paid.
  const freeLine = block(m.src, 'var free: Bool')?.match(/case ([^:]+): return true/)?.[1] ?? '';
  const freeSet = new Set(freeLine.split(',').map((x) => norm(x.trim().replace(/^\./, ''))));
  letters.forEach((x, i) => (x.freeInApp = freeSet.has(m.order[i])));
  const slugs = new Set(letters.map((x) => x.slug));
  if (slugs.size !== letters.length) throw new Error(`${code}: duplicate slugs`);
  writeJson(`data/letters/${code}.json`, letters);
  console.log(code, letters.length, 'letters | no character:',
    letters.filter((x) => !x.character && !x.characterImage).map((x) => x.letter).join(' ') || '-', '| no outline:',
    letters.filter((x) => !x.outline).map((x) => x.letter).join(' ') || '-', '| no word:',
    letters.filter((x) => !x.word).map((x) => x.letter).join(' ') || '-');
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
