import { describe, it, expect } from 'vitest'
import { capitalize, trim, slugify, truncate } from './string'

describe('String Utilities', () => {
	describe('capitalize', () => {
		it('capitalizes the first letter of a string', () => {
			expect(capitalize('hello')).toBe('Hello')
		})

		it('converts the rest of the string to lowercase', () => {
			expect(capitalize('HELLO')).toBe('Hello')
		})

		it('handles single character strings', () => {
			expect(capitalize('a')).toBe('A')
		})

		it('returns empty string for null or undefined', () => {
			expect(capitalize(null)).toBe('')
			expect(capitalize(undefined)).toBe('')
		})

		it('returns empty string for empty input', () => {
			expect(capitalize('')).toBe('')
		})
	})

	describe('trim', () => {
		it('removes leading and trailing whitespace', () => {
			expect(trim('  hello  ')).toBe('hello')
		})

		it('removes tabs and newlines', () => {
			expect(trim('\thello\n')).toBe('hello')
		})

		it('returns empty string for null or undefined', () => {
			expect(trim(null)).toBe('')
			expect(trim(undefined)).toBe('')
		})

		it('handles strings with no whitespace', () => {
			expect(trim('hello')).toBe('hello')
		})
	})

	describe('slugify', () => {
		it('converts string to URL-friendly format', () => {
			expect(slugify('Hello World')).toBe('hello-world')
		})

		it('removes special characters', () => {
			expect(slugify('Hello & World!')).toBe('hello--world')
		})

		it('handles multiple spaces', () => {
			expect(slugify('Hello   World')).toBe('hello-world')
		})

		it('trims whitespace before slugifying', () => {
			expect(slugify('  Hello World  ')).toBe('hello-world')
		})

		it('preserves hyphens and underscores', () => {
			expect(slugify('hello-world_test')).toBe('hello-world_test')
		})
	})

	describe('truncate', () => {
		it('truncates string longer than specified length', () => {
			expect(truncate('Hello World', 5)).toBe('Hello...')
		})

		it('uses default suffix of "..." when not specified', () => {
			expect(truncate('This is a long string', 10)).toBe('This is a ...')
		})

		it('uses custom suffix when provided', () => {
			expect(truncate('Hello World', 5, '→')).toBe('Hello→')
		})

		it('returns original string if shorter than length', () => {
			expect(truncate('Hi', 10)).toBe('Hi')
		})

		it('returns original string if equal to length', () => {
			expect(truncate('Hello', 5)).toBe('Hello')
		})

		it('uses default length of 100 when not specified', () => {
			const longString = 'a'.repeat(150)
			const result = truncate(longString)
			expect(result.length).toBe(103) // 100 + 3 for '...'
		})
	})
})
