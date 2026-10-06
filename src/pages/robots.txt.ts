import type { APIRoute } from 'astro';
import { SITE } from '../site';

export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
