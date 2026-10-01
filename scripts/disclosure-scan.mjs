// Disclosure review: scans the built site (dist/) and source (src/) for
// content that must not be published.
//
// Generic patterns are defined below. Confidential keywords (e.g. internal
// technical details) belong in `.disclosure-terms.local` — one term per line.
// That file is git-ignored so the confidential terms themselves are never
// committed to this public repository.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname } from 'node:path';

const patterns = [
  { name: 'Dollar amount', re: /\$\s?\d[\d,.]*\s?(k|m|million|billion)?/gi },
  { name: 'Series A / valuation', re: /\bseries\s+a\b|(?<!\p{L})valuation\b|\bpre-money\b/giu },
  { name: 'Phone number', re: /\(?\b\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/g },
  { name: 'Nucleotide sequence', re: /\b[ACGTU]{15,}\b/gi },
  { name: 'Peptide sequence (3-letter)', re: /\b(?:(?:Ala|Arg|Asn|Asp|Cys|Gln|Glu|Gly|His|Ile|Leu|Lys|Met|Phe|Pro|Ser|Thr|Trp|Tyr|Val)[\s-]){6,}/g },
  { name: 'Email other than info@rnovatx.com', re: /[\w.+-]+@[\w-]+\.[\w.]+/g, allow: (m) => m === 'info@rnovatx.com' || m.endsWith('.png') || m.endsWith('.webp') },
  { name: 'Unpublished manuscript reference', re: /\bin preparation\b|\bsubmitted\)|\bunpublished data\b/gi },
];

const localFile = '.disclosure-terms.local';
if (existsSync(localFile)) {
  readFileSync(localFile, 'utf8').split('\n').map((s) => s.trim()).filter((s) => s && !s.startsWith('#'))
    .forEach((term) => patterns.push({ name: 'Confidential term', re: new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi') }));
} else {
  console.warn(`(no ${localFile} found — only generic patterns checked)`);
}

const exts = new Set(['.html', '.js', '.css', '.xml', '.txt', '.json', '.ts', '.astro', '.mjs', '.map']);
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) walk(p);
  else if (exts.has(extname(p))) files.push(p);
});
['dist', 'src'].filter(existsSync).forEach(walk);

let hits = 0;
for (const file of files) {
  if (file.endsWith('disclosure-scan.mjs')) continue;
  const text = readFileSync(file, 'utf8');
  for (const p of patterns) {
    for (const m of text.matchAll(p.re)) {
      if (p.allow?.(m[0])) continue;
      // Allow CSS/JS numeric noise for the dollar pattern (template literals like ${x}).
      if (p.name === 'Dollar amount' && /\$\{/.test(text.slice(m.index, m.index + 2))) continue;
      hits++;
      const ctx = text.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40).replace(/\s+/g, ' ');
      console.log(`⚠ [${p.name}] ${file}: …${ctx}…`);
    }
  }
}
console.log(`${files.length} files scanned, ${hits} potential disclosure issue(s).`);
process.exit(hits ? 1 : 0);
