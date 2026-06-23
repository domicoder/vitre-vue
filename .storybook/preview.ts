import type { Preview } from '@storybook/vue3-vite'
import { setup } from '@storybook/vue3-vite'
import type { App } from 'vue'

import { i18n } from '../src/plugins/i18n'
import '@fontsource-variable/inter/index.css'
import '../src/assets/styles/main.css'

setup((app: App) => {
  app.use(i18n)
})

const preview: Preview = {
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
