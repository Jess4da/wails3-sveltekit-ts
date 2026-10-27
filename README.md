# Wails3 SvelteKit Template

Wails v3 app with:

- [Bun](https://bun.sh) package manager (`PACKAGE_MANAGER` in `Taskfile.yml`)
- [SvelteKit](https://svelte.dev/docs/kit) SPA via `@sveltejs/adapter-static` (hash router, output `frontend/dist`); config lives in `frontend/vite.config.ts`
- [Tailwind CSS v4](https://tailwindcss.com) + [Skeleton](https://www.skeleton.dev) (theme via `data-theme` in `frontend/src/app.html`)
- Icons: [`@lucide/svelte`](https://lucide.dev/guide/packages/lucide-svelte)

## Use

```sh
wails3 init -n myapp -t https://github.com/Jess4da/wails3-sveltekit-ts
cd myapp
wails3 dev     # dev mode with HMR
wails3 build   # production binary in bin/
```

Requires Go, Bun, and the `wails3` CLI.
