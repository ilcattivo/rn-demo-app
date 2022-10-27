module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-explicit-any': ['error'],
        'no-restricted-imports': [
          'error',
          {
            paths: [
              {
                importNames: ['Image'],
                name: 'react-native',
                message: 'Please use components/Image instead',
              },
            ],
          },
        ],
      },
    },
  ],
};
