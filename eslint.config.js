import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'

export default [
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/coverage/**', '**/storybook-static/**', '**/node_modules/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    name: 'app/language-options',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    name: 'app/file-based-pages',
    files: ['src/pages/**/*.vue', 'src/layouts/**/*.vue'],
    rules: {
      // Page and layout filenames are dictated by file-based routing.
      'vue/multi-word-component-names': 'off',
    },
  },
  skipFormatting,
]
