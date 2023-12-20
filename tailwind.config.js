/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // CONTAINER 
      maxWidth: {
        'container': '1320px',
        'containerBanner': '1280px',
        'collectionContainer': '1270px',
        'productContainer': '1230px',
        'fashionContainer': '1330px',
      },
      // COLOR 
      colors: {
        'manuBgcolor': '#FAE3B6',
        'btnBrcolor': '#FFD687',
        'btnHcolor': '#FDBB57',
        'btnSHAcolor': 'rgba(0, 0, 0, 0.25)',
        'productBgcolor': '#CFA485',
        'starColor': '#FFAF37',
        'dollarColor': '#C4C4C4',
        'boxBgColor': '#FEECC8',
      },
      // FONTS FAMILY 
      fontFamily: {
        'poppinF': ['Poppins, sans-serif'],
        'frankF': ['Frank Ruhl Libre, serif'],
        
    },
  },
  plugins: [],
}

}