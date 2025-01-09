/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Libre Baskerville", "serif"],
        head: ["Faculty Glyphic", "serif"],
        body: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
