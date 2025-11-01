import './globals.css'

export const metadata = {
	title: 'Next.js Starter Template',
	description: 'A clean Next.js starter with BDD/ATDD/TDD development flow'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
