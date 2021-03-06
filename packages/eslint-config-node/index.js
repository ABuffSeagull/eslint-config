/* eslint-disable import/no-commonjs */
module.exports = {
  env: { node: true },
  extends: ['@abuffseagull/eslint-config-base', 'plugin:node/recommended'],
  plugins: ['node', 'unicorn'],
  rules: {
    'no-console': 'off',

    // node.js & commonjs
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-sync': 'warn',

    // node
    'node/no-unsupported-features/es-syntax': ['error', { ignores: ['modules'] }],

    // node plugin
    'node/exports-style': ['error', 'module.exports'],
    'node/file-extension-in-import': 'error',
    'node/prefer-promises/fs': 'error',

    // unicorn
    'unicorn/no-process-exit': 'error',
  },
};
