import AppCard from './AppCard.vue'

/** @type {import('@storybook/vue3-vite').Meta} */
const meta = {
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

export const Default = {}
export const WithoutTitle = { args: { title: '' } }
