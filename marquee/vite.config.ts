import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import vitePluginRequire from "vite-plugin-require";

// https://vitejs.dev/config/
// https://github.com/capaj/vite-lingui-poc
export default defineConfig({
    assetsInclude: [`./src/assets/*`],
    envDir: `./env`,
    plugins: [
        react(),
        vitePluginRequire(),
    ],
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, `./src`)
        },
    },
});
