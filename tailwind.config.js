/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('../assets/0022347955_100.png')",
      }
    },
  },
  plugins: [],
}
