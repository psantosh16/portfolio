/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Vida: ['Vidaloka', 'serif'],
        Saira: ['Saira Extra Condensed', 'sans-serif'],
        Yantra: ['Yantramanav', 'sans-serif']
      },
      backgroundImage: {
        'bg-pattern': "url('/src/assets/bg.png')",
      }
    },
  },
  plugins: [],
}
