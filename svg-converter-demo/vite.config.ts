import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import { optimusPlugin } from 'icon-converter-demo'
import commonjs from "vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), Inspect({
        build: true,
        outputDir: '.vite-inspect'
    }), commonjs(), optimusPlugin()],
})
