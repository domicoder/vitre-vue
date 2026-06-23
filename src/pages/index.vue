<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/AppButton.vue'
import { useCounterStore } from '@/stores/counter'

const { t } = useI18n()
const counter = useCounterStore()
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight">{{ t('home.heading') }}</h1>
      <p class="text-slate-600 dark:text-slate-400">{{ t('home.description') }}</p>
    </div>

    <div class="flex items-center gap-4">
      <AppButton @click="counter.increment()">{{ t('home.increment') }}</AppButton>
      <span class="text-lg font-medium" data-testid="counter">
        {{ t('home.counter', { count: counter.count }) }}
      </span>
    </div>
  </section>
</template>
