/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  variants: {
    width: ['responsive', 'hover', 'focus'],
  },
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        grid: '#babec3',
        'secondary-violet': '#617891',
      },
      colors: {
        'main-teal': '#03dac6',
        'white-background': '#f0f0f0',
        'off-black': '#2a2a2a',
        'secondary-violet': '#617891',
        grid: '#babec3',
      },
      fontFamily: {
        custom: ['NeueMontreal', 'sans-serif'],
      },
      grayscale: {
        20: '20%',
        50: '50%',
        80: '80%',
      },
      invert: {
        50: '50%',
      },
      animation: {
        gradient: 'gradient 11s ease-in-out infinite',
        buttonHover: 'buttonHover 9s linear 1',
      },
    },
    keyframes: {
      gradient: {
        '0%': { 'background-position': '0 0' },
        '50%': { 'background-position': '1000 0' },
        '100%': { 'background-position': '0 0' },
      },
      buttonHover: {
        '0%': { 'background-position': '0 0' },
        '100%': { 'background-position': '100 0' },
      },
    },
    screens: {
      xs: '1px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mlg: { max: '1024px' },
    },
    plugins: [require('tw-elements/dist/plugin')],
  },
};
