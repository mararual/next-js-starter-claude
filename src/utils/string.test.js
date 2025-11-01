import { describe, it, expect } from 'vitest'
import { capitalize, trim, slugify, truncate } from './string'

describe('String utilities', () => {
	describe('capitalize', () => {
		it('capitalizes first letter and lowercases rest', () => {
			expect(capitalize('hello')).toBe('Hello')
			expect(capitalize('HELLO')).toBe('Hello')
			expect(capitalize('hELLO')).toBe('Hello')
		})

		it('handles empty strings', () => {
			expect(capitalize('')).toBe('')
			expect(capitalize(null)).toBe('')
			expect(capitalize(undefined)).toBe('')
		})

		it('handles single character', () => {
			expect(capitalize('a')).toBe('A')
			expect(capitalize('A')).toBe('A')
		})
	})

	describe('trim', () => {
		it('removes whitespace from both ends', () => {
			expect(trim('  hello  ')).toBe('hello')
			expect(trim('\thello\t')).toBe('hello')
			expect(trim('\nhello\n')).toBe('hello')
		})

		it('handles empty strings', () => {
			expect(trim('')).toBe('')
			expect(trim(null)).toBe('')
			expect(trim(undefined)).toBe('')
		})
	})

	describe('slugify', () => {
		it('converts string to slug format', () => {
			expect(slugify('Hello World')).toBe('hello-world')
			expect(slugify('Foo Bar Baz')).toBe('foo-bar-baz')
		})

		it('removes special characters', () => {
			expect(slugify('Hello@World!')).toBe('helloworld')
			expect(slugify('Test#123')).toBe('test123')
		})

		it('handles whitespace', () => {
			expect(slugify('  hello   world  ')).toBe('hello-world')
		})
	})

	describe('truncate', () => {
		it('truncates string to specified length', () => {
			expect(truncate('Hello World', 5)).toBe('Hello...')
			expect(truncate('Hello World', 8)).toBe('Hello Wo...')
		})

		it('does not truncate if string is shorter than length', () => {
			expect(truncate('Hi', 5)).toBe('Hi')
			expect(truncate('Hello', 5)).toBe('Hello')
		})

		it('uses custom suffix', () => {
			expect(truncate('Hello World', 5, '—')).toBe('Hello—')
			expect(truncate('Hello World', 5, ' [more]')).toBe('Hello [more]')
		})

		it('returns empty string gracefully', () => {
			expect(truncate(null)).toBe(null)
			expect(truncate(undefined)).toBe(undefined)
			expect(truncate('')).toBe('')
		})
	})
})
