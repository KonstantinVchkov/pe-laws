/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#F8F8FF", // Custom primary color
        secondary: "#03025F", //blue secondary color
        tertiary: "#F2AF17", //orange third color
        navBar: "#5E618899", // navigation bar color
      },
    },
  },
  plugins: [],
};
