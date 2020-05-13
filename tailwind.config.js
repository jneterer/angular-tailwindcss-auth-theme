module.exports = {
  purge: [],
  theme: {
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      ['2xl']: '0 25px 50px -12px rgba(0, 0, 0, .25)',
      ['3xl:']: '0 35px 60px -15px rgba(0, 0, 0, .3)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(255, 8, 0, 0.5)',
      focus: '0 0 0 3px rgba(255, 8, 0, 0.5)',
    },
    extend: {
      colors: {
        primary: '#FF0800',
        'primary-gradient': ['rgba(255,8,0,1)', 'rgba(255,8,0,0.788953081232493) 39%', 'rgba(255,8,0,0.6516981792717087)'],
        'primary-striped': ['rgba(255,8,0,1)', 'rgba(255,8,0,1) 10px', 'rgba(255,8,0,0.6516981792717087) 10px', 'rgba(255,8,0,0.6516981792717087) 20px']
      },
    },
    linearGradientDirections: {
      't': 'to top',
      'tr': 'to top right',
      'r': 'to right',
      'br': 'to bottom right',
      'b': 'to bottom',
      'bl': 'to bottom left',
      'l': 'to left',
      'tl': 'to top left',
      'n45': '-45deg'
    },
    linearGradientColors: theme => theme('colors'),
    repeatingLinearGradientColors: theme => theme('colors'),
    repeatingLinearGradientLengths: {
      'sm': '20px'
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients')
  ],
}
