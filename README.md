# Vitre Vue

A professional, scalable **Vue 3 + Vite + TypeScript** application template with swappable CI/CD.

`main` is clean TypeScript without Vuetify. Variants (TypeScript + Vuetify, JavaScript, JavaScript + Vuetify) live in dedicated branches.

## Features

- **Vue 3** (`<script setup>`) + **Vite 8**
- **TypeScript** with `vue-tsc` type checking
- **File-based routing** via Vue Router 5 (file-based routing is built into the core; no extra plugin)
- **Pinia** for state management
- **Vue I18n** (English / Spanish out of the box)
- **Tailwind CSS v4** via the first-party Vite plugin, with self-hosted **Inter** webfont
- **Storybook 10** for component development
- **Vitest** + **Vue Test Utils** for unit testing (with coverage)
- **ESLint** (flat config) + **Prettier**
- **Husky** + **lint-staged** + **commitlint** (Conventional Commits)
- **Swappable CI/CD**: Azure Pipelines (primary) and GitHub Actions (alternative), running identical checks

## Requirements

- **Node.js 24 LTS** (see [`.nvmrc`](./.nvmrc)). Run `nvm use` to match.
- **npm** is the default package manager (professional projects use npm). See [Using pnpm](#using-pnpm) to switch.

## Getting started

```bash
nvm use            # Node 24
npm install        # installs deps and sets up Husky hooks
cp .env.example .env
npm run dev
```

## Scripts

| Script                    | Description                               |
| ------------------------- | ----------------------------------------- |
| `npm run dev`             | Start the Vite dev server                 |
| `npm run build`           | Type-check (`vue-tsc`) and build for prod |
| `npm run preview`         | Preview the production build              |
| `npm run typecheck`       | Type-check without emitting               |
| `npm run lint`            | ESLint with `--fix`                       |
| `npm run lint:check`      | ESLint without fixing (CI)                |
| `npm run format`          | Prettier write                            |
| `npm run format:check`    | Prettier check (CI)                       |
| `npm run test`            | Run unit tests once                       |
| `npm run test:watch`      | Run unit tests in watch mode              |
| `npm run test:cov`        | Run unit tests with coverage              |
| `npm run storybook`       | Start Storybook on port 6006              |
| `npm run build-storybook` | Build the static Storybook                |

## Project structure

```
src/
  app/          # App.vue + main.ts entry
  assets/       # global styles (Tailwind entry)
  components/   # reusable components (+ stories, tests)
  composables/  # reusable composition functions
  layouts/      # layout components
  locales/      # i18n message catalogs
  pages/        # file-based routes (Vue Router 5)
  plugins/      # router / pinia / i18n setup
  stores/       # Pinia stores
  types/        # shared types
docs/           # CI/CD and styling documentation
.storybook/     # Storybook config
test/           # test setup
```

## Routing

Routes are generated from files in `src/pages/` by Vue Router 5:

| File            | Route         |
| --------------- | ------------- |
| `index.vue`     | `/`           |
| `about.vue`     | `/about`      |
| `[...path].vue` | 404 catch-all |

Types are auto-generated into `src/typed-router.d.ts`.

## CI/CD

Two interchangeable pipelines run the same checks. See [docs/ci-cd.md](./docs/ci-cd.md).

- Azure Pipelines (primary): [`azure-pipelines.yml`](./azure-pipelines.yml)
- GitHub Actions (alternative): [`.github/workflows/ci.yml`](./.github/workflows/ci.yml)

Delete whichever provider you do not use; the rest of the template is unaffected.

## Styling

Tailwind CSS v4 with the Vite plugin. See [docs/styling.md](./docs/styling.md), [docs/tailwind.md](./docs/tailwind.md), [docs/tailwind-vite.md](./docs/tailwind-vite.md) and [docs/tailwind-postcss.md](./docs/tailwind-postcss.md).

## Branches

| Branch                       | Stack                          |
| ---------------------------- | ------------------------------ |
| `main`                       | TypeScript, no Vuetify (clean) |
| `feature/typescript`         | TypeScript (clean)             |
| `feature/typescript-vuetify` | TypeScript + Vuetify           |
| `feature/javascript`         | JavaScript (clean)             |
| `feature/javascript-vuetify` | JavaScript + Vuetify           |

All branches share Tailwind 4, Pinia, i18n, Storybook, Vitest, file-based routing, the Git hooks, and both CI providers.

## Using pnpm

npm is the default. For personal projects you can convert to pnpm:

```bash
# 1. Remove the npm lockfile
rm package-lock.json

# 2. Install with pnpm (generates pnpm-lock.yaml)
pnpm install

# 3. Use pnpm for scripts
pnpm dev
```

Optional hardening:

- Pin the package manager: add `"packageManager": "pnpm@<version>"` to `package.json`.
- Enforce pnpm: add a `preinstall` script using `npx only-allow pnpm`.
- Update CI: replace `npm ci` / `npm run <x>` with `pnpm install --frozen-lockfile` / `pnpm <x>` in `azure-pipelines.yml` and `.github/workflows/ci.yml`.
- Commit `pnpm-lock.yaml` and delete `package-lock.json` from version control.

## License

MIT
