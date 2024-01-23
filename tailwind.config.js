/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'text': {
          50: '#e8fafd',
          100: '#d1f4fa',
          200: '#a2e9f6',
          300: '#74def1',
          400: '#45d4ed',
          500: '#17c9e8',
          600: '#12a1ba',
          700: '#0e788b',
          800: '#09505d',
          900: '#05282e',
          950: '#021417',
        },
        'background': {
          50: '#e8f9fc',
          100: '#d2f3f9',
          200: '#a4e8f4',
          300: '#77dcee',
          400: '#49d1e9',
          500: '#1cc5e3',
          600: '#169eb6',
          700: '#117688',
          800: '#0b4f5b',
          900: '#06272d',
          950: '#031417',
        },
        'primary': {
          50: '#e8fafd',
          100: '#d1f5fa',
          200: '#a2ebf6',
          300: '#74e1f1',
          400: '#45d6ed',
          500: '#17cce8',
          600: '#12a3ba',
          700: '#0e7b8b',
          800: '#09525d',
          900: '#05292e',
          950: '#021417',
        },
        'secondary': {
          50: '#fde8f1',
          100: '#fad1e2',
          200: '#f6a2c5',
          300: '#f174a8',
          400: '#ed458b',
          500: '#e8176e',
          600: '#ba1258',
          700: '#8b0e42',
          800: '#5d092c',
          900: '#2e0516',
          950: '#17020b',
        },
        'accent': {
          50: '#fdf2e8',
          100: '#fae4d1',
          200: '#f6c9a2',
          300: '#f1ae74',
          400: '#ed9345',
          500: '#e87917',
          600: '#ba6012',
          700: '#8b480e',
          800: '#5d3009',
          900: '#2e1805',
          950: '#170c02',
        },
        sugarplum: {
          background: "#EFF6FB",
          sp_pink: "#E63E6D",
          sp_pink_transparent: "#E63E6D30",
          yellow: "#FFE604",
          container: "#E6F2FC",
          footer_bg: "#090816",
          sp_red_pink: "#AA2A4E",
          sp_black: "#111111",
          black: "#3d3d3d",
          pink: "#ff005f",
          purple: " 	#982364",
          peach: "#e4b2ab",
          white: "#f3efe8",
        },
        spBlack: "#3d3d3d",
        spPink: "#ff005f",
        spPurple: " 	#982364",
        spPeach: "#e4b2ab",
        spWhite: "#f3efe8",
        spBlue: "#a7c2cc"
      },
      textColor: {
        sugarplum: {
          black: "#3d3d3d",
          pink: "#ff005f",
          purple: " 	#982364",
          peach: "#e4b2ab",
          white: "#f3efe8",
        },
        footer_color: "#F3C5E0",
        footer_pink: "#F80091",
        sp_pink: "#E63E6D",
        sp_yellow: "#ECD60A",
        spBlack: "#3d3d3d",
        spPink: "#ff005f",
        spPurple: " 	#982364",
        spPeach: "#e4b2ab",
        spWhite: "#f3efe8"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        type1: "0px 4px 4px 0px rgba(230, 62, 109, 0.18);",
        cat_card: "4px 4px 4px 0px rgba(230, 62, 109, 0.18);",
      },
      borderColor: {
        sugarplum: {
          black: "#3d3d3d",
          pink: "#ff005f",
          purple: " 	#982364",
          peach: "#e4b2ab",
          white: "#f3efe8",
        },
        sp_pink: "#E63E6D",
        sp_red_pink: "#AA2A4E",
        spBlack: "#3d3d3d",
        spPink: "#ff005f",
        spPurple: " 	#982364",
        spPeach: "#e4b2ab",
        spWhite: "#f3efe8"
      },
      placeholderColor: {
        sugarplum: {
          black: "#3d3d3d",
          pink: "#ff005f",
          purple: " 	#982364",
          peach: "#e4b2ab",
          white: "#f3efe8",
        },
        sp_pink: "#E63E6D60",
        sp_red_pink: "#AA2A4E",
        spBlack: "#3d3d3d",
        spPink: "#ff005f",
        spPurple: " 	#982364",
        spPeach: "#e4b2ab",
        spWhite: "#f3efe8"
      },
    },
  },
  plugins: [],
};
