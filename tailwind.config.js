/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#fff",
      dark_white: "#f8f7fd",
      purple: "#6d66ec",
      dark_purple: "#000018",
      light_purple: "#e8e5f8",
      gray: "#9b9b9b",
    },
  },
  plugins: [],
};
