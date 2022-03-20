const { ERROR } = require('../values');

module.exports = {
  rules: {
    '@typescript-eslint/no-loop-func': ERROR,
    '@typescript-eslint/no-redeclare': ERROR,
    '@typescript-eslint/no-shadow': ERROR,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'],
};
