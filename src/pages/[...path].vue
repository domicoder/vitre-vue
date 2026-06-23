<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/AppButton.vue'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <section class="space-y-4 text-center">
    <p class="text-6xl font-bold text-brand">404</p>
    <h1 class="text-2xl font-semibold">{{ t('notFound.heading') }}</h1>
    <p class="text-slate-600 dark:text-slate-400">{{ t('notFound.description') }}</p>
    <AppButton variant="secondary" @click="router.push('/')">
      {{ t('notFound.back') }}
    </AppButton>
  </section>
</template>
