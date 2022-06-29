module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    "no-unused-vars": "error",
    "no-var": "error",
    "no-const-assign": "error", // 禁止修改const定义的变量
    "space-infix-ops": "error", // 强制操作符周围有空格
    "quotes": [2, "double", "avoid-escape"],
    "semi": [2, "always"],  //语句强制分号结尾
    "no-trailing-spaces": "error",  // 禁止行尾空格
    "no-multiple-empty-lines": [2, { "max": 1 }],   // 最大空行1行
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-console": ["error", { "allow": ["log", "warn", "error", "info"] }],
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-key": "error",
    "react-hooks/exhaustive-deps": "off",
    "@next/next/no-img-element": "off"
  },
  "globals": {
    "JSX": true,
    "TSX": true,
    "React": true
  }
}
