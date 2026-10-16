/**
 * Central company facts. Edit here — every page, the footer, metadata and
 * JSON-LD read from this file.
 *
 * Only publicly verified information belongs here. Do not add a legal address,
 * founding date or telephone number until they are confirmed.
 */
export const site = {
  name: 'RNOVA Tx',
  legalNameNote: 'Brand name as used on public materials.',
  email: 'info@rnovatx.com',
  linkedin: 'https://www.linkedin.com/company/rnovatx/',
  city: { en: 'Québec City, Canada', fr: 'Québec, Canada' },
  roots: {
    en: 'Université Laval · CERVO Brain Research Centre',
    fr: 'Université Laval · Centre de recherche CERVO',
  },
  /** Main tagline — English is fixed; French lives in src/i18n/fr.ts (TODO_FRENCH_TAGLINE_CONFIRM). */
  copyrightYear: 2026,
} as const;

export type Lang = 'en' | 'fr';
export type Localized = { en: string; fr: string };
