module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'modified-blue': 'rgba(255,255,255,0.15)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'swap'],
      },
    },
  },
  plugins: [],
}
