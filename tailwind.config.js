const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.ts',
  ],
  // TODO set to media before deployment
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
