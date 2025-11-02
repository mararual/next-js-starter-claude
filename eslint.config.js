import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-config-prettier'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
	resolvePluginsRelativeTo: __dirname
})

export default [
	...compat.extends('next', 'next/core-web-vitals', 'prettier'),
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 2024,
				sourceType: 'module'
			}
		},
		rules: {
			'no-console': 'off',
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_'
				}
			],
			'prefer-const': 'error'
		}
	},
	{
		files: ['tests/**/*.{test,spec}.{js,jsx,ts,tsx}'],
		rules: {
			'no-unused-vars': 'off'
		}
	},
	{
		ignores: [
			'.next/',
			'coverage/',
			'out/',
			'dist/',
			'build/',
			'package/',
			'node_modules/',
			'.env',
			'.env.*',
			'.vscode/',
			'.idea/',
			'.hive-mind/',
			'.claude/',
			'.claude-flow/',
			'*.log',
			'*.db',
			'*.db-shm',
			'*.db-wal',
			'playwright.config.js'
		]
	},
	{
		files: ['**/*.config.js', 'commitlint.config.js', 'postcss.config.js', 'tailwind.config.js'],
		rules: {
			'import/no-anonymous-default-export': 'off'
		}
	},
	prettier
]
