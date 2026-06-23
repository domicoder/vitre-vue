import AppButton from './AppButton.vue'

/** @type {import('@storybook/vue3-vite').Meta} */
const meta = {
  title: 'Components/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary'] },
    disabled: { control: 'boolean' },
  },
  args: {
    variant: 'primary',
    disabled: false,
  },
  render: (args) => ({
    components: { AppButton },
    setup() {
      return { args }
    },
    template: '<AppButton v-bind="args">Button</AppButton>',
  }),
}

export default meta

export const Primary = { args: { variant: 'primary' } }
export const Secondary = { args: { variant: 'secondary' } }
export const Disabled = { args: { disabled: true } }
