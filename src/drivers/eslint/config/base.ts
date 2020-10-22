import { hasReact, hasTests } from '../utils/has';

const base = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: hasTests
  },
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: hasReact
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  }
};

const plugins = [
  'import'
];

const extend = [
  'airbnb'
];

const rules = {
  'import/extensions': ['warn', 'never'],
  'object-curly-newline': [
    'error',
    {
      ImportDeclaration: 'never',
      ExportDeclaration: 'never'
    }
  ]
};

export default {
  base,
  plugins,
  extend,
  rules
};