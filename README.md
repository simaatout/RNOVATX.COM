# RNOVA Tx — corporate website

Bilingual (English / French) static website for **RNOVA Tx**, built with [Astro](https://astro.build) and deployed to GitHub Pages.

> REPROGRAMMING INNATE IMMUNITY TO SILENCE CNS DISEASES

- Static HTML output with no backend, database or CMS
- Routes: `/`, `/about/`, `/science/`, `/pipeline/`, `/research/`, `/research/publications/`, `/research/patent/`, `/contact/`, with French mirrors under `/fr/…`
- Original SVG scientific illustrations; minimal vanilla JavaScript; `prefers-reduced-motion` respected

---

## Quick start

Requires Node.js 20+ (22 recommended).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build → dist/
npm run preview    # serve dist/ locally
```

Quality checks (they also run in CI):

```bash
npm run check:links       # every internal link resolves (run after build)
npm run check:disclosure  # disclosure / confidentiality scan of dist/ and src/
```

`check:disclosure` looks for generic red flags such as dollar amounts, "Series A", phone numbers, nucleotide or peptide sequences, other email addresses and unpublished-manuscript wording. To also scan for confidential keywords, list them one per line in `.disclosure-terms.local`. That file is **git-ignored on purpose**, so the sensitive terms are never committed.

---

## Deploying to GitHub Pages

1. Push to `main`.
2. In the GitHub repository, go to **Settings → Pages → Build and deployment** and set **Source: GitHub Actions**.
3. The workflow `.github/workflows/deploy.yml` builds and deploys automatically. You can also run it manually from the **Actions** tab.

### Base path

The site works both as a project site (`https://<user>.github.io/<repo>/`) and at a domain root (`https://<user>.github.io/` or a custom domain).

The workflow reads the correct values from `actions/configure-pages` and passes them to the build:

| Variable    | Example (project site)       | Example (custom domain) |
|-------------|------------------------------|-------------------------|
| `SITE_URL`  | `https://simaatout.github.io` | `https://rnovatx.com`   |
| `BASE_PATH` | `/rnovatx.com`               | `/`                     |

To build for a sub-path locally:

```bash
SITE_URL=https://simaatout.github.io BASE_PATH=/rnovatx.com npm run build
```

All internal links and assets go through `href()` / `asset()` in `src/i18n/index.ts`, so they stay base-aware. Never hard-code `/something` paths.

### Adding a custom domain later

1. In **Settings → Pages → Custom domain**, enter the domain (e.g. `rnovatx.com`) and enable **Enforce HTTPS**.
2. At your DNS provider, add the records GitHub shows. For an apex domain that means four `A` records to GitHub Pages' IPs (and optionally `AAAA`). For `www`, add a `CNAME` to `<user>.github.io`.
3. Add a file `public/CNAME` containing just the domain, e.g. `rnovatx.com`.
4. Redeploy. `configure-pages` then reports an empty base path, so URLs, the sitemap, canonical links and hreflang update automatically.

---

## Where to edit content

| What | File |
|---|---|
| **Pipeline** (programs, stages, placeholders) | `src/data/pipeline.ts` |
| **Team** (names, titles, bios, photos) | `src/data/team.ts` |
| **Team photos** | `src/assets/team/` — then import in `src/data/team.ts` and set `photo` |
| **Publications** | `src/data/publications.ts` |
| **Patent & IP** | `src/data/patents.ts` |
| **English copy** | `src/i18n/en.ts` |
| **French copy** (including the French tagline) | `src/i18n/fr.ts` |
| **Email, location, copyright year** | `src/data/site.ts` |
| Colours, typography, spacing | `src/styles/global.css` (CSS variables on `:root`) |
| Logo | `src/assets/brand/rnova-logo.png` (raster) and `src/components/Logo.astro` (vector mark) |
| Social share image | `public/og-image.png` — regenerate with `node scripts/make-og.mjs` |

### Replacing a team placeholder photo

```ts
// src/data/team.ts
import hejerBoutej from '../assets/team/hejer-boutej.jpg';
// …
{ id: 'hejer-boutej', /* … */ photo: hejerBoutej, photoPosition: '50% 25%' }
```

Astro resizes and converts the photo to WebP at build time. All photos get the same crop, frame and treatment.

### Updating the pipeline

In `src/data/pipeline.ts`, set a program's `name`, then `stageIndex` (0 = Discovery … 4 = Phase I) and `confirmed: true`. Unconfirmed programs always render as a neutral dashed "Stage to be confirmed" track, so no progress is implied.

---

## Open items (search the codebase for these tags)

| Tag | Meaning |
|---|---|
| `TODO_SUPERVISOR_CONFIRM_PIPELINE` | Pipeline content needs sign-off |
| `TODO_SUPERVISOR_CONFIRM_PROGRAM_NAMES` | Program names are placeholders ("Lead program", "Expansion program") |
| `TODO_SUPERVISOR_CONFIRM_PIPELINE_STAGES` | No stage is shown until confirmed |
| `TODO_SUPERVISOR_CONFIRM_INDICATION_LABELS` | Expansion indication label |
| `TODO_IP_LICENSE_STATUS_CONFIRM` | RNOVA Tx's rights to US 11,530,258 are not stated; wording is neutral |
| `TODO_TEAM_PHOTO_HEJER` / `_SONIA` / `_YUAN` / `_VICTOR` | Initials shown until photos are supplied |
| `TODO_TEAM_BIO_CONFIRM` | Each person should approve their bio |
| `TODO_FRENCH_TAGLINE_CONFIRM` | French tagline is provisional |

These tags appear only in source comments, never in the visible site.

---

## Content and disclosure principles

- Public science only: peer-reviewed publications, the granted patent and public institutional information.
- No unpublished data, internal financials, fundraising figures, or technical details of the EAT-ME-SRSF3 delivery strategy.
- Development-stage language throughout. No therapeutic claims in humans.
- Journal figures are **not** reused. All illustrations are original and labelled as conceptual.

## Project structure

```
src/
  assets/        logo + team photos (optimised at build)
  components/    Header, MobileNav, LanguageSwitcher, Footer, Hero, SectionHeading,
                 CTAButton, MicrogliaDiagram, TranslationDiagram, TechnologyCard,
                 PipelineChart, DevelopmentPath, TeamCard, PublicationCard,
                 Timeline, PartnershipCTA, Citation, PageHero, RnaStrand, Logo
  data/          site, team, pipeline, publications, patents
  i18n/          en.ts, fr.ts, helpers + route map
  layouts/       BaseLayout (SEO, hreflang, JSON-LD)
  pages/         thin EN routes + /fr mirrors, sitemap.xml, robots.txt, 404
  scripts/       site.ts (nav, reveal, copy email)
  styles/        global.css (design tokens)
  views/         one view per page, shared by both languages
scripts/         check-links, disclosure-scan, make-og
```
