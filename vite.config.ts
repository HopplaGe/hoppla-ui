import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dts from "vite-plugin-dts";
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts(
        {
            rollupTypes: true,
        }
    )],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "./src/components/index.ts"),
            name: "Hoppla UI",
            fileName: "hoppla-ui",
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        }
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss('./tailwind.config.js')
            ],
        },
    },
});
