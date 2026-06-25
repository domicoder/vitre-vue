# CI/CD

This template ships with **two interchangeable CI providers** that run the exact same checks. Pick the one that matches where your code lives, and delete the other.

## Files

| Provider                       | File                       |
| ------------------------------ | -------------------------- |
| Azure Pipelines (Azure DevOps) | `azure-pipelines.yml`      |
| GitHub Actions                 | `.github/workflows/ci.yml` |

## Shared checks

Both pipelines read the Node.js version from [`.nvmrc`](../.nvmrc) (so bumping Node is a one-line change), then run, in order:

1. `npm ci` — clean, reproducible install
2. `npm run lint:check` — ESLint
3. `npm run format:check` — Prettier
4. `npm run type-check` — `vue-tsc --build` (skip on JavaScript branches)
5. `npm run test:unit` — Vitest unit tests
6. `npm run build:prod` — production build
7. `npm run build-storybook` — Storybook build

> Coverage is available locally via `npm run test:cov`; CI runs `test:unit` for speed. Add a coverage step if your project requires it.

Keeping the steps identical guarantees that moving a project between Azure Repos and GitHub does not change what "green" means.

### Node version

- **Azure Pipelines** reads `.nvmrc` into a pipeline variable and passes it to `NodeTool@0`.
- **GitHub Actions** uses `actions/setup-node` with `node-version-file: '.nvmrc'`.

## When to use which

### Azure Pipelines (primary, ready to production projects)

- Your repository lives in **Azure Repos / Azure DevOps**.
- You need Azure-native release pipelines, environments, approvals, or service connections.
- The pipeline is wired automatically when you create a pipeline pointing at `azure-pipelines.yml`.

### GitHub Actions (personal / OSS projects)

- Your repository lives on **GitHub**.
- You want PR checks, status badges, and the GitHub ecosystem (Dependabot, CodeQL, etc.).
- The workflow runs automatically on push / PR to `main`.

## Using pnpm in CI

npm is the default package manager. If you convert the project to pnpm (see [Using pnpm](../README.md#using-pnpm) in the README), update both pipelines:

- Replace `npm ci` with `pnpm install --frozen-lockfile`.
- Replace each `npm run <script>` with `pnpm <script>`.
- In GitHub Actions, add a `pnpm/action-setup` step before `actions/setup-node` and keep `cache: pnpm`.
- In Azure Pipelines, install pnpm (`npm install -g pnpm`) before the install step.

## Removing the provider you do not use

The two providers are fully independent. Removing one does not affect the build or the other provider.

- Azure only: delete `.github/workflows/ci.yml` (and the `.github` folder if empty).
- GitHub only: delete `azure-pipelines.yml`.

No other file references these pipelines, so nothing else needs to change.
