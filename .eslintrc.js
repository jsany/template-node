/*
 * @Description: TODO: Description of file, its uses and information
 * @Author: zhiguo.jzg
 * @Date: 2021-10-22 20:10:23
 * @LastEditors: zhiguo.jzg
 * @LastEditTime: 2022-03-07 21:19:30
 */

module.exports = {
  extends: ['alloy', 'alloy/typescript'],
  parserOptions: {
    // Only ESLint 6.2.0 and later support ES2020.
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    node: true,
    // mocha: true,
    jest: true
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
    'no-param-reassign': 1,
    '@typescript-eslint/no-require-imports': 1,
  }
};
