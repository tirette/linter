import { entry } from '../../../utils/arguments';
import { local } from '../../../utils/files';
import getExtensions from './getExtensions';
import getFiles from './getFiles';

const files = getFiles(local(entry));
const extensions = getExtensions(files);

let hasTypescript = false;
let hasReact = false;
let hasTests = false;

for (const extension of extensions) {
  if (/(ts|tsx)/.test(extension)) {
    hasTypescript = true;
  }

  if (/(jsx|tsx)/.test(extension)) {
    hasReact = true;
  }

  if (/test/.test(extension)) {
    hasTests = true;
  }
}

export {
  hasTypescript,
  hasReact,
  hasTests
}