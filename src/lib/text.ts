// French, Spanish and Portuguese accents don't make separate letters (é is an e),
// except Spanish ñ — mirrors fold() in scripts/extract-app-data.mjs.
export function fold(lang: string, text: string) {
  if (!['fr', 'es', 'pt'].includes(lang)) return text;
  return [...text].map((ch) => (ch === 'ñ' ? ch : ch.normalize('NFD').replace(/\p{M}/gu, ''))).join('');
}

// Splits a word around the first occurrence of the letter, for highlighting.
export function splitAt(lang: string, word: string, lower: string): [string, string, string] {
  const chars = [...word];
  const folded = chars.map((c) => fold(lang, c.toLocaleLowerCase(lang)));
  const i = folded.indexOf(fold(lang, lower));
  if (i < 0) return [word, '', ''];
  return [chars.slice(0, i).join(''), chars[i], chars.slice(i + 1).join('')];
}
