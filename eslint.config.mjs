import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: [
      './**/*.ts', './**/*.tsx',
      './**/*.js', './**/*.jsx',
    ],
    rules: {
      'no-console': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'indent': ['error', 2],
      'no-multi-spaces': ['error'],
      'no-trailing-spaces': ['error'],
      '@typescript-eslint/prefer-nullish-coalescing': ['off'],
      '@typescript-eslint/no-unsafe-assignment': ['off'],
    },
    ignores: [
      '.nuxt/',
      '.vscode/',
      'drizzle/',
      'node_modules/',
      '.eslintrc.js',
    ],
  },
)
