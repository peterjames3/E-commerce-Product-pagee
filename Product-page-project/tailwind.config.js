/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      fontfamily: "Kumbh Sans, sans-serif",
    },
    screen: {
      sm: "740px",
      md: "765px",
      lg: "1000px",
      xl: "1440px",
    },
    extend: {
      color: {
        Orange: "hsl(26, 100%, 55%)",
        Paleorange: "hsl(25, 100%, 94%)",

        Verydarkblue: "hsl(220, 13%, 13%)",
        Darkgrayishblue: "hsl(219, 9%, 45%)",
        Grayishblue: "hsl(220, 14%, 75%)",
        Lightgrayishblue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)",
      },
    },
  },
  plugins: [],
};
