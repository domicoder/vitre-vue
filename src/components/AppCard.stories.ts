import type { Meta, StoryObj } from '@storybook/vue3-vite'

import AppCard from './AppCard.vue'

const meta: Meta<typeof AppCard> = {
  title: 'Components/AppCard',
  component: AppCard,
  tags: ['autodocs'],
  args: {
    title: 'Card title',
  },
  render: (args) => ({
    components: { AppCard },
    setup() {
      return { args }
    },
    template: '<AppCard v-bind="args">Card content goes here.</AppCard>',
  }),
}

export default meta

type Story = StoryObj<typeof AppCard>

export const Default: Story = {}
export const WithoutTitle: Story = { args: { title: undefined } }
