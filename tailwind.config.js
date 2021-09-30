const { fontFamily } = require("tailwindcss/defaultTheme");
fontFamily["sans"] = [
  "Roboto", // <-- Roboto is a default sans font now
  "system-ui",
  // <-- you may provide more font fallbacks here
];

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: fontFamily, // <-- this is where the override is happening
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
