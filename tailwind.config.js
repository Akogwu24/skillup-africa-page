module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '7rem',
        '2xl': '9rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        DEFAULT: '#1F28CF',
      },
      green: {
        DEFAULT: '#1FCF6E',
        dark: '#128E5A',
      },
      gray: {
        light: '#F5F5F5',
        DEFAULT: '#4B4F51',
      },
      red: {
        DEFAULT: '#F00',
      },
      purple: {
        DEFAULT: '#eb17cb',
      },
      white: {
        DEFAULT: '#FFF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
