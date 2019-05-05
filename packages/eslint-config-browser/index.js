/* eslint-disable import/no-commonjs */
module.exports = {
  parserOptions: { sourceType: 'module' },
  env: { browser: true },
  extends: ['@abuffseagull/eslint-config-base'],
  plugins: ['unicorn', 'xss'],
  rules: {
    // import
    'import/no-commonjs': 'warn',
    'import/no-amd': 'warn',

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
