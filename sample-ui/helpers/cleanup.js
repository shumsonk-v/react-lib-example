const chalk = require('chalk');
const { rimrafSync } = require('rimraf');
const { unlinkSync, lstatSync, lstat } = require('fs');
const { join } = require('path');
const { emojify } = require('node-emoji');
const config = require('./config.json');
const { targetComponentPath } = config;

// All items must be referenced from ./utils path
const buildAssetList = [
  '../index.es.js',
  '../index.es.js.map',
  '../index.js',
  '../index.js.map',
  '../index.d.ts',
  '../dist',
  '../core',
  `../${targetComponentPath}`,
];

const deleteSuccess = chalk.hex('#8a8a8a');

buildAssetList.forEach((itemName) => {
  const checkPath = join(__dirname, itemName);

  lstat(checkPath, (e) => {
    if (!e) {
      if (lstatSync(checkPath).isDirectory()) {
        rimrafSync(checkPath);
        console.log(deleteSuccess(emojify(`:white_check_mark: Previous build directory ${checkPath} has been removed.`)));
      } else {
        unlinkSync(checkPath);
        console.log(deleteSuccess(emojify(`:white_check_mark: Previous build file ${checkPath} has been removed.`)));
      }
    }
  });
});
