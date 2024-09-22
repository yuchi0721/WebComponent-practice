import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';
import { defineConfig } from 'vite';

dotenv.config()
console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify("DEV"),
        'process.env.NEXT_PUBLIC_API_BASE_URL': JSON.stringify(process.env.NEXT_PUBLIC_API_BASE_URL)
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname), // Set alias for `@`
        },
    },
    build: {
        lib: {
            entry: './components/MyComponents.ts',
            name: 'MyComponent',
            fileName: (format) => `my-component.${format}.js`,
            formats: ['es'],
        },
    },
});
