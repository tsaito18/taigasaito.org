import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://taigasaito.org",
  vite: {
    plugins: [tailwindcss()],
  },
});
