# Tailwind CSS

This template uses **Tailwind CSS v4**.

## Integration modes

Tailwind v4 can be integrated in two ways. This template ships with **one** of them active and documents the other; there are **no separate branches** for the two modes.

| Mode           | Package                | Status in this template | Docs                                         |
| -------------- | ---------------------- | ----------------------- | -------------------------------------------- |
| Vite plugin    | `@tailwindcss/vite`    | **Default (active)**    | [tailwind-vite.md](./tailwind-vite.md)       |
| PostCSS plugin | `@tailwindcss/postcss` | Alternative             | [tailwind-postcss.md](./tailwind-postcss.md) |

The Vite plugin is the default because this is a Vue 3 + Vite template and it offers the best performance and the least configuration.

## CSS entry

Regardless of the mode, the CSS entry is always:

```css
@import 'tailwindcss';
```

See [styling.md](./styling.md) for tokens, fonts, and dark mode.
