module.exports = {
  extends: ['./rules/es6', './rules/typescript', './rules/import', './rules/prettier'].map(require.resolve),
  rules: {}
};
