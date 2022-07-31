import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import prerender from "vite-plugin-prerender";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@c": path.resolve(__dirname, "./src/components"),
        }
    },
    plugins: [
        react(),
        prerender({
            routes: ["/"],
            staticDir: path.join(__dirname, "./dist"),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true,
                sortAttributes: true
            }
        })
    ]
});