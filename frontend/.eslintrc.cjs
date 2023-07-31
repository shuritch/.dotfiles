module.exports = {
  root: true,
  ignorePatterns: ['node_modules', '*.cjs', 'public', 'src/**/*.{sass, scss}', '*.html'],
  parserOptions: { sourceType: 'module', ecmaVersion: 2023, extraFileExtensions: ['.svelte'] },
  extends: ['eslint:recommended', 'plugin:svelte/recommended', 'prettier'],
  env: { browser: true, es2017: true, node: true },
};
