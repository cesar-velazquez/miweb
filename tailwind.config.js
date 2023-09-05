/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-bg": "#0F0817",   
        "yellow-border": "#FFE24B"
      },
    },
    fontFamily:{
      "urbanist": ['Urbanist', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  darkMode: 'class',
}

