import { FeatureCard } from './components/FeatureCard'
import { TechBadge } from './components/TechBadge'
import { QuickStartCard } from './components/QuickStartCard'

const features = [
	{
		emoji: '📝',
		title: 'BDD First',
		description:
			'Gherkin feature files define behavior. BDD → ATDD → TDD workflow ensures quality from start.',
		borderColor: 'purple' as const
	},
	{
		emoji: '🧪',
		title: 'Comprehensive Testing',
		description:
			'Vitest for units, Playwright for E2E. Full test coverage with GitHub Actions automation.',
		borderColor: 'blue' as const
	},
	{
		emoji: '⚡',
		title: 'Modern Stack',
		description:
			'Next.js 15, React 19, Tailwind CSS 4. TypeScript strict mode, ESLint, Prettier.',
		borderColor: 'pink' as const
	},
	{
		emoji: '🌳',
		title: 'Trunk-Based Development',
		description:
			'Single main branch. Feature branches. Automatic deployment on merge. Continuous delivery.',
		borderColor: 'green' as const
	},
	{
		emoji: '🚀',
		title: 'Vercel Ready',
		description:
			'GitHub Actions CI/CD pipeline. Automatic preview deployments. Production ready.',
		borderColor: 'indigo' as const
	},
	{
		emoji: '🤖',
		title: '6 Expert Agents',
		description:
			'BDD, DDD, TypeScript, Next.js, Tailwind, and Test Quality experts guide development.',
		borderColor: 'yellow' as const
	}
] as const

const techStack = [
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
] as const

const quickStartItems = [
	{
		title: 'Development',
		titleColor: 'purple' as const,
		command: 'npm run dev',
		description: 'Start local development server with hot reload'
	},
	{
		title: 'Testing',
		titleColor: 'blue' as const,
		command: 'npm test',
		description: 'Run unit tests, E2E tests, and coverage reports'
	},
	{
		title: 'Build',
		titleColor: 'pink' as const,
		command: 'npm run build',
		description: 'Build optimized production-ready application'
	}
] as const

export default function Home() {
	return (
		<main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<div className="container flex flex-col items-center justify-center min-h-screen px-4">
				<div className="text-center max-w-4xl">
					{/* Header */}
					<header className="mb-12">
						<h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
							Next.js Starter
						</h1>
						<p className="text-2xl text-purple-200 font-light mb-4">
							Production-Ready Template with Trunk-Based Development
						</p>
						<div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mb-8" />
					</header>

					{/* Description */}
					<section className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
						<p>
							A modern Next.js 15 starter with React 19, Tailwind CSS 4, and comprehensive
							testing setup. Includes BDD/ATDD/TDD workflow, GitHub Actions CI/CD, and
							automatic Vercel deployment with trunk-based development.
						</p>
					</section>

					{/* CTA Buttons */}
					<nav className="flex flex-col sm:flex-row gap-4 justify-center mb-16" aria-label="Main navigation">
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
					</nav>

					{/* Features Grid */}
					<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16" aria-label="Features">
						{features.map((feature) => (
							<FeatureCard
								key={feature.title}
								emoji={feature.emoji}
								title={feature.title}
								description={feature.description}
								borderColor={feature.borderColor}
							/>
						))}
					</section>

					{/* Tech Stack */}
					<section className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-8">Tech Stack</h2>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
							{techStack.map((tech) => (
								<TechBadge key={tech} name={tech} />
							))}
						</div>
					</section>

					{/* Quick Links */}
					<section className="border-t border-slate-700 pt-12">
						<h2 className="text-2xl font-bold text-white mb-8">Get Started</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{quickStartItems.map((item) => (
								<QuickStartCard
									key={item.title}
									title={item.title}
									titleColor={item.titleColor}
									command={item.command}
									description={item.description}
								/>
							))}
						</div>
					</section>

					{/* Footer */}
					<footer className="border-t border-slate-700 mt-12 pt-8 text-slate-400 text-sm">
						<p>
							Built with ❤️ for modern development workflows. See{' '}
							<a
								href="/docs"
								className="text-purple-400 hover:text-purple-300 transition-colors"
							>
								documentation
							</a>{' '}
							for guides and examples.
						</p>
					</footer>
				</div>
			</div>
		</main>
	)
}
