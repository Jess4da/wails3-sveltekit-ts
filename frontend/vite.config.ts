import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";
import adapter from "@sveltejs/adapter-static";
import tailwindcss from "@tailwindcss/vite";
import wails from "@wailsio/runtime/plugins/vite";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: Number(process.env.WAILS_VITE_PORT) || 9245,
    strictPort: true,
  },
  plugins: [
    tailwindcss(),
    sveltekit({
      // Wails embeds frontend/dist as a static SPA.
      adapter: adapter({ pages: "dist", assets: "dist" }),
      files: { assets: "public" },
      // Hash routing: deep links work without server-side fallback in the Wails asset server.
      router: { type: "hash" },
    }),
    wails("./bindings"),
  ],
});
