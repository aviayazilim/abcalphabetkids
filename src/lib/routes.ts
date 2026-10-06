import ruLetters from '../../data/letters/ru.json';
import deLetters from '../../data/letters/de.json';

export const LANGS = ['ru', 'de'] as const;
export type Lang = (typeof LANGS)[number];

export const HREFLANG: Record<Lang, string> = { ru: 'ru', de: 'de' };

// Section slugs are written in the page's language because search reads them too.
export const SECTIONS = {
  ru: { tracing: 'propisi', app: 'prilozhenie', privacy: 'konfidentsialnost' },
  de: { tracing: 'buchstaben-nachspuren', app: 'app', privacy: 'datenschutz', imprint: 'impressum' },
} as const satisfies Record<Lang, Record<string, string>>;

export type SectionKind = 'tracing' | 'app' | 'privacy' | 'imprint';

export type Letter = (typeof ruLetters)[number];
export const LETTERS: Record<Lang, Letter[]> = { ru: ruLetters, de: deLetters as Letter[] };

export const path = {
  home: (lang: Lang) => `/${lang}/`,
  section: (lang: Lang, kind: SectionKind) => {
    const slug = (SECTIONS[lang] as Record<string, string>)[kind];
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
