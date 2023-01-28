const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'theme' : '#63A4FF',
      'faint' : '#696969',
      'form' : '#AFAFAF',
      amber: colors.amber,
      emerald: colors.emerald,
      white : colors.white,
      black : colors.black, 
      slate : colors.slate,
      cyan : colors.cyan,
      blue : colors.blue,
      magenta: colors.magenta,
      purple : colors.purple,
      pink : colors.pink,
      red : colors.red
    } ,
    screens: {
      'xs': "200px" ,

      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
