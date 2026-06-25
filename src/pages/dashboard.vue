<script setup>
import { useI18n } from 'vue-i18n'

import AppCard from '@/components/AppCard.vue'

const { t } = useI18n()

const metrics = [
  { key: 'dashboard.metricUsers', value: '1,248' },
  { key: 'dashboard.metricSessions', value: '312' },
  { key: 'dashboard.metricUptime', value: '99.9%' },
]
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight">{{ t('dashboard.heading') }}</h1>
      <p class="text-slate-600 dark:text-slate-400">{{ t('dashboard.description') }}</p>
    </div>

    <div class="grid gap-4 sm:grid-cols-3">
      <AppCard v-for="metric in metrics" :key="metric.key" :title="t(metric.key)">
        <p class="text-2xl font-semibold text-brand">{{ metric.value }}</p>
      </AppCard>
    </div>
  </section>
</template>
