import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// eslint-disable-next-line @typescript-eslint/no-var-requires
import path from "path";

// https://vitejs.dev/config/
// https://github.com/capaj/vite-lingui-poc
export default defineConfig({
    assetsInclude: [`./src/assets/*`],
    envDir: `./env`,
    plugins: [
        react(),
    ],
    resolve:{
        alias:{
            '@' : path.resolve(__dirname, `./src`)
        },
    },
});
