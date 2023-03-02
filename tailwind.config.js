/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
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
        'mobile-main': "url('/mobile-main-bg.png')"
      }
    },
  },
  plugins: [],
}
