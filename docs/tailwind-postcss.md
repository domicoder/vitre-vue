# Tailwind CSS — PostCSS (alternative mode)

This template defaults to the Vite plugin ([tailwind-vite.md](./tailwind-vite.md)). Use PostCSS only if you need to chain other PostCSS plugins or integrate with tooling that expects a `postcss.config.*` file.

There are **no separate branches** for this mode — it is a configuration switch.

## Steps

1. Install the PostCSS plugin:

   ```bash
   npm install -D @tailwindcss/postcss
   ```

2. Remove the Vite plugin from [`vite.config.ts`](../vite.config.ts):

   - Delete the `import tailwindcss from '@tailwindcss/vite'` line.
   - Remove `tailwindcss()` from the `plugins` array.

   (Optional) remove `@tailwindcss/vite` from `devDependencies`.

3. Enable PostCSS by renaming the provided template:

   ```bash
   mv postcss.config.mjs.example postcss.config.mjs
   ```

   It contains:

   ```js
   export default {
     plugins: {
       '@tailwindcss/postcss': {},
     },
   }
   ```

4. The CSS entry is unchanged:

   ```css
   @import 'tailwindcss';
   ```

## Notes

- Vite (and therefore Storybook's Vite builder) picks up `postcss.config.mjs` automatically — no extra Storybook configuration is needed.
- Do not enable both modes at once. Use either `@tailwindcss/vite` **or** `postcss.config.mjs`, never both.
