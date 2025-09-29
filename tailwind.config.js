// tailwind.config.js
const { nativewind } = require("nativewind/preset");

module.exports = {
  content: ["./app/*.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
   
  presets: [require("nativewind/preset")],
};
