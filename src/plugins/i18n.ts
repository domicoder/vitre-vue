import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import es from '@/locales/es.json'

export type MessageSchema = typeof en

export const SUPPORTED_LOCALES = ['en', 'es'] as const
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export const i18n = createI18n<[MessageSchema], SupportedLocale>({
  legacy: false,
  locale: (import.meta.env.VITE_DEFAULT_LOCALE as SupportedLocale) || 'en',
  fallbackLocale: 'en',
  messages: { en, es },
})
