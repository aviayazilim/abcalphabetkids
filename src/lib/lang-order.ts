import { LANGS, type Lang } from './routes';

// Same table as the app's Language.allCasesInRightOrder (Models/Language.swift):
// the visitor's own language first, then related ones; English-first by default.
export const LANG_ORDER: Record<string, Lang[]> = {
  ru: ['ru', 'en', 'pt', 'tr', 'de', 'es', 'fr', 'pl'],
  en: ['en', 'es', 'pt', 'de', 'ru', 'tr', 'fr', 'pl'],
  tr: ['tr', 'en', 'pt', 'de', 'ru', 'es', 'fr', 'pl'],
  de: ['de', 'en', 'pt', 'tr', 'ru', 'es', 'fr', 'pl'],
  es: ['es', 'pt', 'en', 'de', 'ru', 'tr', 'fr', 'pl'],
  pt: ['pt', 'es', 'en', 'de', 'ru', 'tr', 'fr', 'pl'],
  fr: ['fr', 'en', 'es', 'pt', 'de', 'tr', 'ru', 'pl'],
  pl: ['pl', 'en', 'de', 'fr', 'es', 'pt', 'tr', 'ru'],
  default: ['en', 'pt', 'es', 'de', 'ru', 'tr', 'fr', 'pl'],
};

// Server-rendered order (no JS, crawlers): the English-first default.
export const DEFAULT_LANGS = LANG_ORDER.default.filter((l) => LANGS.includes(l));
