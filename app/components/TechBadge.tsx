interface TechBadgeProps {
	name: string
}

export function TechBadge({ name }: TechBadgeProps) {
	return (
		<div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 text-sm font-medium hover:border-purple-400 transition-colors">
			{name}
		</div>
	)
}
