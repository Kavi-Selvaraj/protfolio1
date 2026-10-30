/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deepBg: '#05080F',
        cardNavy: '#0B132B',
        accentCyan: '#14b8a6',
      },
    },
  },
  plugins: [],
}