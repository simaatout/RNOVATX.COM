// Generates public/og-image.png and public/apple-touch-icon.png from the brand logo.
// Run: node scripts/make-og.mjs
import sharp from 'sharp';
const logo = 'src/assets/brand/rnova-logo.png';
const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><radialGradient id="a" cx="0.7" cy="0.35" r="0.7"><stop offset="0" stop-color="#2a1b8f"/><stop offset="1" stop-color="#040925"/></radialGradient></defs>
  <rect width="1200" height="630" fill="url(#a)"/></svg>`);
const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <text x="600" y="578" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="30" letter-spacing="2" fill="#dfe4ff">REPROGRAMMING INNATE IMMUNITY TO SILENCE CNS DISEASES</text></svg>`);
const logoBuf = await sharp(logo).resize({ width: 820 }).toBuffer();
await sharp(bg).composite([
  { input: logoBuf, top: 0, left: 190, blend: 'screen' },
  { input: text, top: 0, left: 0 },
]).png({ compressionLevel: 9 }).toFile('public/og-image.png');
const crop = await sharp(logo).extract({ left: 560, top: 150, width: 580, height: 580 }).resize(180, 180).toBuffer();
await sharp({ create: { width: 180, height: 180, channels: 3, background: '#040925' } })
  .composite([{ input: crop, blend: 'screen' }]).png().toFile('public/apple-touch-icon.png');
console.log('ok');
