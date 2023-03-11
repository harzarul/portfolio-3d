/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: "rgba(245, 245, 245, .9)",
        white2: "rgba(225, 225, 225, .3)",
        black: "rgba(0, 0, 0, .9)",
        black2: "rgba(10, 10, 10, .7)",
        green: "rgba(0, 237, 185, 1)",
        glass: "rgba(245, 245, 245, .2)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans"],
        Nunito: ["Nunito", "sans"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}