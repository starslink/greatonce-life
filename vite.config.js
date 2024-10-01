import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import EnvironmentPlugin from "vite-plugin-environment";
export default defineConfig({
    plugins: [
        react(),
        EnvironmentPlugin({
            BASE_URL: process.env.VITE_BASE_URL, // 这里引用 .env 文件中的环境变量
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
});
