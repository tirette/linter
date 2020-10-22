import { hasTypescript } from "../utils/has";

const base = {};

const plugins = [
  'react-hooks'
];

const extend = [
  'plugin:react/recommended'
];

const rules = {
  'react/prop-types': hasTypescript ? 'off' : 'error',
  'react/jsx-filename-extension': 'off',
  'react/jsx-curly-newline': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'warn',
  'jsx-a11y/label-has-associated-control': 'off'
};

export default {
  base,
  plugins,
  extend,
  rules
};