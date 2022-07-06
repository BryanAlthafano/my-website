// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        permanentMarker: ["Permanent Marker"],
      },
      colors: {
        primary: "#EB8D00",
        background: "#121212",
        primaryBlue: "#1D2131",
      },
    },
  },
  plugins: [],
};
