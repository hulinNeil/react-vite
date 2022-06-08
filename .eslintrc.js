module.exports = {
  extends: ['react-app', 'react-app/jest'],
  rules: {
    'block-spacing': 2,
    quotes: [1, 'single'],
    // Forces 2 Spaces to be indented
    indent: [2, 2, { SwitchCase: 1 }],
    camelcase: 0,
    '@typescript-eslint/camelcase': ['off', { properties: 'always' }],
    'no-var': 2,
    'no-unused-vars': 0,
    'no-debugger': 0,
    // A semicolon is required at the end of a statement
    semi: 2,
    // 在创建对象字面量时不允许键重复
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    // Function arguments cannot be repeated(函数参数不能重复)
    'no-dupe-args': 2,
    // The contents of a block statement cannot be empty(块语句中的内容不能为空)
    'no-empty': 2,
    'no-func-assign': 2,
    // Duplicate declarations of variables are prohibited(禁止重复声明变量)
    'no-redeclare': 2,
    'no-spaced-func': 0,
    curly: [2, 'all'],
    // Controls the Spaces before and after the comma(控制逗号前后的空格)
    'comma-spacing': [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // Do not mix tabs and Spaces(禁止混用tab和空格)
    'no-mixed-spaces-and-tabs': 2,
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'linebreak-style': 0,
    'lines-around-comment': [
      1,
      {
        beforeBlockComment: true,
      },
    ],
    // Performs consistent spacing within the braces of the object text(对象文字的大括号内执行一致的间距)
    'object-curly-spacing': [1, 'always'],
    // Use === instead of ==
    eqeqeq: [2, 'allow-null'],
    // Forces the maximum length of a row(强制一行的最大长度)
    'max-len': [0, 250],
    // Duplicate module imports are not allowed(禁止重复模块导入)
    'no-duplicate-imports': 2,
    // 最多只有个空白行
    'no-multiple-empty-lines': [1, { max: 1 }],
    //////////////
    //  React   //
    //////////////
    // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-key': 2,
    // Forces the consistent use of double quotes in JSX quotes(强制在JSX属性（jsx-quotes）中一致使用双引号)
    'jsx-quotes': [1, 'prefer-double'],
    'react-hooks/exhaustive-deps': 0,
  },
};
