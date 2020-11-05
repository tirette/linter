import { command, storeArgs, readArgs } from '@tirette/cli-core';
import internal from './internal';
import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync(internal('../package.json')).toString());
const thisCommand = Object.keys(pkg.bin)[0];
const argsPath = internal('./args.json');

if (command === thisCommand) {
  storeArgs(argsPath);
}

const { positionals } = readArgs(argsPath);

export const [entry] = positionals;