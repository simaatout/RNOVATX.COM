import { en } from './en';
import { fr } from './fr';
import type { Lang, Localized } from '../data/site';

export const dictionaries = { en, fr };
export const languages: Lang[] = ['en', 'fr'];

export const t = (lang: Lang) => dictionaries[lang];
export const l = (value: Localized, lang: Lang) => value[lang];

/** Route keys — the same slug is used in both languages (/science/ ↔ /fr/science/). */
export const routes = {
  home: '',
  about: 'about/',
  science: 'science/',
  pipeline: 'pipeline/',
  research: 'research/',
  publications: 'research/publications/',
  patent: 'research/patent/',
  contact: 'contact/',
} as const;
export type RouteKey = keyof typeof routes;

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Absolute (base-aware) path for a route in a language. */
export function href(key: RouteKey, lang: Lang, hash = ''): string {
  const prefix = lang === 'fr' ? 'fr/' : '';
  return `${base}${prefix}${routes[key]}${hash}`;
}

/** Base-aware path for a static asset in /public. */
export function asset(path: string): string {
  return `${base}${path.replace(/^\//, '')}`;
}

export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'fr' : 'en');
