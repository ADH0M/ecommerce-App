/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      display:['Poppins' ,'sans-serif']
    },
    extend: {
      colors:{
        primary:'white',
        logo:'#00b2b7',
        shopText:'#6366f1'
        
      },
      backgroundColor:{
        navBg:'#c0feff',
        navDark:'#808080',
      },
      backgroundImage:{
        'shopbg2':'URL(./src/assets/Shop/shopbg.jpg)',
        'shopbg':'URL(./src/assets/Shop/ShopBg.webp)',
        'shopbg3':'URL(./src/assets/Shop/ShopBackground.jpg)'
      },
      
    },
  },
  plugins: [],
}