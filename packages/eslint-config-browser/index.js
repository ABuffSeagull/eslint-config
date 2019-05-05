/* eslint-disable import/no-commonjs */
module.exports = {
  env: { browser: true },
  extends: ['@abuffseagull/eslint-config-base'],
  plugins: ['unicorn'],
  rules: {
    // unicorn
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicode/prefer-text-content': 'error',
  },
};
