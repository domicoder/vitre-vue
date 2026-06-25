import type { Meta, StoryObj } from '@storybook/vue3-vite'

import AppInput from './AppInput.vue'

const meta: Meta<typeof AppInput> = {
  title: 'Components/AppInput',
  component: AppInput,
  tags: ['autodocs'],
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
  },
  render: (args) => ({
    components: { AppInput },
    setup() {
      return { args }
    },
    template: '<AppInput v-bind="args" />',
  }),
}

export default meta

type Story = StoryObj<typeof AppInput>

export const Default: Story = {}
export const Password: Story = { args: { label: 'Password', type: 'password', placeholder: '' } }
