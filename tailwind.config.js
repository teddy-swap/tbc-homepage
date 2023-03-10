/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    screens: {
      'xs': "390px",
      'sm': "600px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px"
    },
    extend: {
      screens: {
        '2xl': "1366px",
        '3xl': "1440px",
        '4xl': "1920px",
      },
      colors: {
        'teddy-active': "#46B58D",
        'teddy-smallest': "#f44336",
        'teddy-inactive': "rgba(255,255,255,0.62)",
        'aztec': "#0C191F",
        'gold-sand': "#E7C596",
        'firefly': "#10242E"
      },
      backgroundImage: {
        'main': "url('/main-bg.png')",
        'wave': "url('/wave.png')",
        'teddy': "url('/teddy-smirk.png')",
        'mobile-main': "url('/mobile-main-bg.png')",
      },
      backgroundPosition: {
        'left-bottom': "left bottom",
      },
      fontFamily: {
        'montserrat': "'Montserrat', sans-serif",
      }
    },
  },
  plugins: [],
}
