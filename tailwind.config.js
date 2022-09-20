/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: "768px",
        laptop: "1024px",
        desktop: "1170px",
      },
      colors: {
        white: "#FFFFFF",
        teal: "#0FEFFD",
        crimson: "#E10856",
        green: "#16db65",
        "dark-grey": "#192026",
        "medium-grey": "#868686",
        "light-grey": "#374151",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
