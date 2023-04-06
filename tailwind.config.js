/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    // customized breakpoints //
    screens: {
      'mobile': '450px',
        
      'tablet': '760px',
      // => @media (min-width: 760px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        'header': "url('../assets/0022347955_100.png')",
        'sweats' : "url('../assets/gen6.jpg')",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true })
  ],
}
