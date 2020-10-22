import { hasReact, hasTypescript } from "../utils/has";

const base = {};

const plugins = [
  'jest',
  'testing-library'
];

const extend = [
  'plugin:jest/recommended',
  'plugin:jest/style',
  'plugin:testing-library/react'
];

const rules = {
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        '**/*.test.js',
        ...(hasTypescript ? ['**/*.test.ts'] : []),
        ...(hasReact && hasTypescript ? ['**/*.test.tsx'] : []),
      ]
    }
  ]
};

export default {
  base,
  plugins,
  extend,
  rules
}