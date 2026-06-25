<script setup lang="ts">
defineProps<{
  label?: string
  type?: string
  placeholder?: string
}>()

const model = defineModel<string>({ default: '' })
</script>

<template>
  <label class="block space-y-1 text-sm">
    <span v-if="label" class="font-medium text-slate-700 dark:text-slate-300">{{ label }}</span>
    <input
      v-model="model"
      :type="type ?? 'text'"
      :placeholder="placeholder"
      class="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
    />
  </label>
</template>
