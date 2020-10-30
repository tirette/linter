import { entry } from '../../utils/arguments';
import { local, bin, internal } from '../../utils/files';
import { hasTypescript, hasReact } from './utils/has';

const eslintExtensions = [
  '.js',
  ...(hasReact ? ['.jsx'] : []),
  ...(hasTypescript ? ['.ts'] : []),
  ...(hasReact && hasTypescript ? ['.tsx'] : [])
];

export default `${bin('eslint')} --ext ${eslintExtensions.join(',')} --config ${internal('drivers/eslint/config.js')} ${local(entry)}/`;