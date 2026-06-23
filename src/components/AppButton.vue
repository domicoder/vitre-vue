<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  type: { type: String, default: 'button' },
  disabled: { type: Boolean, default: false },
})

defineEmits(['click'])

const base =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand/90',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800',
}
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[base, variants[variant]]"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
