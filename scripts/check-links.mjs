// Verifies every internal href/src in dist/ resolves to a built file.
// Run after `npm run build`.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
});
walk(dist);

let broken = 0;
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const [, url] of html.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)) {
    if (/^(https?:|mailto:|data:|tel:)/.test(url) || !url.startsWith('/')) continue;
    if (!url.startsWith(base)) { console.error(`✗ ${file}: ${url} (missing base ${base})`); broken++; continue; }
    const rel = url.slice(base.length);
    const target = join(dist, rel);
    const ok = existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
    if (!ok) { console.error(`✗ ${file}: ${url}`); broken++; }
  }
}
console.log(`${files.length} pages checked, ${broken} broken internal links.`);
process.exit(broken ? 1 : 0);
