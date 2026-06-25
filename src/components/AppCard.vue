<script setup>
defineProps({
  title: { type: String, default: '' },
})
</script>

<template>
  <div
    class="rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
  >
    <h2 v-if="title || $slots.title" class="mb-2 text-lg font-semibold">
      <slot name="title">{{ title }}</slot>
    </h2>
    <slot />
  </div>
</template>
