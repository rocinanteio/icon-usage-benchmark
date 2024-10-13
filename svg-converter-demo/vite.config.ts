import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import commonjs from "vite-plugin-commonjs";
import {nodePolyfills} from "vite-plugin-node-polyfills";
import {optimusVitePlugin} from '@rocinantejs/optimus/vite'

export default defineConfig({
    plugins: [react(), nodePolyfills(), Inspect({
        build: true,
        outputDir: '.vite-inspect'
        // @ts-ignore
    }), commonjs(), optimusVitePlugin()],
})
