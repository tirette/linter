import baseConfig from './config/base';
import handleTypescript from './config/handleTypescript';
import handleReact from './config/handleReact';
import handleTests from './config/handleTests';
import { hasReact, hasTests, hasTypescript } from './utils/has';

const base = {
  ...baseConfig.base,
  ...(hasTypescript ? handleTypescript.base : {}),
  ...(hasReact ? handleReact.base : {}),
  ...(hasTests ? handleTests.base : {})
};

const plugins = [
  ...baseConfig.plugins,
  ...(hasTypescript ? handleTypescript.plugins : []),
  ...(hasReact ? handleReact.plugins : []),
  ...(hasTests ? handleTests.plugins : [])
];

const extend = [
  ...baseConfig.extend,
  ...(hasTypescript ? handleTypescript.extend : []),
  ...(hasReact ? handleReact.extend : []),
  ...(hasTests ? handleTests.extend : [])
];

const rules = {
  ...baseConfig.rules,
  ...(hasTypescript ? handleTypescript.rules : {}),
  ...(hasReact ? handleReact.rules : {}),
  ...(hasTests ? handleTests.rules : {})
};

module.exports = {
  ...base,
  plugins,
  extends: extend,
  rules
}