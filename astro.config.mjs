import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://taleshenrique.dev',
  output: 'static',
  build: { format: 'directory' },
});
