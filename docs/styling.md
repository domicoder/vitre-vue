# Styling

This template uses **Tailwind CSS v4** with a CSS-first configuration and a self-hosted variable font.

## Entry point

All global styles live in [`src/assets/styles/main.css`](../src/assets/styles/main.css):

```css
@import 'tailwindcss';

@theme {
  --color-brand: oklch(0.55 0.18 264);
  --font-sans: 'Inter Variable', ui-sans-serif, system-ui, sans-serif;
}
```

It is imported once in [`src/app/main.ts`](../src/app/main.ts).

## Design tokens

Tailwind v4 is configured directly in CSS via the `@theme` directive. Tokens are exposed as both CSS variables and Tailwind utilities:

- `--color-brand` becomes `bg-brand`, `text-brand`, `ring-brand`, etc.
- `--font-sans` drives the default sans-serif stack.

Add new tokens inside the `@theme` block rather than a JavaScript config file.

## Self-hosted fonts

Fonts are self-hosted with [`@fontsource-variable/inter`](https://fontsource.org/) (no requests to Google Fonts). The font is imported in `main.ts` and mapped to `--font-sans` in `@theme`. To change the font, install another `@fontsource(-variable)/*` package, update the import, and update the token.

## Dark mode

Components use Tailwind's `dark:` variant (e.g. `dark:bg-slate-950`). By default this follows the OS preference. To toggle manually, add a `dark` class strategy via `@custom-variant` in `main.css` and toggle the class on `<html>`.

## Conventions

- Prefer utility classes in templates; extract a component (see `AppButton.vue`) when a pattern repeats.
- Keep one-off arbitrary values rare; promote recurring values to `@theme` tokens.
- Storybook loads `main.css` in `.storybook/preview.ts`, so utilities render identically in stories.

## Related docs

- [tailwind.md](./tailwind.md) — overview and integration modes
- [tailwind-vite.md](./tailwind-vite.md) — default Vite plugin mode
- [tailwind-postcss.md](./tailwind-postcss.md) — alternative PostCSS mode
