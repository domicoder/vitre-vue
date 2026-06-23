import { setup } from '@storybook/vue3-vite'

import { i18n } from '../src/plugins/i18n'
import '@fontsource-variable/inter/index.css'
import '../src/assets/styles/main.css'

setup((app) => {
  app.use(i18n)
})

/** @type {import('@storybook/vue3-vite').Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
