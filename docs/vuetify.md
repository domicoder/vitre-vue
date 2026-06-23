# Vuetify

This branch adds [Vuetify](https://vuetifyjs.com/) on top of the JavaScript base template, alongside Tailwind CSS 4.

## What was added

- Dependencies: `vuetify`, `@mdi/font` (self-hosted Material Design Icons).
- Dev dependency: `vite-plugin-vuetify` (on-demand component/style auto-import + treeshaking).
- Plugin: [`src/plugins/vuetify.js`](../src/plugins/vuetify.js) creating the Vuetify instance and importing `vuetify/styles` + the MDI font CSS.
- Vite: `vuetify({ autoImport: true })` registered in [`vite.config.js`](../vite.config.js).
- App: `app.use(vuetify)` in [`src/app/main.js`](../src/app/main.js) and a `<v-app>` wrapper in [`src/app/App.vue`](../src/app/App.vue).

## Coexistence with Tailwind CSS 4

Tailwind's preflight (its CSS reset) would override Vuetify's component styles. To avoid that, this branch disables Tailwind preflight by importing only the `theme` and `utilities` layers in [`src/assets/styles/main.css`](../src/assets/styles/main.css):

```css
@layer theme, base, components, utilities;

@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/utilities.css' layer(utilities);
```

This keeps Tailwind utility classes (`flex`, `gap-4`, `text-3xl`, ...) usable while letting Vuetify manage base/component styling. If you do not use Vuetify, the clean branches use the full `@import "tailwindcss";` (preflight enabled).

## Notes

- Vuetify components must live inside a `<v-app>` ancestor (provided in `App.vue`).
- Use Vuetify for complex widgets and Tailwind for layout/spacing utilities; avoid styling the same element with both systems.
