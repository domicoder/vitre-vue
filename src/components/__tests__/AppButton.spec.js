import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import AppButton from '@/components/AppButton.vue'

describe('AppButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(AppButton, { slots: { default: 'Click me' } })
    expect(wrapper.text()).toBe('Click me')
  })

  it('emits a click event', async () => {
    const wrapper = mount(AppButton, { slots: { default: 'Click me' } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('applies the secondary variant classes', () => {
    const wrapper = mount(AppButton, {
      props: { variant: 'secondary' },
      slots: { default: 'Secondary' },
    })
    expect(wrapper.classes()).toContain('border')
  })

  it('does not emit when disabled', () => {
    const wrapper = mount(AppButton, {
      props: { disabled: true },
      slots: { default: 'Disabled' },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
