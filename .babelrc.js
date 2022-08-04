/*
 * @Description: TODO: Description of file, its uses and information
 * @Author: zhiguo.jzg
 * @Date: 2021-10-22 20:11:29
 * @LastEditors: zhiguo.jzg
 * @LastEditTime: 2022-08-04 20:47:13
 */
const pkg = require('./package.json');
module.exports = {
  comments: false,
  minified: true,
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: false,
        targets: pkg.engines,
        modules: 'cjs'
      }
    ],
    '@babel/typescript'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true
      }
    ],
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@@': './',
          '@': './src'
        }
      }
    ]
  ]
};
