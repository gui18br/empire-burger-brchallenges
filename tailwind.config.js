/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#635352",
        secondary: "#34201F",
        300: "#F59A1B",
        opaqueGray: "rgba(64, 64, 64, 0.8)",
      },
      fontWeight: {
        normal: 400,
      },
      fontSize: {
        18: "18px",
        29.38: "29.38px",
      },
      width: {
        123: "123px",
        29.49: "29.49px",
        27: "27px",
        21.43: "21.43px",
      },
      height: {
        34: "34px",
        30.81: "30.81px",
        14.27: "14.27px",
        21: "21px",
      },
    },
  },
  plugins: [],
};
