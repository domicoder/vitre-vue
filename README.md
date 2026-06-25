# Vitre Vue

A professional, scalable **Vue 3 + Vite (JavaScript)** application template with swappable CI/CD.

This is the **JavaScript** branch. `main` is clean TypeScript; see the other branches for TypeScript and Vuetify variants.

## Features

- **Vue 3** (`<script setup>`) + **Vite 8**
- **JavaScript** with ESLint flat config
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

## Validation

Run the same checks CI runs, in order. All must pass before opening a PR or creating derived branches:

```bash
npm ci                   # clean, reproducible install
npm run lint:check       # ESLint
npm run format:check     # Prettier
npm run test:unit        # Vitest unit tests
npm run build:prod       # production build
npm run build-storybook  # Storybook build
```

The `pre-push` Git hook runs `test:unit` and `build:prod` automatically before every push.

## Scripts

| Script                    | Description                          |
| ------------------------- | ------------------------------------ |
| `npm run dev`             | Start the Vite dev server            |
| `npm run dev:local`       | Dev server in `local` mode           |
| `npm run dev:staging`     | Dev server in `staging` mode         |
| `npm run build`           | Build for production                 |
| `npm run build-only`      | Build (alias of production build)    |
| `npm run build:dev`       | Build in `development` mode          |
| `npm run build:staging`   | Build in `staging` mode              |
| `npm run build:prod`      | Build in `production` mode           |
| `npm run build-test`      | Alias of `build:dev` (CI/test build) |
| `npm run build-prod`      | Alias of `build:prod`                |
| `npm run preview`         | Preview the production build         |
| `npm run preview:dev`     | Preview a `development` build        |
| `npm run preview:staging` | Preview a `staging` build            |
| `npm run preview:prod`    | Preview a `production` build         |
| `npm run lint`            | ESLint with `--fix`                  |
| `npm run lint:check`      | ESLint without fixing (CI)           |
| `npm run format`          | Prettier write                       |
| `npm run format:check`    | Prettier check (CI)                  |
| `npm run test`            | Run unit tests once                  |
| `npm run test:unit`       | Run unit tests once (CI)             |
| `npm run test:unit:watch` | Run unit tests in watch mode         |
| `npm run test:cov`        | Run unit tests with coverage         |
| `npm run storybook`       | Start Storybook on port 6006         |
| `npm run build-storybook` | Build the static Storybook           |

## Project structure

```
src/
  app/          # App.vue + main.js entry
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

| File              | Route         |
| ----------------- | ------------- |
| `index.vue`       | `/`           |
| `about.vue`       | `/about`      |
| `dashboard.vue`   | `/dashboard`  |
| `users/index.vue` | `/users`      |
| `users/[id].vue`  | `/users/:id`  |
| `auth/login.vue`  | `/auth/login` |
| `[...path].vue`   | 404 catch-all |

See [docs/routing.md](./docs/routing.md) for how to add routes and how to disable file-based routing.

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
