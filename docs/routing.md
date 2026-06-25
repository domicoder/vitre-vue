# Routing

This template uses **file-based routing**, built into **Vue Router 5** (no extra plugin). Every file under `src/pages/` becomes a route, and route types are generated automatically into `typed-router.d.ts`.

## How routes are generated

| File              | Route         | Notes                        |
| ----------------- | ------------- | ---------------------------- |
| `index.vue`       | `/`           | Index of a folder            |
| `about.vue`       | `/about`      | Static segment               |
| `dashboard.vue`   | `/dashboard`  | Static segment               |
| `users/index.vue` | `/users`      | Folder index                 |
| `users/[id].vue`  | `/users/:id`  | Dynamic segment (param `id`) |
| `auth/login.vue`  | `/auth/login` | Nested folder                |
| `[...path].vue`   | catch-all     | 404 / fallback               |

## Adding a route

1. Create a `.vue` file under `src/pages/`. The path on disk maps directly to the URL.
   - `src/pages/settings.vue` → `/settings`
   - `src/pages/blog/index.vue` → `/blog`
   - `src/pages/blog/[slug].vue` → `/blog/:slug`
   - `src/pages/blog/[...all].vue` → `/blog/*` (catch-all)
2. Run the dev server (`npm run dev`) or a build (`npm run build:prod`). Vite regenerates `typed-router.d.ts` so editor autocomplete for routes stays in sync.
3. Link to it with `<RouterLink to="/settings" />` or navigate programmatically with `useRouter().push('/settings')`.

### Dynamic params

Inside a dynamic page such as `users/[id].vue`, read the param from the route:

```js
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
```

## Disabling file-based routing

If you prefer to declare routes manually, switch the router to a static route table:

1. **Remove the file-based plugin from Vite.** In `vite.config.js`, delete the `VueRouter` plugin import and its entry in `plugins` (it must be registered **before** `vue()`).

2. **Define routes by hand** in `src/plugins/router.js`. Replace the auto-generated routes with your own array:

```js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/index.vue') },
  { path: '/about', component: () => import('@/pages/about.vue') },
  // ...add the rest manually
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
```

3. **Drop the generated artifacts.** Delete `typed-router.d.ts` and remove the `vue-router/auto-routes` import. You can keep the `src/pages/` folder or reorganize components however you like.

Manual routing trades the zero-config convenience and generated types for full control over the route table.
