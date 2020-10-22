import { internal } from '../../../utils/files';

const base = {
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        projects: internal('./')
      }
    }
  },
  parser: '@typescript-eslint/parser'
};

const plugins = [
  '@typescript-eslint'
];

const extend = [
  'plugin:@typescript-eslint/recommended'
];

const rules = {};

export default {
  base,
  plugins,
  extend,
  rules
};