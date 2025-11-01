export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<div className="container flex flex-col items-center justify-center min-h-screen px-4">
				<div className="text-center max-w-4xl">
					{/* Header */}
					<div className="mb-12">
						<h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
							Next.js Starter
						</h1>
						<p className="text-2xl text-purple-200 font-light mb-4">
							Production-Ready Template with Trunk-Based Development
						</p>
						<div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mb-8" />
					</div>

					{/* Description */}
					<p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
						A modern Next.js 15 starter with React 19, Tailwind CSS 4, and comprehensive
						testing setup. Includes BDD/ATDD/TDD workflow, GitHub Actions CI/CD, and
						automatic Vercel deployment with trunk-based development.
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
						<a
							href="/docs"
							className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
						>
							Documentation
						</a>
						<a
							href="https://github.com"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-slate-800 text-white border-2 border-purple-400 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
						>
							View on GitHub
						</a>
					</div>

					{/* Features Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
						{/* BDD First */}
						<div className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all hover:shadow-xl hover:shadow-purple-500/20">
							<div className="text-4xl mb-4">📝</div>
							<h3 className="text-xl font-bold text-white mb-3">
								BDD First
							</h3>
							<p className="text-slate-300">
								Gherkin feature files define behavior. BDD → ATDD → TDD workflow ensures
								quality from start.
							</p>
						</div>

						{/* Test Driven */}
						<div className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all hover:shadow-xl hover:shadow-blue-500/20">
							<div className="text-4xl mb-4">🧪</div>
							<h3 className="text-xl font-bold text-white mb-3">
								Comprehensive Testing
							</h3>
							<p className="text-slate-300">
								Vitest for units, Playwright for E2E. Full test coverage with GitHub
								Actions automation.
							</p>
						</div>

						{/* Modern Stack */}
						<div className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all hover:shadow-xl hover:shadow-pink-500/20">
							<div className="text-4xl mb-4">⚡</div>
							<h3 className="text-xl font-bold text-white mb-3">
								Modern Stack
							</h3>
							<p className="text-slate-300">
								Next.js 15, React 19, Tailwind CSS 4. TypeScript strict mode, ESLint,
								Prettier.
							</p>
						</div>

						{/* Trunk-Based */}
						<div className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-green-500/30 hover:border-green-500/60 transition-all hover:shadow-xl hover:shadow-green-500/20">
							<div className="text-4xl mb-4">🌳</div>
							<h3 className="text-xl font-bold text-white mb-3">
								Trunk-Based Development
							</h3>
							<p className="text-slate-300">
								Single main branch. Feature branches. Automatic deployment on merge.
								Continuous delivery.
							</p>
						</div>

						{/* Vercel Ready */}
						<div className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-indigo-500/30 hover:border-indigo-500/60 transition-all hover:shadow-xl hover:shadow-indigo-500/20">
							<div className="text-4xl mb-4">🚀</div>
							<h3 className="text-xl font-bold text-white mb-3">
								Vercel Ready
							</h3>
							<p className="text-slate-300">
								GitHub Actions CI/CD pipeline. Automatic preview deployments. Production
								ready.
							</p>
						</div>

						{/* Expert Agents */}
						<div className="p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border border-yellow-500/30 hover:border-yellow-500/60 transition-all hover:shadow-xl hover:shadow-yellow-500/20">
							<div className="text-4xl mb-4">🤖</div>
							<h3 className="text-xl font-bold text-white mb-3">
								6 Expert Agents
							</h3>
							<p className="text-slate-300">
								BDD, DDD, TypeScript, Next.js, Tailwind, and Test Quality experts guide
								development.
							</p>
						</div>
					</div>

					{/* Tech Stack */}
					<div className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
							{[
								'Next.js 15',
								'React 19',
								'TypeScript',
								'Tailwind CSS 4',
								'Vitest',
								'Playwright',
								'ESLint',
								'Prettier',
								'Husky',
								'GitHub Actions',
								'Vercel',
								'Conventional Commits'
							].map((tech) => (
								<div
									key={tech}
									className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-purple-400 transition-colors"
								>
									{tech}
								</div>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div className="border-t border-slate-700 pt-12">
						<h2 className="text-2xl font-bold text-white mb-8">Get Started</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div>
								<h3 className="text-lg font-semibold text-purple-400 mb-3">
									Development
								</h3>
								<code className="block text-sm text-slate-300 bg-slate-900 p-4 rounded-lg mb-2">
									npm run dev
								</code>
								<p className="text-slate-400 text-sm">
									Start local development server with hot reload
								</p>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-blue-400 mb-3">
									Testing
								</h3>
								<code className="block text-sm text-slate-300 bg-slate-900 p-4 rounded-lg mb-2">
									npm test
								</code>
								<p className="text-slate-400 text-sm">
									Run unit tests, E2E tests, and coverage reports
								</p>
							</div>

							<div>
								<h3 className="text-lg font-semibold text-pink-400 mb-3">
									Build
								</h3>
								<code className="block text-sm text-slate-300 bg-slate-900 p-4 rounded-lg mb-2">
									npm run build
								</code>
								<p className="text-slate-400 text-sm">
									Build optimized production-ready application
								</p>
							</div>
						</div>
					</div>

					{/* Footer */}
					<div className="border-t border-slate-700 mt-12 pt-8 text-slate-400 text-sm">
						<p>
							Built with ❤️ for modern development workflows. See{' '}
							<a
								href="/docs"
								className="text-purple-400 hover:text-purple-300 transition-colors"
							>
								documentation
							</a>
							{' '}for guides and examples.
						</p>
					</div>
				</div>
			</div>
		</main>
	)
}
