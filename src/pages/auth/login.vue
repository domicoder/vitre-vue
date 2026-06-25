<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/AppButton.vue'
import AppCard from '@/components/AppCard.vue'
import AppInput from '@/components/AppInput.vue'

const { t } = useI18n()

const email = ref('')
const password = ref('')

function onSubmit() {
  // Demo only: wire up your auth flow here.
}
</script>

<template>
  <section class="mx-auto max-w-sm space-y-6">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight">{{ t('login.heading') }}</h1>
      <p class="text-slate-600 dark:text-slate-400">{{ t('login.description') }}</p>
    </div>

    <AppCard>
      <form class="space-y-4" @submit.prevent="onSubmit">
        <AppInput
          v-model="email"
          :label="t('login.email')"
          type="email"
          :placeholder="t('login.emailPlaceholder')"
        />
        <AppInput
          v-model="password"
          :label="t('login.password')"
          type="password"
          :placeholder="t('login.passwordPlaceholder')"
        />
        <AppButton type="submit">{{ t('login.submit') }}</AppButton>
      </form>
    </AppCard>
  </section>
</template>
