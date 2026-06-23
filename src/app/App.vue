<script setup lang="ts">
import DefaultLayout from '@/layouts/default.vue'
</script>

<template>
  <!-- v-app provides the Vuetify layout/theme context. -->
  <v-app>
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </v-app>
</template>
