/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  mode: 'jit',
  content: ["./templates/**/*.{html,htm}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        playfairDisplay: ['Playfair Display', 'serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
        avenir: ['Avenir', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      colors: {
        'dg-blue': '#88BDBC',
        'dg-light-blue': '#254E58',
        'dg-dark-blue': '#112D32',
        'dg-dark-grey': '#4F4A41',
        'dg-light-grey': '#6E6658',
        'tedo-dark-blue': '#080F5B',
        'tedo-blue': '#0D19A3',
        'tedo-light-green': '#15DB95',
        'tedo-light-yellow': '#F4E4C1',
        'tedo-yellowish': '#E4C580',
        'cheerful-1': '#FBE8A6',
        'cheerful-2': '#F4976C',
        'cheerful-3': '#303C6C',
        'cheerful-4': '#B4DFE%',
        'cheerful-5': '#D2FDFF',
        'accent-purple': '#802BB1',
        'accent-dark-purple': '#2D283E',
        'accent-gray-purple': '#564F6F',
        'accent-light-purple': '#4C495D',
        'accent-gray': '#D1D7E0',
        'elegant-blue': '#123C69',
        'elegant-red': '#AC3B61',
        'elegant-gray': '#BAB2B5',
        'elegant-yellow': '#EEE2DC',
        'elegant-orange': '#EDC7B7',
        'simple-dark': '#0B0C10',
        'simple-gray': '#1F2833',
        'simple-light': '#C5C6C7',
        'simple-green': '#66FCF1',
        'simple-dark-green': '#45A29E',
      },
    },
    backgroundImage: {
      'adey-image': "url('/static/assets/finance-5.jpg')",
    },
  },
  plugins: [],
}

