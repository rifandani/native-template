module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
  },
};
