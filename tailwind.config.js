/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        pink: "#F9CADA",
        sky: "#BCE7F0",
        bgsatu: "#F9F9F9",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
