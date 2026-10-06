import ru from './ru';
import de from './de';
import type { Lang } from '../lib/routes';

export const T = { ru, de } as const;
export const t = (lang: Lang) => T[lang] as typeof ru & Partial<typeof de>;
