/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        "primary" : "#00ADB5",
        "secondary" : "#393E46",
        "text" : "#EEEEEE",
        "background": "#222831"
      },
      container:{
        center:true,
        padding:"2rem"
      }
    }
  },
  plugins: [],
};
