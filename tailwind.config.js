/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FF9357;",
        dark: "#243A5A",
        grey: "#5D5D5D",
        lightgrey: "#888888",
      },
      backgroundColor: {
        white: "#F7FAFD",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};