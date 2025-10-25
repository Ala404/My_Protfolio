/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('https://img.freepik.com/free-photo/beautiful-office-space-cartoon-style_23-2151043271.jpg?t=st=1722757086~exp=1722760686~hmac=93aac44fd9fe47f5da4f5975a8303e46e1c8b04eee5e32b46e3699bf1e0950bd&w=996')",
        
      },
    },
  },
  plugins: [],
};
