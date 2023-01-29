/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", " Helvetica", "Arial", "sans-serif"],
        "open-sans": ["Open Sans"],
      },
      colors: {
        "zoom-blue": "#0b5cff",
        navy: "#00053d",
      },
    },
  },
  plugins: [],
};
