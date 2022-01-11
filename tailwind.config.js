module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx}",
    "./src/componets/*{js.jsx}"],
  theme: {
    container: {
      width: '100%',
      center: true,
      fontFamily:{
        Roboto: ["Roboto, sans-serif"],
      },

    },
    extend: {
      backgroundImage: {
        'hero': "url('./img/hero/Genesis_C_Food_Hero_1440x580.jpg')",
        'hero2': "url('./img/hero/AboutHero.jpg')",
        'hero3': "url('./img/hero/footer-bg-desktop.jpg')",
        'hero4': "url('./img/hero/NewGrill_Hero_1440x580.jpg')",
        'hero5': "url('./img/hero/NewAccessories_Hero_1440x580.jpg')"
        


      },
    }
  },
  plugins: [],
}
