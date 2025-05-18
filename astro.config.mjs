// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind  from '@astrojs/tailwind';
import sitemap   from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://unblockedsmashkarts.com',
  trailingSlash: 'never',

  integrations: [
    tailwind(),

    // sitemap-index.xml + sitemap-0.xml
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      filter: (page) => !page.includes('/404'),
      // no entryLimit → default (50 000) is fine
    }),

    // robots.txt will contain:  Sitemap: https://unblockedsmashkarts.com/sitemap-index.xml
    robotsTxt({ sitemap: true }),
  ],
});
