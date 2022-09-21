/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      robot: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
