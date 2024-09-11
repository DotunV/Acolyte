/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "sans-serif"],
      },
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          100: "#ffffff3d",
          200:"#ffffff29",
          300: "#ffffffa3",
        },
      },
      backgroundImage: {
        "gray-gradient":
          "linear-gradient(27deg, #1D2939 8.33%, #344054 91.67%)",
        "light-gradient":
          "linear-gradient(27deg, #1D2939 8.33%, #344054 91.67%)",
        "dark-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 168.33%)",
      },
    },
  },
  plugins: [],
};
