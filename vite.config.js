import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";

export default defineConfig({
    plugins: [react(), checker()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./src/setupTests.js"],
    },
});
