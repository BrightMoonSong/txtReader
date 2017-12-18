// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 设置没有分号报错
    // 'semi': ['error', 'always'],
    // 改变格式化插件格式化后的OK,忽略indent配置
    'indent': 0,
    // 忽略检测function的name前的空格检测
    'space-before-function-paren': 0,
    'func-call-spacing': 0,
    'no-eval': 0
  }
}
