import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
	js.configs.recommended,
	prettier,
	{
		languageOptions: {
			ecmaVersion: 2024,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				impliedStrict: true
			},
			globals: {
				// Browser globals
				window: 'readonly',
				document: 'readonly',
				navigator: 'readonly',
				console: 'readonly',
				fetch: 'readonly',
				URL: 'readonly',
				URLSearchParams: 'readonly',
				IntersectionObserver: 'readonly',
				setTimeout: 'readonly',
				clearTimeout: 'readonly',
				setInterval: 'readonly',
				clearInterval: 'readonly',
				React: 'readonly',
				JSX: 'readonly',
				// Node globals
				process: 'readonly',
				global: 'readonly',
				Buffer: 'readonly',
				__dirname: 'readonly',
				__filename: 'readonly'
			}
		},
		rules: {
			'no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_'
				}
			],
			'no-console': 'off',
			'prefer-const': 'error',
			'no-var': 'error'
		}
	},
	{
		files: ['**/*.test.js', '**/*.spec.js', 'src/test/**'],
		rules: {
			'no-unused-vars': 'off'
		}
	},
	{
		ignores: [
			// Build outputs
			'.next/',
			'out/',
			'dist/',
			'build/',
			'package/',
			// Dependencies
			'node_modules/',
			// Environment
			'.env',
			'.env.*',
			// IDE
			'.vscode/',
			'.idea/',
			'.hive-mind/',
			// OS
			'.DS_Store',
			// Logs
			'*.log',
			'npm-debug.log*',
			'yarn-debug.log*',
			'yarn-error.log*',
			// Database
			'*.db',
			'*.db-shm',
			'*.db-wal',
			// Config & test files
			'*.config.js',
			'tests/',
			'playwright.config.js'
		]
	}
]
