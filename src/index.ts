#!/usr/bin/env node
import { execute } from '@tirette/cli-core';
import scripts from './scripts';

const driver = 'eslint';

execute(scripts[driver]);
