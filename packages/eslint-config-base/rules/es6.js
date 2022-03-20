const { ERROR, OFF } = require('../values');

module.exports = {
  rules: {
    'no-loop-func': OFF,
    'no-redeclare': ERROR,
    'no-shadow': OFF,
    'no-restricted-exports': [
      ERROR,
      {
        restrictedNamedExports: [],
      },
    ],
    'object-curly-spacing': [ERROR, 'always', { arraysInObjects: true, objectsInObjects: true }],
  },
  extends: ['airbnb-base'],
};
