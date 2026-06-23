<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="space-y-6">
    <h1 class="text-3xl font-bold tracking-tight">{{ t('about.heading') }}</h1>
    <p class="text-slate-600 dark:text-slate-400">{{ t('about.description') }}</p>

    <!-- Vuetify demo: components coexist with Tailwind utilities. -->
    <v-card class="max-w-md" elevation="2">
      <v-card-title>Vuetify + Tailwind</v-card-title>
      <v-card-text>This card is rendered by Vuetify, inside a Tailwind-spaced layout.</v-card-text>
      <v-card-actions>
        <v-btn color="primary" prepend-icon="mdi-rocket-launch">Vuetify button</v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>
