/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      colors: {
        cream: {
          100: '#b3b3b3', 
          200: '#FFF8DC',  
        },
        beige: {
          100: '#F5F5DC',  
          200: '#FAF0E6',  
        },
        silver: {
          100: '#C0C0C0',  
          200: '#D3D3D3',  
        },
        gray: {
          100: '#D3D3D3', 
          200: '#C0C0C0', 
          300: '#A9A9A9',   
          400: '#696969',   
          500: '#708090',   
        },
        gold: {
          100: '#FFD700',   
          200: '#E6BE8A',   
          300: '#DAA520',  
          400: '#B8860B', 
          500: '#D4AF37',  
        },
        brown: {
          100: '#D2B48C',  
          200: '#F4A460',  
          300: '#D2691E',   
          400: '#8B4513', 
          500: '#6F4E37',   
        },
      },
    
    },
  },
  plugins: [],
}

