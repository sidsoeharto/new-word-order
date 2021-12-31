const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Guthen': ['"Guthen Bloots Basic"', 'serif'], // Ensure fonts with spaces have " " surrounding it.
        'Meta': ['"Meta"', 'serif']
      },
    },
  },
  plugins: [],
}
