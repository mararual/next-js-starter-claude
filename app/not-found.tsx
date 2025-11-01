import Link from 'next/link'

export default function NotFound() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
			<div className="text-center max-w-2xl">
				<div className="mb-8">
					<h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
						404
					</h1>
					<h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
					<p className="text-lg text-slate-300 mb-8">
						The page you&apos;re looking for doesn&apos;t exist or has been moved.
					</p>
				</div>

				<Link
					href="/"
					className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
				>
					Return Home
				</Link>
			</div>
		</main>
	)
}
