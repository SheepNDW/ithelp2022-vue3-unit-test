module.exports = {
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: ['eslint:recommended', 'plugin:vue/vue3-essential', 'plugin:prettier/recommended'],
  rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }] },
}
