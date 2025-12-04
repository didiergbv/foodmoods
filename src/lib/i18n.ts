export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

const dictionaries = {
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!isValidLocale(locale)) {
    return dictionaries[defaultLocale]();
  }
  return dictionaries[locale]();
};




