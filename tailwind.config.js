module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      black: '#0c0c0c',
      white: '#fff',
      orange: '#db5f0c',
      purple: '#9312db',
      blue: '#4c3cfa',
      brown: '#622c22',
      green: '#4eda12',
      red: '#d51449',
      grey: '#d8d8d8',
      yellow: '#daab0e',
      pink: '#d810ab',
      skyBlue: '#0cdad0',
      darkBlue: '#1111de',
      limeGreen: '#b9da10',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    fontFamily: {
      sans: ['Poller One', 'cursive'],
      serif: ['Roboto Flex', 'sans-serif'],
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      border: {
        2: '2px solid',
        3: '3px solid',
      },
      borderB: {
        2: '2px solid',
      },
      shadow: {
        xl: '6px 6px 0px 0px #000',
      },
    },
  },
  plugins: [],
};