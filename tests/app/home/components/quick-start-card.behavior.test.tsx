import { render, screen } from '@testing-library/react'

import { QuickStartCard } from '../../../../app/components/QuickStartCard'

describe('Feature: Landing Page Quick Start - QuickStartCard component', () => {
	it('Scenario: Visitor discovers how to start local development', () => {
		render(
			<QuickStartCard
				title="Development"
				titleColor="purple"
				command="npm run dev"
				description="Start local development server with hot reload"
			/>
		)

		expect(screen.getByRole('heading', { name: 'Development', level: 3 })).toBeVisible()

		const command = screen.getByText('npm run dev')
		expect(command.closest('code')).toBeTruthy()

		expect(screen.getByText('Start local development server with hot reload')).toBeVisible()
	})

	it('Scenario: Quick start title reflects the requested color accent', () => {
		render(
			<QuickStartCard
				title="Testing"
				titleColor="blue"
				command="npm test"
				description="Run unit tests"
			/>
		)

		const title = screen.getByRole('heading', { name: 'Testing', level: 3 })
		expect(title.className).toEqual(expect.stringContaining('text-blue-400'))
	})
})
