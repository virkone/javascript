const { ERROR, OFF } = require('../values');

module.exports = {
  rules: {
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: ['**/*.stories.tsx', '**/*.test.tsx', '@storybook/**', 'jest.setup.ts'],
      },
    ],
  },
  extends: ['plugin:import/typescript'],
};
