/*
 * @Description: TODO: Description of file, its uses and information
 * @Author: zhiguo.jzg
 * @Date: 2021-10-22 20:08:16
 * @LastEditors: zhiguo.jzg
 * @LastEditTime: 2021-10-25 17:45:09
 */

module.exports = {
  // 一行最多 100 字符
  printWidth: 120,
  // 使用 2 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不需要逗号
  trailingComma: 'none',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // HTML, Angular, Vue, and JSX 标签的反尖括号需要换行
  bracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.ts'],
      options: {
        parser: 'typescript'
      }
    },
    {
      files: ['*.md'],
      options: {
        parser: 'markdown'
      }
    },
    {
      files: ['*.json'],
      options: {
        parser: 'json'
      }
    },
    {
      files: ['*.js'],
      options: {
        parser: 'babel'
      }
    }
  ]
};
