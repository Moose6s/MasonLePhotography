/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      backgroundColor: '#f5f5f3',
      GreyFont: '#28282a',
      LightGreyFont: '#757575',
      BorderGrey: "#E3E3E3",
      MiddleGreyFont: "#5D5D5D"
    },
    extend: {
      fontFamily: {
        'poppins': ['poppins']
      },
      fontFamily: {
        'roboto-mono': ['roboto mono']
      },
      fontFamily: {
        'kanit': ['kanit']
      },
      fontFamily: {
        'montserrat': ['montserrat']
      },
    },
  },
  plugins: [],
}