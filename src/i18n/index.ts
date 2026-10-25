import es from "./es.json"
import en from "./en.json"

export const DEFAULT_LANG = "es"

const DICTIONARIES = { es, en } satisfies Record<string, typeof es>

export type Lang = keyof typeof DICTIONARIES

export const LANGS = Object.keys(DICTIONARIES) as Lang[]

export function getLang(locale: string | undefined): Lang {
  return locale && locale in DICTIONARIES ? (locale as Lang) : DEFAULT_LANG
}

export function useT(locale: string | undefined) {
  return DICTIONARIES[getLang(locale)]
}

export function localeRoot(lang: Lang) {
  return lang === DEFAULT_LANG ? "/" : `/${lang}/`
}
