# Tailwind CSS — Vite plugin (default)

This is the **active** integration mode in this template.

## How it is wired

1. Packages: `tailwindcss` and `@tailwindcss/vite` (already in `devDependencies`).
2. Plugin registered in [`vite.config.ts`](../vite.config.ts):

   ```ts
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [
       /* ...VueRouter, vue, vueDevTools... */
       tailwindcss(),
     ],
   })
   ```

3. CSS entry [`src/assets/styles/main.css`](../src/assets/styles/main.css):

   ```css
   @import 'tailwindcss';
   ```

4. Imported once in [`src/app/main.ts`](../src/app/main.ts).

## Why this is the default

- First-party Vite plugin — fastest builds and HMR.
- Zero PostCSS config files.
- Storybook (Vite builder) reuses the same Vite pipeline, so utilities work in stories automatically.

## Switching to PostCSS

If you need PostCSS (e.g. to chain other PostCSS plugins), see [tailwind-postcss.md](./tailwind-postcss.md).
