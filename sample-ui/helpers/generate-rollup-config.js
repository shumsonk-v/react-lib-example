const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve');
const replace = require('@rollup/plugin-replace');
const terser = require('@rollup/plugin-terser');
const typescript = require('@rollup/plugin-typescript');
const url = require('@rollup/plugin-url');
const svgr = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');
const dts = require('rollup-plugin-dts');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const generatePackageJson = require('rollup-plugin-generate-package-json-v2');
const packageJson = require('../package.json');

const defaultPlugins = [
  peerDepsExternal({
    packageJsonPath: './package.json',
  }),
  resolve(),
  replace({
    __IS_DEV__: process.env.NODE_ENV === 'development',
    preventAssignment: true,
  }),
  commonjs(),
  typescript({
    tsconfig: './tsconfig.bundle.json',
    sourceMap: false,
  }),
  postcss(),
  url(),
  svgr(),
  terser(),
];

function generateRollupConfig(opt) {
  const { inputPath, inputName, outputPath, outputName, plugins = [], subPackageName = '', outputConfig = null, external = [] } = opt;
  const defaultOutputConfig = {
    sourcemap: false,
    exports: 'named',
  };

  const externalDependencies = ['react', 'react-dom', 'theme-ui', '@emotion/react', '@fontsource', ...external];

  const defaultOptions = {
    plugins: [...defaultPlugins, ...plugins],
    external: externalDependencies,
  };

  const cjsPlugins = [...defaultOptions.plugins];
  if (subPackageName) {
    cjsPlugins.push(
      generatePackageJson({
        baseContents: {
          name: `${packageJson.name}/${subPackageName}`,
          private: true,
          main: './index.js', // --> points to cjs format entry point of whole library
          module: './index.es.js', // --> points to esm format entry point of individual component
          types: './typings.d.ts', // --> points to types definition file of individual component
          files: ['index.js', 'index.es.js', 'index.d.ts'],
          dependencies: {
            '@emotion/react': '^11.11.4',
            react: '^18.2.0',
            'react-dom': '^18.2.0',
            'theme-ui': '^0.16.2',
          },
        },
      }),
    );
  }

  return [
    {
      ...defaultOptions,
      input: `${inputPath}/${inputName}`,
      output: {
        ...defaultOutputConfig,
        ...outputConfig,
        file: `${outputPath}/${outputName}.es.js`,
        format: 'esm',
      },
    },
    {
      ...defaultOptions,
      plugins: cjsPlugins,
      input: `${inputPath}/${inputName}`,
      output: {
        ...defaultOutputConfig,
        ...outputConfig,
        file: `${outputPath}/${outputName}.js`,
        format: 'cjs',
      },
    },
    {
      input: `${inputPath}/index.ts`,
      output: [{ file: `${outputPath}/typings.d.ts`, format: 'es' }],
      plugins: [dts.default()],
      external: externalDependencies,
    },
  ];
}

module.exports = generateRollupConfig;
