/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        heading1: "42px",
        mheading1: "40px",
        heading2: "32px",
        mheading2: "32px",
        heading3: "28px",
        mheading3: "26px",
        heading4: "24px",
        mheading4: "18px",
        menu: "20px",
        mmenu: "18px",
        body: "18px",
        mbody: "15px",
      },
      lineHeight: {
        heading1: "1.4em",
        mheading1: "1.3em",
        heading2: "1.4em",
        mheading2: "1.4em",
        heading3: "1.6em",
        mheading3: "1.6em",
        heading4: "1.6em",
        mheading4: "1.6em",
        menu: "1.4em",
        mmenu: "1.4em",
        body: "1.4em",
        mbody: "1.4em",
      },
      letterSpacing: {},

      colors: {
        brand: "#7B00FF",
        lightbrand: "#FAF5FF",
        hoverbrand: "#8E24FF",
        second: "#FFF7DB",
        darkgray: "#595959",
        backdarkgray: "#E0E0E0",
        lightgray: "#ABABAB",
        backgray: "#F5F5F5",
      },
      borderRadius: {
        radius100: "100px",
      },
      boxShadow: {
        "inner-lr":
          "inset 10px 0 45px -10px rgba(255, 255, 255, 255.5), inset -10px 0 15px -10px rgba(255, 255, 255, 0.5)",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.5, 0, 0.5, 1)",
      },
    },
  },
  plugins: [],
};
