<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-4">
    <h1 class="text-3xl font-bold tracking-tight">{{ t('about.heading') }}</h1>
    <p class="text-slate-600 dark:text-slate-400">{{ t('about.description') }}</p>
  </section>
</template>
