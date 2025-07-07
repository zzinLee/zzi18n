/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        figma: {
          blue: "#18A0FB",
          green: "#0D99FF",
          red: "#F24822",
          yellow: "#FFC700",
          purple: "#8B5CF6",
          gray: {
            50: "#F5F5F5",
            100: "#E5E5E5",
            200: "#CCCCCC",
            300: "#B3B3B3",
            400: "#999999",
            500: "#808080",
            600: "#666666",
            700: "#4D4D4D",
            800: "#333333",
            900: "#1A1A1A",
          },
        },
      },
    },
  },
  plugins: [],
};
