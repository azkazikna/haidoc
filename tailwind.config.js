/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'montserrat': ['"Montserrat"', 'sans-serif'],
      },
      colors: {
        'background': "#EBF3FA",
        'primary': '#687B9E',
        'secondary': '#4D77FF',
        'step': '#E3ECF6',
        'paragraf': '#728AB7',
      }
    },
  },
  plugins: [],
}
