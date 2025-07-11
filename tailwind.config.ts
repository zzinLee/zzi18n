/** @type {import('tailwindcss').Config} */

const px0_100 = Object.fromEntries(
  Array.from({ length: 101 }, (_, i) => [i, `${i}px`]),
);

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        kakao: ["KakaoSmallSans", "sans-serif"],
      },
      spacing: px0_100,
      borderWidth: px0_100,
      fontSize: {
        ...px0_100,
        sm: ["14px", "1.5"],
        base: ["16px", "1.5"],
        lg: ["18px", "1.6"],
        xl: ["20px", "1.6"],
        "2xl": ["24px", "1.6"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      colors: {
        neutral: {
          background: "#FFFFFF",
          text: "#111827",
          border: "#E5E7EB",
        },
        state: {
          error: "D9534F",
          success: "3BC55F",
          "error-hover": "#C94540",
          "success-hover": "#32B75C",
        },
        primary: {
          base: "#0088DD",
          hover: "18A0FB",
        },
        secondary: {
          base: "#6B7280",
        },
      },
    },
  },
  plugins: [],
};
