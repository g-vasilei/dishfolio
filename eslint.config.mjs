import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Apply Next.js recommended rules
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Custom rules
  {
    rules: {
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
      'no-console': ['error', { allow: [] }],
    },
  },
]

export default eslintConfig
