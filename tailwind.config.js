const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
        'guthen': ['Guthen Bloots Personal Use', 'scipt'], // Ensure fonts with spaces have " " surrounding it.
        'meta': ['Meta Pro Book', 'sans-serif']
      },
    },
  },
  plugins: [],
}
