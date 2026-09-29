// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Deployment settings.
 *
 * SITE_URL  – the public origin, e.g. https://simaatout.github.io or https://rnovatx.com
 * BASE_PATH – the sub-path the site is served from:
 *               "/rnovatx.com"  for https://<user>.github.io/rnovatx.com/
 *               "/"             for a user site (<user>.github.io) or a custom domain
 *
 * The GitHub Actions workflow sets both automatically from `actions/configure-pages`.
 * Locally they default to a root deployment.
 */
const site = process.env.SITE_URL || 'https://simaatout.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    build: { sourcemap: false },
  },
});
