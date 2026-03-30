import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                teal: {
                    DEFAULT: '#52C4B5',
                    dark: '#3da89a',
                },
                navy: {
                    DEFAULT: '#262D42',
                    light: '#4a5268',
                },
            },
            fontFamily: {
                sans: [
                    'IBM Plex Sans',
                    'IBM Plex Sans Arabic',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },

    plugins: [forms],
};
