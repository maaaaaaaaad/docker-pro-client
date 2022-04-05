module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
