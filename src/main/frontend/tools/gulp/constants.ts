import { join } from 'path';

export const TABLE_VERSION = require('../../src/employee-dashboard/package.json').version;

export const PROJECT_ROOT = join(__dirname, '../..');
export const SOURCE_ROOT = join(PROJECT_ROOT, 'src');

export const DIST_ROOT = join(PROJECT_ROOT, 'dist');
export const TABLE_DIST_ROOT = join(DIST_ROOT, 'employee-dashboard');

export const HTML_MINIFIER_OPTIONS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  removeAttributeQuotes: false,
};

export const TABLE_LICENSE_BANNER = `/**
  * @license employee-dashboard v${TABLE_VERSION}
  * Copyright (c) 2017 Jun Kawa. https://hubukinokaze.github.io/employee-dashboard/
  * License: MIT
  */`;

export const TABLE_DIR = join(SOURCE_ROOT, 'employee-dashboard');
