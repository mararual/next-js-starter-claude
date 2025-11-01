interface FeatureCardProps {
	emoji: string
	title: string
	description: string
	borderColor: 'purple' | 'blue' | 'pink' | 'green' | 'indigo' | 'yellow'
}

const borderColorMap = {
	purple: 'border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20',
	blue: 'border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20',
	pink: 'border-pink-500/30 hover:border-pink-500/60 hover:shadow-pink-500/20',
	green: 'border-green-500/30 hover:border-green-500/60 hover:shadow-green-500/20',
	indigo: 'border-indigo-500/30 hover:border-indigo-500/60 hover:shadow-indigo-500/20',
	yellow: 'border-yellow-500/30 hover:border-yellow-500/60 hover:shadow-yellow-500/20'
}

export function FeatureCard({ emoji, title, description, borderColor }: FeatureCardProps) {
	return (
		<div
			className={`p-8 bg-gradient-to-br from-slate-800 to-slate-800/50 rounded-xl border transition-all hover:shadow-xl ${borderColorMap[borderColor]}`}
		>
			<div className="text-4xl mb-4" aria-hidden="true">
				{emoji}
			</div>
			<h3 className="text-xl font-bold text-white mb-3">{title}</h3>
			<p className="text-slate-300">{description}</p>
		</div>
	)
}
