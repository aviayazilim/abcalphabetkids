import type { APIRoute } from 'astro';
import { SITE } from '../site';
import { LANGS, HREFLANG, SECTIONS, LETTERS, articlesIn, alternates, path, type PageRef, type SectionKind } from '../lib/routes';

// Own sitemap: section slugs differ per language, which @astrojs/sitemap's i18n mode can't pair up.
export const GET: APIRoute = () => {
  const entries: { loc: string; ref: PageRef }[] = [];
  for (const lang of LANGS) {
    entries.push({ loc: path.home(lang), ref: { kind: 'home' } });
    for (const kind of Object.keys(SECTIONS[lang]) as SectionKind[]) {
      if (kind === 'articles' && articlesIn(lang).length === 0) continue;
      entries.push({ loc: path.section(lang, kind)!, ref: { kind } });
    }
    for (const a of articlesIn(lang)) entries.push({ loc: path.article(lang, a.slug), ref: { kind: 'article', topic: a.topic } });
    for (const l of LETTERS[lang]) entries.push({ loc: path.letter(lang, l.slug), ref: { kind: 'letter', lang, slug: l.slug } });
    for (const l of LETTERS[lang]) {
      const coloring = l.coloring ? path.coloringLetter(lang, l.slug) : null;
      if (coloring) entries.push({ loc: coloring, ref: { kind: 'coloringLetter', lang, slug: l.slug } });
    }
  }
  const abs = (p: string) => new URL(p, SITE.url).href;
  const body = entries.map(({ loc, ref }) => {
    const alts = Object.entries(alternates(ref));
    const links = alts.length > 1
      ? alts.map(([l, href]) => `<xhtml:link rel="alternate" hreflang="${HREFLANG[l as keyof typeof HREFLANG]}" href="${abs(href)}"/>`).join('')
        + (ref.kind === 'home' ? `<xhtml:link rel="alternate" hreflang="x-default" href="${abs('/')}"/>` : '')
      : '';
    return `<url><loc>${abs(loc)}</loc>${links}</url>`;
  });
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
