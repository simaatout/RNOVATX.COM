import type { APIRoute } from 'astro';
import { routes, href, languages, type RouteKey } from '../i18n';

/** Bilingual sitemap with hreflang alternates. */
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://simaatout.github.io');
  const abs = (p: string) => new URL(p, origin).href;
  const urls = (Object.keys(routes) as RouteKey[]).flatMap((key) =>
    languages.map((lang) => {
      const alts = languages
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l === 'fr' ? 'fr-CA' : 'en'}" href="${abs(href(key, l))}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${abs(href(key, lang))}</loc>\n${alts}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(href(key, 'en'))}"/>\n  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
