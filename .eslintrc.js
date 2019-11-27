module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ['prettier'], // eslint-plugin-vue eslint-plugin-prettier
  extends: [
    'standard',
    'plugin:vue/base',
    'prettier' // eslint-config-prettier
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'no-useless-escape': 0,
    'no-empty': 0,
  },
};
