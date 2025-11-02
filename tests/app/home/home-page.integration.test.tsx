import { render, screen, within } from '@testing-library/react'

import Home from '../../../app/page'

describe('Feature: Landing Page', () => {
	it('Scenario: Landing page displays the core project overview', () => {
		render(<Home />)

		expect(screen.getByRole('heading', { name: 'Next.js Starter', level: 1 })).toBeVisible()
		expect(screen.getByText('Production-Ready Template with Trunk-Based Development')).toBeVisible()

		expect(screen.getByRole('link', { name: 'Documentation' })).toHaveAttribute('href', '/docs')

		const githubLink = screen.getByRole('link', { name: 'View on GitHub' })
		expect(githubLink).toHaveAttribute('href', 'https://github.com')
		expect(githubLink).toHaveAttribute('target', '_blank')
		expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
	})

	it('Scenario: Feature highlights are visible', () => {
		render(<Home />)

		const featuresRegion = screen.getByRole('region', { name: 'Features' })
		const featureCards = within(featuresRegion).getAllByRole('heading', { level: 3 })

		expect(featureCards.length).toBeGreaterThanOrEqual(3)
		;['BDD First', 'Comprehensive Testing', 'Modern Stack'].forEach(title => {
			expect(within(featuresRegion).getByRole('heading', { name: title, level: 3 })).toBeVisible()
		})
	})

	it('Scenario: Visitors find quick start actions and supporting stack', () => {
		render(<Home />)

		const techStackHeading = screen.getByRole('heading', { name: 'Tech Stack', level: 2 })
		const techStackSection = techStackHeading.parentElement

		if (!(techStackSection instanceof HTMLElement)) {
			throw new Error('Expected Tech Stack heading to have a parent container.')
		}

		const expectedTech = [
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
		]

		expectedTech.forEach(tech => {
			expect(within(techStackSection).getByText(tech)).toBeVisible()
		})

		const getStartedHeading = screen.getByRole('heading', { name: 'Get Started', level: 2 })
		const getStartedSection = getStartedHeading.parentElement

		if (!(getStartedSection instanceof HTMLElement)) {
			throw new Error('Expected Get Started heading to have a parent container.')
		}

		const commandElements = within(getStartedSection).getAllByText(
			(_, element) => element?.tagName === 'CODE'
		)

		expect(commandElements.map(node => node.textContent)).toEqual([
			'npm run dev',
			'npm test',
			'npm run build'
		])
	})
})
