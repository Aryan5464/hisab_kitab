/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fruktur: ['Fruktur', 'sans-serif'],
      },
      colors: { // Move colors inside extend
        greeen: '#295E3E',
        blueee: '#204353',
      },
    },
  },
  plugins: [nextui()],
}
