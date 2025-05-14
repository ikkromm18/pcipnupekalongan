import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import flowbiteReact from "flowbite-react/plugin/vite";

export default defineConfig({
    plugins: [laravel({
        input: ['resources/js/app.jsx'],
        refresh: true,
    }), react(), tailwindcss(), flowbiteReact()],
    resolve:{
        alias:{
            "@":"/resources/js"
        }
    }
});