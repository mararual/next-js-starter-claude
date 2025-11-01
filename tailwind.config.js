/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#3B82F6',
				secondary: '#8B5CF6',
				accent: '#EC4899'
			},
			spacing: {
				'18': '4.5rem'
			}
		}
	}
}
