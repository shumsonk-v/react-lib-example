const generateRollupConfig = require('./helpers/generate-rollup-config');
const { getFolders } = require('./helpers/file');
const { targetComponentPath, sourceComponentPath } = require('./helpers/config.json');

const core = generateRollupConfig({
  inputPath: 'src/core', // Get entry point from path '/src/core'
  inputName: 'index.ts', // Get entry point from file name 'index.ts' in path '/src/core' (/src/core/index.ts)
  outputPath: 'core', // Output directory, same level as project root
  outputName: 'index', // Output filename, just make it 'index' due to sub-package.json file generator using name 'index.js' and 'index.es.js' for your final package
  subPackageName: 'core', // Set this to be the same as 'outputPath' to allow creating sub-package.json file.
  external: ['react-ui/components/Modal', 'react-ui/components/Button'],
});

// If there is another stuff you want to ship, follow below steps
// 1. Make sure you have the valid configuration (like core above).
// 2. Make sure you added to the export default [] below with rest spread (...) since the generator returns as array.
// 3. Make sure you add your 'outputPath' in .gitignore. You don't wanna get it into the repo, right?

// Entry point path for multiple components, all components under this path must be flatterned or must be an immediate sub-folder
const componentPath = `src/${sourceComponentPath}`;

// Run getFolders to get folder list and generate config for each component inside.
const componentsConfigList = getFolders(`./${componentPath}`)
  .map((componentName) => {
    const config = generateRollupConfig({
      inputPath: `${componentPath}/${componentName}`,
      inputName: 'index.ts',
      outputPath: `${targetComponentPath}/${componentName}`,
      outputName: 'index',
      srcPath: sourceComponentPath,
      subPackageName: `components/${componentName}`,
    });

    return config;
  })
  .reduce((acc, cur) => [...acc, ...cur], []);

// If you have another group of component sub-folders inside one main folder you want to ship,
// follow the settings of the components above.

export default [...core, ...componentsConfigList];
