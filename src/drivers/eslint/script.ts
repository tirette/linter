import { bin, local } from '@tirette/utilities/lib-cjs';
import { entry } from '../../utils/arguments';
import internal from '../../utils/internal';
import { hasTypescript, hasReact } from './utils/has';

const eslintExtensions = [
  '.js',
  ...(hasReact ? ['.jsx'] : []),
  ...(hasTypescript ? ['.ts'] : []),
  ...(hasReact && hasTypescript ? ['.tsx'] : [])
];

export default `${bin('eslint')} --ext ${eslintExtensions.join(',')} --config ${internal('drivers/eslint/config.js')} ${local(entry)}/`;