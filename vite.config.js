import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@cards": path.resolve(__dirname, "src/assets/templates/ore-ui/cards/ore-ui-card"),
      "@buttons": path.resolve(__dirname, "src/assets/templates/ore-ui/buttons/ore-ui-button")
    }
  }
});