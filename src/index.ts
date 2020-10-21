#!/usr/bin/env node
import execute from './utils/execute';
import scripts from './scripts';

const driver = 'eslint';

execute(scripts[driver]);
