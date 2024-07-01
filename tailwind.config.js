/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "gray": "#5A5959",
      "red": "#5A5959",
      "yellow-200": "#FFEAAE",
      "purple": "#5F00D9",
      "white": "#FFFFFF",
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}