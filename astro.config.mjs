import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://abcalphabetkids.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
