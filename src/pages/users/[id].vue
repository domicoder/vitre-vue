<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const userId = computed(() => String((route.params as Record<string, string>).id ?? ''))
</script>

<template>
  <section class="space-y-4">
    <h1 class="text-3xl font-bold tracking-tight">
      {{ t('userDetail.heading', { id: userId }) }}
    </h1>
    <p class="text-slate-600 dark:text-slate-400">{{ t('userDetail.description') }}</p>
    <RouterLink to="/users" class="inline-block text-sm text-brand hover:underline">
      {{ t('userDetail.back') }}
    </RouterLink>
  </section>
</template>
