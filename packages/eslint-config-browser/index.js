/* eslint-disable import/no-commonjs */
module.exports = {
  env: { browser: true },
  extends: ['@abuffseagull/eslint-config-base'],
  plugins: ['unicorn', 'xss'],
  rules: {
    // unicorn
    'unicorn/prefer-node-append': 'error',
    'unicorn/prefer-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicode/prefer-text-content': 'error',

    // xss
    'xss/no-mixed-html': 'error',
    'xss/no-location-href-assign': 'error',
  },
};
