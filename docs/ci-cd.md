# CI/CD

This template ships with **two interchangeable CI providers** that run the exact same checks. Pick the one that matches where your code lives, and delete the other.

## Files

| Provider                       | File                       |
| ------------------------------ | -------------------------- |
| Azure Pipelines (Azure DevOps) | `azure-pipelines.yml`      |
| GitHub Actions                 | `.github/workflows/ci.yml` |

## Shared checks

Both pipelines run, in order, on Node.js 24:

1. `npm ci` — clean, reproducible install
2. `npm run lint:check` — ESLint
3. `npm run format:check` — Prettier
4. `npm run typecheck` — `vue-tsc --noEmit` (skip on JavaScript branches)
5. `npm run test:cov` — Vitest with coverage
6. `npm run build` — production build
7. `npm run build-storybook` — Storybook build

Keeping the steps identical guarantees that moving a project between Azure Repos and GitHub does not change what "green" means.

## When to use which

### Azure Pipelines (primary, professional projects)

- Your repository lives in **Azure Repos / Azure DevOps**.
- You need Azure-native release pipelines, environments, approvals, or service connections.
- The pipeline is wired automatically when you create a pipeline pointing at `azure-pipelines.yml`.

### GitHub Actions (personal / OSS projects)

- Your repository lives on **GitHub**.
- You want PR checks, status badges, and the GitHub ecosystem (Dependabot, CodeQL, etc.).
- The workflow runs automatically on push / PR to `main`.

## Removing the provider you do not use

The two providers are fully independent. Removing one does not affect the build or the other provider.

- Azure only: delete `.github/workflows/ci.yml` (and the `.github` folder if empty).
- GitHub only: delete `azure-pipelines.yml`.

No other file references these pipelines, so nothing else needs to change.
