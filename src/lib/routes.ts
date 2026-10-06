import languages from '../../data/languages.json';

// Letters per language, extracted from the app (see scripts/extract-app-data.mjs).
const letterFiles = import.meta.glob('../../data/letters/*.json', { eager: true, import: 'default' });

type LangConfig = (typeof languages)[keyof typeof languages];
export type Lang = keyof typeof languages;
export type SectionKind = 'tracing' | 'app' | 'privacy' | 'imprint';

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
  pdf: (lang: Lang, slug: string, size: 'a4' | 'letter' = 'a4') => `/pdf/${lang}/${slug}${size === 'a4' ? '' : '-letter'}.pdf`,
  pdfAll: (lang: Lang, size: 'a4' | 'letter' = 'a4') => `/pdf/${lang}/alphabet${size === 'a4' ? '' : '-letter'}.pdf`,
};

// Language versions of the same page, for hreflang and the language switcher.
export type PageRef =
  | { kind: 'home' }
  | { kind: SectionKind }
  | { kind: 'letter'; lang: Lang; slug: string };

export function alternates(ref: PageRef): Partial<Record<Lang, string>> {
  const out: Partial<Record<Lang, string>> = {};
  for (const lang of LANGS) {
    if (ref.kind === 'home') out[lang] = path.home(lang);
    else if (ref.kind === 'letter') {
      // Letter pages are language-specific (А ≠ A), so only the page itself is listed.
      if (lang === ref.lang) out[lang] = path.letter(lang, ref.slug);
    } else {
      const p = path.section(lang, ref.kind);
      if (p) out[lang] = p;
    }
  }
  return out;
}
