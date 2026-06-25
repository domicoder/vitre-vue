<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { SUPPORTED_LOCALES, type SupportedLocale } from '@/plugins/i18n'

const { t, locale } = useI18n()

function setLocale(value: SupportedLocale) {
  locale.value = value
}
</script>

<template>
  <div class="min-h-dvh bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <header class="border-b border-slate-200 dark:border-slate-800">
      <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <RouterLink to="/" class="text-lg font-semibold text-brand">
          {{ t('app.title') }}
        </RouterLink>

        <nav class="flex items-center gap-6 text-sm font-medium">
          <RouterLink to="/" class="hover:text-brand">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/about" class="hover:text-brand">{{ t('nav.about') }}</RouterLink>
          <RouterLink to="/dashboard" class="hover:text-brand">{{ t('nav.dashboard') }}</RouterLink>
          <RouterLink to="/users" class="hover:text-brand">{{ t('nav.users') }}</RouterLink>
          <RouterLink to="/auth/login" class="hover:text-brand">{{ t('nav.login') }}</RouterLink>
        </nav>

        <label class="flex items-center gap-2 text-sm">
          <span class="sr-only">{{ t('language') }}</span>
          <select
            :value="locale"
            class="rounded-md border border-slate-300 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900"
            @change="setLocale(($event.target as HTMLSelectElement).value as SupportedLocale)"
          >
            <option v-for="code in SUPPORTED_LOCALES" :key="code" :value="code">
              {{ code.toUpperCase() }}
            </option>
          </select>
        </label>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6 py-12">
      <slot />
    </main>
  </div>
</template>
