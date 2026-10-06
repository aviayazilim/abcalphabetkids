import ru from './ru';
import de from './de';
import en from './en';
import tr from './tr';
import es from './es';
import pt from './pt';
import pl from './pl';
import fr from './fr';
import type { Lang } from '../lib/routes';

export const T: Partial<Record<Lang, typeof ru & Partial<typeof de>>> = { ru, de, en, tr, es, pt, pl, fr };
export const t = (lang: Lang) => T[lang]!;
