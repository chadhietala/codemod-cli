'use strict';

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'prettier',
    'node',
  ],
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'prettier',
  ],
  env: {
    node: true
  },
  rules: {
    'prettier/prettier': 'error',
    'node/no-unsupported-features': ['error', { ignores: ['modules'] }],
  },

  overrides: [
    {
      files: ['tests/**'],

      env: {
        qunit: true
      }
    }
  ]
};
