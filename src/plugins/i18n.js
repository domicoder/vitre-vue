import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import es from '@/locales/es.json'

export const SUPPORTED_LOCALES = ['en', 'es']

export const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_DEFAULT_LOCALE || 'en',
  fallbackLocale: 'en',
  messages: { en, es },
})
