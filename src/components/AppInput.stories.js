import AppInput from './AppInput.vue'

/** @type {import('@storybook/vue3-vite').Meta} */
const meta = {
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

export const Default = {}
export const Password = { args: { label: 'Password', type: 'password', placeholder: '' } }
