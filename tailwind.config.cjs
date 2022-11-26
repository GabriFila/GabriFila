/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  safelist: [
    'fill-primary',
    'fill-secondary',
    'stroke-primary',
    'stroke-secondary',
  ],
  theme: {
    fontFamily: {
      base: ['Inter', 'monospace'],
      gv: ["'Gen Vision Font'", 'sans-serif'],
    },
    colors: {
      bgStart: '#131313',
      bgEnd: '#202020',
      text: '#FFFFFF',
      textDisabled: '#CCCCCC',
      primary: '#FDBA66',
      secondary: '#FF5C61',
    },
  },
  plugins: [require('tailwindcss-touch')()],
  important: true,
};
