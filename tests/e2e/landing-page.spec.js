import { test, expect } from '@playwright/test'

test.describe('Feature: Landing Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test('Scenario: Landing page displays the core project overview', async ({ page }) => {
		await expect(page.getByRole('heading', { level: 1, name: 'Next.js Starter' })).toBeVisible()
		await expect(
			page.getByText('Production-Ready Template with Trunk-Based Development', { exact: true })
		).toBeVisible()

		const documentationLink = page.getByRole('link', { name: 'Documentation', exact: true })
		await expect(documentationLink).toBeVisible()
		await expect(documentationLink).toHaveAttribute('href', '/docs')

		const githubLink = page.getByRole('link', { name: 'View on GitHub', exact: true })
		await expect(githubLink).toBeVisible()
		await expect(githubLink).toHaveAttribute('href', 'https://github.com')
		await expect(githubLink).toHaveAttribute('target', '_blank')
		await expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
	})

	test('Scenario: Feature highlights are visible', async ({ page }) => {
		const featuresRegion = page.getByRole('region', { name: 'Features' })
		const featureHeadings = featuresRegion.getByRole('heading', { level: 3 })

		await expect(featureHeadings).toHaveCount(6)

		for (const title of ['BDD First', 'Comprehensive Testing', 'Modern Stack']) {
			await expect(featuresRegion.getByRole('heading', { level: 3, name: title })).toBeVisible()
		}
	})

	test('Scenario: Quick start guidance is available', async ({ page }) => {
		const techStackHeading = page.getByRole('heading', { level: 2, name: 'Tech Stack' })
		await expect(techStackHeading).toBeVisible()

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

		for (const tech of expectedTech) {
			await expect(page.getByText(tech, { exact: true })).toBeVisible()
		}

		const getStartedSection = page
			.getByRole('heading', { level: 2, name: 'Get Started' })
			.locator('..')
		const commandCodes = getStartedSection.locator('code')

		await expect(commandCodes).toHaveCount(3)
		await expect(commandCodes.nth(0)).toHaveText('npm run dev')
		await expect(commandCodes.nth(1)).toHaveText('npm test')
		await expect(commandCodes.nth(2)).toHaveText('npm run build')
	})

	test('Scenario: Page metadata reflects template name', async ({ page }) => {
		await expect(page).toHaveTitle('Next.js Starter Template')
	})

	test('Scenario: Layout adjusts on mobile viewports', async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 })

		await expect(page.getByRole('heading', { level: 1, name: 'Next.js Starter' })).toBeVisible()
		await expect(page.getByRole('link', { name: 'Documentation', exact: true })).toBeVisible()
		await expect(page.getByRole('link', { name: 'View on GitHub', exact: true })).toBeVisible()
	})

	test('Scenario: Feature highlights adapt on tablet viewports', async ({ page }) => {
		await page.setViewportSize({ width: 768, height: 1024 })

		const featuresRegion = page.getByRole('region', { name: 'Features' })
		const featureHeadings = featuresRegion.getByRole('heading', { level: 3 })
		await expect(featureHeadings).toHaveCount(6)
	})
})
