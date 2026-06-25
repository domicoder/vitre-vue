<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppCard from '@/components/AppCard.vue'

const { t } = useI18n()

const users = [
  { id: 1, name: 'Ada Lovelace' },
  { id: 2, name: 'Alan Turing' },
  { id: 3, name: 'Grace Hopper' },
]
</script>

<template>
  <section class="space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight">{{ t('users.heading') }}</h1>
      <p class="text-slate-600 dark:text-slate-400">{{ t('users.description') }}</p>
    </div>

    <AppCard>
      <ul class="divide-y divide-slate-200 dark:divide-slate-800">
        <li v-for="user in users" :key="user.id" class="flex items-center justify-between py-3">
          <span class="font-medium">{{ user.name }}</span>
          <RouterLink :to="`/users/${user.id}`" class="text-sm text-brand hover:underline">
            {{ t('users.view') }}
          </RouterLink>
        </li>
      </ul>
    </AppCard>
  </section>
</template>
