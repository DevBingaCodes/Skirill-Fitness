/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: '#3c3f45',
        orange: '#ef3a29',
        'dark-grey': '#464d53',
        'calorie-card': '#656565',
        'light-grey': '#d9d9d9',
        muted: '#9c9c9c',
      },
      backgroundImage: {
        plan: 'linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%)',
      },
    },
  },
  plugins: [],
};
