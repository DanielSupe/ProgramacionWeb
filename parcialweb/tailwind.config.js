/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor:{
        verdeLogin: "#1aebb6",
        blanco:"#fffdc0",
        azulgris: "#b9d7a1"
      },
      boxShadow: {
        shadow3xl: '0px 2px 25px 0px #737F71',
      },
      gridTemplateColumns: {
        autoFit: "repeat(auto-fit, minmax(200px, 1fr))"
      },
    },
  },
  plugins: [],
}

