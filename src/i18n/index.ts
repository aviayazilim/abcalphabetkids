import ru from './ru';
import de from './de';
import en from './en';
import tr from './tr';
import type { Lang } from '../lib/routes';

export const T: Partial<Record<Lang, typeof ru & Partial<typeof de>>> = { ru, de, en, tr };
export const t = (lang: Lang) => T[lang]!;
