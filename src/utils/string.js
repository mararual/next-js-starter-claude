/**
 * String utility functions
 * Pure functions with no side effects
 */

export const capitalize = (str) => {
	if (!str) return ''
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const trim = (str) => {
	if (!str) return ''
	return str.trim()
}

export const slugify = (str) => {
	return trim(str)
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^\w-]/g, '')
}

export const truncate = (str, length = 100, suffix = '...') => {
	if (!str || str.length <= length) return str
	return str.slice(0, length) + suffix
}
