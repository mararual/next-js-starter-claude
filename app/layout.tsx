import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: '#0f172a' }
	]
}

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'),
	title: {
		default: 'Next.js Starter Template',
		template: '%s | Next.js Starter'
	},
	description:
		'A clean Next.js starter with BDD/ATDD/TDD development flow, TypeScript strict mode, and comprehensive testing',
	keywords: ['Next.js', 'React', 'TypeScript', 'TDD', 'BDD', 'ATDD', 'Tailwind CSS', 'Testing'],
	authors: [{ name: 'Your Team' }],
	creator: 'Your Team',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://your-domain.com',
		title: 'Next.js Starter Template',
		description: 'A clean Next.js starter with BDD/ATDD/TDD development flow',
		siteName: 'Next.js Starter',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Next.js Starter Template'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Next.js Starter Template',
		description: 'A clean Next.js starter with BDD/ATDD/TDD development flow',
		images: ['/og-image.png']
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	}
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased">{children}</body>
		</html>
	)
}
