import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extends: {
      colors: {
        primary: "#ffbg00",
        "primary-light": "#ffc929",
        secondary: "#00b050",
        "secondary-light": "#0b1a78",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
