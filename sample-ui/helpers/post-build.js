const chalk = require('chalk');
const { readdir, rename, lstat, lstatSync, existsSync } = require('fs');
const { getFolders } = require('./file');
const { rimrafSync } = require('rimraf');
const { emojify } = require('node-emoji');
const config = require('./config.json');
const { targetComponentPath, sourceComponentPath } = config;

const processSuccess = chalk.hex('#8a8a8a');
const processFailed = chalk.hex('#ff0000');

try {
  const componentCleanupPaths = getFolders(`./${sourceComponentPath}`).reduce((acc, name) => {
    acc = getFolders(`${targetComponentPath}/${name}`).reduce((list, childItem) => {
      const checkPath = `${targetComponentPath}/${name}/${childItem}`;
      if (existsSync(checkPath) && lstatSync(checkPath).isDirectory()) {
        list.push(checkPath);
      }

      return list;
    }, acc);

    return acc;
  }, []);

  const coreCleanupPaths = getFolders('core').reduce((acc, childItem) => {
    const checkPath = `core/${childItem}`;
    if (existsSync(checkPath) && lstatSync(checkPath).isDirectory()) {
      acc.push(checkPath);
    }

    return acc;
  }, []);

  const cleanupPaths = [...componentCleanupPaths, ...coreCleanupPaths];
  if (cleanupPaths) {
    cleanupPaths.forEach((dir) => {
      rimrafSync(dir);
    });

    console.log(
      processSuccess(emojify(`:white_check_mark: Final build package files has been cleaned up. Your package is ready for publishing.`)),
    );
  }
} catch (e) {
  console.log(e);
  console.log(processFailed(emojify(`:warning: Some package files were not proper cleaned up but your package should be ready to use`)));
}
