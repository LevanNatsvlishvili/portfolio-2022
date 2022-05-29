module.exports = {
  purge: {
    content: ['./Components/**/*.js', './pages/**/*.js', './Layout/**/*.js'],
  },
  theme: {
    extend: {
      colors: {
        'deep-blue': '#072142',
        'grey-text': '#91B3BC',
        'blue-glow': '#2C3D7A',
        orange: '#F28C28',
      },
      spacing: {
        100: '30rem',
        '600px': '600px',
        '1/5': '20%',
      },
      borderRadius: {
        '1/2': '50%',
      },
      boxShadow: {
        'blue-glow': '2px 2px 13px -1px #2c3d7a',
        'neon-glow':
          '0 0 5px #2c3d7a60, 0 0 25px #2c3d7a60, 0 0 50px #2c3d7a60, 0 0 200px #2c3d7a60',
      },
    },
  },
  plugins: [],
};
