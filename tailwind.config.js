/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#FAF1E8',
        'nav-bg': '#FFDADB',
      },
      fontFamily: {
        'libre': ['Libre Baskerville', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
