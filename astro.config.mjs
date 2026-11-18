import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jamstackhandbook.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
