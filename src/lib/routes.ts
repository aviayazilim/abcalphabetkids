import languages from '../../data/languages.json';

// Letters per language, extracted from the app (see scripts/extract-app-data.mjs).
const letterFiles = import.meta.glob('../../data/letters/*.json', { eager: true, import: 'default' });

type LangConfig = (typeof languages)[keyof typeof languages];
export type Lang = keyof typeof languages;
export type SectionKind = 'tracing' | 'app' | 'privacy' | 'imprint' | 'coloring' | 'articles' | 'words' | 'name';

// Languages switch on one by one via `enabled` in data/languages.json.
export const LANGS = (Object.keys(languages) as Lang[]).filter((l) => languages[l].enabled);
const conf = (lang: Lang) => languages[lang] as LangConfig & { sections: Partial<Record<SectionKind, string>> };

export const HREFLANG = Object.fromEntries(LANGS.map((l) => [l, conf(l).hreflang])) as Record<Lang, string>;
// US Letter where that paper is used; elsewhere A4 only.
export const PAPER_LABEL = { a4: 'A4', letter: 'US Letter' } as const;
export const PAPER = Object.fromEntries(LANGS.map((l) => [l, conf(l).paper])) as Record<Lang, ('a4' | 'letter')[]>;
// Section slugs are written in the page's language because search reads them too.
export const SECTIONS = Object.fromEntries(LANGS.map((l) => [l, conf(l).sections])) as Record<Lang, Partial<Record<SectionKind, string>> & { tracing: string }>;

export type Letter = {
  letter: string; lower: string; slug: string; word: string | null; article: string | null;
  character: string | null; characterImage: string | null; color: string | null; letterColor: string | null;
  freeInApp: boolean; coloring: string | null; words: { text: string; image: string }[]; wordsMatch: 'start' | 'inside';
};
export const LETTERS = Object.fromEntries(
  LANGS.map((l) => [l, letterFiles[`../../data/letters/${l}.json`] as Letter[]]),
) as Record<Lang, Letter[]>;

export const path = {
  home: (lang: Lang) => `/${lang}/`,
  section: (lang: Lang, kind: SectionKind) => {
    const slug = SECTIONS[lang][kind];
    return slug ? `/${lang}/${slug}/` : null;
  },
  letter: (lang: Lang, slug: string) => `/${lang}/${SECTIONS[lang].tracing}/${slug}/`,
  // Coloring pages exist only in languages with a `coloring` section.
  coloringLetter: (lang: Lang, slug: string) => (SECTIONS[lang].coloring ? `/${lang}/${SECTIONS[lang].coloring}/${slug}/` : null),
  article: (lang: Lang, slug: string) => `/${lang}/${SECTIONS[lang].articles}/${slug}/`,
  // Word lists exist only in languages with a `words` section and data/words/<lang>.json.
  wordsLetter: (lang: Lang, slug: string) => (SECTIONS[lang].words ? `/${lang}/${SECTIONS[lang].words}/${slug}/` : null),
  coloringPdf: (lang: Lang, slug: string, size: 'a4' | 'letter' = 'a4') => `/pdf/${lang}/coloring-${slug}${size === 'a4' ? '' : '-letter'}.pdf`,
  pdf: (lang: Lang, slug: string, size: 'a4' | 'letter' = 'a4') => `/pdf/${lang}/${slug}${size === 'a4' ? '' : '-letter'}.pdf`,
  pdfAll: (lang: Lang, size: 'a4' | 'letter' = 'a4') => `/pdf/${lang}/alphabet${size === 'a4' ? '' : '-letter'}.pdf`,
};

// Curated word lists per letter (data/words/<lang>.json, keyed by letter slug).
export type WordList = { start: string[]; inside: string[]; names: string[] };
const wordFiles = import.meta.glob<Record<string, WordList | string>>('../../data/words/*.json', { eager: true, import: 'default' });
export function wordsFor(lang: Lang, slug: string): WordList | null {
  if (!SECTIONS[lang].words) return null;
  const v = wordFiles[`../../data/words/${lang}.json`]?.[slug];
  return v && typeof v === 'object' ? v : null;
}

// Articles live in src/content/articles/<lang>/<slug>.md. Translations of one
// article share a `topic` in their frontmatter, which pairs them for hreflang.
export type ArticleFrontmatter = {
  topic: string; title: string; description: string; h1: string; lead: string;
  date: string; updated?: string; letters?: string[]; faq?: { q: string; a: string }[];
};
type ArticleModule = { frontmatter: ArticleFrontmatter; Content: any };
// Reading order for articles published on the same day: first steps before practice.
const TOPIC_ORDER = ['learn-alphabet', 'tracing-guide', 'letter-games'];
const topicRank = (t: string) => (TOPIC_ORDER.includes(t) ? TOPIC_ORDER.indexOf(t) : TOPIC_ORDER.length);
const articleFiles = import.meta.glob<ArticleModule>('../content/articles/*/*.md', { eager: true });
export type Article = ArticleFrontmatter & { lang: Lang; slug: string; Content: any };
export const ARTICLES: Article[] = Object.entries(articleFiles)
  .map(([file, m]) => {
    const [, lang, name] = file.match(/articles\/([a-z]+)\/([^/]+)\.md$/)!;
    return { ...m.frontmatter, lang: lang as Lang, slug: name, Content: m.Content };
  })
  .filter((a) => LANGS.includes(a.lang) && SECTIONS[a.lang].articles)
  .sort((a, b) => b.date.localeCompare(a.date) || topicRank(a.topic) - topicRank(b.topic));
export const articlesIn = (lang: Lang) => ARTICLES.filter((a) => a.lang === lang);

// Language versions of the same page, for hreflang and the language switcher.
export type PageRef =
  | { kind: 'home' }
  | { kind: SectionKind }
  | { kind: 'letter'; lang: Lang; slug: string }
  | { kind: 'coloringLetter'; lang: Lang; slug: string }
  | { kind: 'article'; topic: string }
  | { kind: 'wordsLetter'; lang: Lang; slug: string };

export function alternates(ref: PageRef): Partial<Record<Lang, string>> {
  const out: Partial<Record<Lang, string>> = {};
  for (const lang of LANGS) {
    if (ref.kind === 'home') out[lang] = path.home(lang);
    else if (ref.kind === 'letter') {
      // Letter pages are language-specific (А ≠ A), so only the page itself is listed.
      if (lang === ref.lang) out[lang] = path.letter(lang, ref.slug);
    } else if (ref.kind === 'wordsLetter') {
      if (lang === ref.lang) out[lang] = path.wordsLetter(lang, ref.slug)!;
    } else if (ref.kind === 'article') {
      const a = ARTICLES.find((x) => x.lang === lang && x.topic === ref.topic);
      if (a) out[lang] = path.article(lang, a.slug);
    } else if (ref.kind === 'coloringLetter') {
      if (lang === ref.lang) out[lang] = path.coloringLetter(lang, ref.slug)!;
    } else {
      // A language's articles index is listed only once it has articles.
      if (ref.kind === 'articles' && articlesIn(lang).length === 0) continue;
      const p = path.section(lang, ref.kind);
      if (p) out[lang] = p;
    }
  }
  return out;
}
