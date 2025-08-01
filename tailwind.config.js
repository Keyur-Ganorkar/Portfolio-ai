/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        auroraGreen: '#4ADE80',
        auroraPurple: '#A855F7',
        auroraPink: '#EC4899',
        auroraBlue: '#06B6D4',
        burningRed: '#EF4444',
        deepSpaceNavy: '#0A0B1E'
      }
    }
  },
  plugins: []
}
