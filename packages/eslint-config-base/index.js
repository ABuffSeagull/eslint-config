/* eslint-disable import/no-commonjs */
const isProduction = process.env.NODE_ENV == 'development' ? 'error' : 'warn';

module.exports = {
  parserOptions: { sourceType: 'module' },
  env: { es6: true },
  plugins: ['you-dont-need-lodash-underscore', 'import', 'promise'],
  extends: [
    'eslint:recommended',
    'plugin:you-dont-need-lodash-underscore/compatible',
    'plugin:promise/recommended',
  ],
  rules: {
    // possible errors
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'warn',
    'no-console': isProduction,
    'no-debugger': isProduction,
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
    'no-inner-declarations': ['error', 'both'],
    'no-misleading-character-class': 'error',
    'no-template-curly-in-string': 'warn',
    'no-unreachable': isProduction,
    'require-atomic-updates': 'warn',
    'valid-typeof': ['error', { requireStringLiterals: true }],

    // best practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
    curly: ['error', 'multi-or-nest', 'consistent'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': ['error'],
    'no-alert': isProduction,
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-empty-function': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: true }],
    'no-loop-func': 'error',
    'no-magic-numbers': ['error', { enforceConst: true }],
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'warn',
    'no-proto': 'error',
    'no-restricted-properties': ['error', { property: 'prototype', message: 'Please use Object.create() instead.' }],
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': isProduction,
    'no-with': 'error',
    'prefer-named-capture-group': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: ['error', 'as-needed'],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: 'error',
    'no-label-var': 'error',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'warn',
    'no-undefined': 'error',
    'no-use-before-define': ['error', 'nofunc'],

    // stylistic issues
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    camelcase: 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'error',
    'func-names': ['error', 'as-needed', { generators: 'as-needed' }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: false }],
    'function-paren-newline': ['error', 'multiline'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    // eslint-disable-next-line no-magic-numbers
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 'first',
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'key-spacing': ['error'],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'max-len': ['warn', { code: 120 }],
    'multiline-ternary': ['error', 'always-multiline'],
    'newline-per-chained-call': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-plusplus': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': ['error', { multiline: true }],
    'object-curly-spacing': ['error', 'always'],
    'operator-assignment': 'error',
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'always',
      asyncArrow: 'always',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',

    // ECMAScript 6
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', { before: false, after: true }],
    'no-confusing-arrow': ['warn', { allowParens: true }],
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'warn',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', { array: true, object: true }],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': 'error',

    // Import
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-commonjs': 'warn',
    'import/no-amd': 'warn',
    'import/first': 'error',
    'import/exports-last': 'warn',
    'import/no-duplicates': 'error',
    'import/extensions': ['warn', 'always'],
    'import/order': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',

    // Promise
    'promise/no-native': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
  },
};
