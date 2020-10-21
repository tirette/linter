import Configstore from 'configstore';
import parseArgv from 'minimist';
import pkg from '../package.json';

/*
* Parses the arguments passed down to the CLI.
*/

const conf = new Configstore(pkg.name);
const isLinter = process.argv[1].indexOf(Object.keys(pkg.bin)[0]) >= 0;

if (isLinter) {
  const argv = parseArgv(process.argv.slice(2));
  const { _: [entry] } = argv;

  conf.clear();
  conf.set({ entry });
}

export const entry: string = conf.get('entry');