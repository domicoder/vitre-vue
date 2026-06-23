import { fileURLToPath } from 'node:url'

import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'happy-dom',
      globals: true,
      setupFiles: ['./test/setup.js'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      exclude: [...configDefaults.exclude, 'e2e/**', 'storybook-static/**'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html', 'lcov'],
        exclude: [...(configDefaults.coverage.exclude ?? []), '**/*.stories.js', '.storybook/**'],
      },
    },
  }),
)
