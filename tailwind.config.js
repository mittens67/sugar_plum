/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sugarplum: {
          background: "#EFF6FB",
          sp_pink: "#E63E6D",
          sp_pink_transparent: "#E63E6D30",
          yellow: "#FFE604",
          container: "#E6F2FC",
          footer_bg: "#090816",
          sp_red_pink: "#AA2A4E",
          sp_dark_purple: "#E0EDF6"
        }
      },
      textColor: {
        footer_color: "#F3C5E0",
        footer_pink: "#F80091",
        sp_pink: "#E63E6D",
        sp_yellow: "#ECD60A"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter' : ['Inter', 'sans-serif']
      },
      boxShadow: {
        "nav_logo": '0px 4px 4px 0px rgba(230, 62, 109, 0.18);',
        "cat_card": '4px 4px 4px 0px rgba(230, 62, 109, 0.18);'
      },
      borderColor: {
        sp_pink: "#E63E6D",
        sp_red_pink: "#AA2A4E"
      },
      placeholderColor: {
        sp_pink: '#E63E6D60',
        sp_red_pink: "#AA2A4E"
      }
    },
  },
  plugins: [],
}