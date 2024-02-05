/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#FEE6D8',
        secondaryDark: '#143449',
        secondary: '#19415C',
        secondaryLight: '#2D77A9',
        bgOpacidad : 'rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}

