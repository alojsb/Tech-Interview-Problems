import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, // Browser globals
        ...globals.jest // Jest globals (test, expect, describe, etc.)
      }
    },
    rules: {
      indent: ['error', 2], // Enforce 2-space indentation
      quotes: ['error', 'single'], // Use single quotes
      semi: ['error', 'always'], // Require semicolons
      'no-unused-vars': 'warn', // Warn about unused variables
      'no-console': 'off', // Allow console.log()
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'if', next: 'if' },
        { blankLine: 'always', prev: 'if', next: 'return' },
        { blankLine: 'always', prev: '*', next: 'return' }
      ]
    }
  },
  pluginJs.configs.recommended
];
