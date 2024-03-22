/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: colors.indigo[100],
          DEFAULT: colors.indigo[600],
          dark: colors.indigo[900],
        },
      },
    },
  },
  plugins: [],
};
