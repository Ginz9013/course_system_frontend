/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#405B6A",
        "secondary": "#BECCD3",
        "darker": "#203642"
      }
    },
  },
  plugins: [],
}

