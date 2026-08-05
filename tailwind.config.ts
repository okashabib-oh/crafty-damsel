import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          light: '#5e2560',
          DEFAULT: '#3d123e', // Deep Imperial Plum
          dark: '#250726',
        },
        gold: {
          light: '#f1d67a',
          DEFAULT: '#d9b342', // Radiant Champagne Gold
          dark: '#b38f2b',
        },
        linen: '#fffbf5', // Creamy base contrast
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;