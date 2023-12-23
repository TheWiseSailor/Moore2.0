// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/components/**/*.js", // Add this line to include Header.js
    // Add other file types as needed
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
