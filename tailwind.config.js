module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx}",
    "./src/componets/*{js.jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      fontFamily:{
        Roboto: ["Roboto, sans-serif"],
      },
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124",
      }
    },
    extend: {
      backgroundImage: {
        'main-image-large': "url('./img/main-large.png')",
        'main-image-medium': "url('./img/main-medium.png')",
        'main-image-small': "url('./img/main-small.png')",

      },
    }
  },
  plugins: [],
}
