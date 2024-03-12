module.exports = {
  content: [
    './pages/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
