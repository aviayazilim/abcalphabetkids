// Checks every built page against the brief's SEO minimum.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve(import.meta.dirname, '../dist');
const pages = [];
(function walk(d) {
  for (const f of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, f.name);
    if (f.isDirectory()) walk(p);
    else if (f.name === 'index.html') pages.push(p);
  }
})(DIST);

const titles = new Map();
const descs = new Map();
let problems = 0;
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const url = '/' + path.relative(DIST, path.dirname(file)) + (path.dirname(file) === DIST ? '' : '/');
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const issues = [];
  if (!title) issues.push('no title'); else if (title.length > 60) issues.push(`title ${title.length} chars`);
  if (!desc) issues.push('no description'); else if (desc.length > 160) issues.push(`description ${desc.length} chars`);
  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) issues.push(`${h1} h1`);
  if (!/<link rel="canonical"/.test(html)) issues.push('no canonical');
  if (!/hreflang=/.test(html)) issues.push('no hreflang');
  const noAlt = (html.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length;
  if (noAlt) issues.push(`${noAlt} img without alt`);
  if (titles.has(title)) issues.push(`duplicate title with ${titles.get(title)}`);
  if (descs.has(desc)) issues.push(`duplicate description with ${descs.get(desc)}`);
  titles.set(title, url); descs.set(desc, url);
  if (issues.length) { problems++; console.log(url, '→', issues.join('; ')); }
}
console.log(`${pages.length} pages, ${problems} with issues`);
process.exitCode = problems ? 1 : 0;
