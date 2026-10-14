/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'], // <-- TAMBAHKAN INI
      },
      colors: {
        medisync: {
          dark: '#0f172a',
          primary: '#0ea5e9',
          teal: '#14b8a6',
          light: '#f8fafc',
        }
      }
    },
  },
  plugins: [],
}