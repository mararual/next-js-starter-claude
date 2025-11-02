import { render, screen } from '@testing-library/react'

import { FeatureCard } from '../../../../app/components/FeatureCard'

describe('Feature: Landing Page Highlights - Feature Card component', () => {
	it('Scenario: Visitor reads the comprehensive testing highlight', () => {
		render(
			<FeatureCard
				emoji="🧪"
				title="Comprehensive Testing"
				description="Vitest for units, Playwright for E2E. Full test coverage with GitHub Actions automation."
				borderColor="blue"
			/>
		)

		expect(screen.getByText('🧪')).toBeVisible()
		expect(screen.getByRole('heading', { name: 'Comprehensive Testing', level: 3 })).toBeVisible()
		expect(
			screen.getByText(
				'Vitest for units, Playwright for E2E. Full test coverage with GitHub Actions automation.'
			)
		).toBeVisible()
	})

	it('Scenario: Design system accentuates the requested pink highlight', () => {
		render(
			<FeatureCard
				emoji="⚡"
				title="Modern Stack"
				description="Next.js 15, React 19, Tailwind CSS 4."
				borderColor="pink"
			/>
		)

		const card = screen.getByRole('heading', { name: 'Modern Stack', level: 3 }).closest('div')

		if (!(card instanceof HTMLElement)) {
			throw new Error('Expected the heading to be wrapped by the feature card container.')
		}

		expect(card.className).toEqual(expect.stringContaining('border-pink-500/30'))
		expect(card.className).toEqual(expect.stringContaining('hover:border-pink-500/60'))
		expect(card.className).toEqual(expect.stringContaining('hover:shadow-pink-500/20'))
	})
})
