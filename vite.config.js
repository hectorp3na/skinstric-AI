import { reactRouter } from "@react-router/dev/vite";
import react from '@vitejs/plugin-react';
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    react()
  ],
});