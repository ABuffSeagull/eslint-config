module.exports = {
  env: {
    node: true
  },
  extends: ['@abuffseagull/eslint-config-base'],
  plugins: ['node'],
  rules: {
    // node.js & commonjs
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-sync': 'warn',
  }
}
