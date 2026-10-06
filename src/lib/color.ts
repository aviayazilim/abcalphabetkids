// Letter tiles: a pale tint of the app's letter colour as background (so the
// character never blends into it), and the letter itself in that colour,
// darkened only as much as needed to stay readable on the tint.
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const toHex = (c: number[]) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');
const lum = (c: number[]) => {
  const [r, g, b] = c.map((v) => v / 255).map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: number[], b: number[]) => {
  const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};

export function tint(hex: string | null, amount = 0.16) {
  if (!hex) return '#f1ede6';
  return toHex(rgb(hex).map((v) => 255 + (v - 255) * amount));
}

export function inkOn(hex: string | null) {
  if (!hex) return '#1f2330';
  const bg = rgb(tint(hex));
  let c = rgb(hex);
  // Large bold text needs 3:1 (WCAG AA).
  for (let k = 0; k < 20 && contrast(c, bg) < 3; k++) c = c.map((v) => v * 0.9);
  return toHex(c);
}

export const tileStyle = (hex: string | null) => `--c:${tint(hex)};--fg:${inkOn(hex)}`;
