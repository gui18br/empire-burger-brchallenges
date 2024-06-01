/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#635352",
        secondary: "#34201F",
        300: "#F59A1B",
        400: "#FAE2CB",
        opaqueGray: "rgba(64, 64, 64, 0.8)",
      },
      fontWeight: {
        normal: 400,
        xbold: 900,
      },
      fontSize: {
        77.65: "77.65px",
        41: "41px",
        32: "32px",
        29.38: "29.38px",
        25: "25px",
        22.86: "22.86px",
        20: "20px",
        18: "18px",
      },
      width: {
        970: "970px",
        900: "900px",
        770: "770px",
        570: "570px",
        123: "123px",
        60: "60px",
        31: "31px",
        29.49: "29.49px",
        27: "27px",
        21.43: "21.43px",
      },
      height: {
        520: "520px",
        430: "430px",
        130.93: "130.93px",
        60: "60px",
        34: "34px",
        31: "31px",
        30.81: "30.81px",
        14.27: "14.27px",
        21: "21px",
      },
      lineHeight: {
        70: "70px",
        32: "32px",
      },
      padding: {
        "2s": "0.1px",
      },
      margin: {
        122: "122px",
      },
      fontFamily: {
        lilita: ["Lilita One", "cursive"],
        sans: ["Lato", "sans-serif"],
      },
    },
  },

  plugins: [],
};
