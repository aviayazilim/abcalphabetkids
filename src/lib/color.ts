// Dark ink on light letter colours (yellow, pink), white on the rest — keeps tile letters readable.
export function fgFor(hex: string | null) {
  if (!hex) return '#fff';
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return (1.05) / (lum + 0.05) >= 3 ? '#fff' : '#1f2330';
}
