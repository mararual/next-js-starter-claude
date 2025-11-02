interface QuickStartCardProps {
	title: string
	titleColor: 'purple' | 'blue' | 'pink'
	command: string
	description: string
}

const titleColorMap = {
	purple: 'text-purple-400',
	blue: 'text-blue-400',
	pink: 'text-pink-400'
}

export function QuickStartCard({ title, titleColor, command, description }: QuickStartCardProps) {
	return (
		<div>
			<h3 className={`text-lg font-semibold mb-3 ${titleColorMap[titleColor]}`}>{title}</h3>
			<code className="block text-sm text-slate-300 bg-slate-900 p-4 rounded-lg mb-2">
				{command}
			</code>
			<p className="text-slate-400 text-sm">{description}</p>
		</div>
	)
}
