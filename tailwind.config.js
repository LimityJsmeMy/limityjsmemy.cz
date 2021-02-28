/*module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: []
}*/
module.exports = {
  theme: {
    extend: {
      colors: {
        'ljm-green': '#6cac44',
        'ljm-green-hover': '#568636',
        'ljm-orange': '#ff8400',
        'ljm-orange-hover': '#c86400'
      }
    }
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      ringWidth: ['hover'],
      ringOpacity: ['hover'],
      borderWidth: ['hover'],
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
