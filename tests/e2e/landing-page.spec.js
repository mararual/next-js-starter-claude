import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/')
	})

	test('displays main heading', async ({ page }) => {
		const heading = page.locator('h1')
		await expect(heading).toContainText('Next.js Starter')
	})

	test('displays description text', async ({ page }) => {
		const description = page.locator('p').first()
		await expect(description).toContainText('Production-Ready Template with Trunk-Based Development')
	})

	test('displays documentation link', async ({ page }) => {
		const docLink = page.getByRole('link', { name: 'Documentation', exact: true }).first()
		await expect(docLink).toBeVisible()
		await expect(docLink).toHaveAttribute('href', '/docs')
	})

	test('displays github link', async ({ page }) => {
		const githubLink = page.getByRole('link', { name: 'View on GitHub' })
		await expect(githubLink).toBeVisible()
		await expect(githubLink).toHaveAttribute('href', 'https://github.com')
		await expect(githubLink).toHaveAttribute('target', '_blank')
	})

	test('displays feature grid with 6 feature cards', async ({ page }) => {
		const featureCards = page.locator(
			'.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 > div'
		)
		// Should have 6 feature cards: BDD First, Test Driven, Modern Stack, Trunk-Based, Vercel Ready, Expert Agents
		await expect(featureCards).toHaveCount(6)
	})

	test('displays tech stack section', async ({ page }) => {
		const techStackHeading = page.getByRole('heading', { name: 'Tech Stack' })
		await expect(techStackHeading).toBeVisible()

		// Check for some key tech stack items
		await expect(page.getByText('Next.js 15', { exact: true })).toBeVisible()
		await expect(page.getByText('React 19', { exact: true })).toBeVisible()
		await expect(page.getByText('TypeScript', { exact: true })).toBeVisible()
		await expect(page.getByText('Tailwind CSS 4', { exact: true })).toBeVisible()
	})

	test('displays get started section with 3 command sections', async ({ page }) => {
		const getStartedHeading = page.getByRole('heading', { name: 'Get Started' })
		await expect(getStartedHeading).toBeVisible()

		// Check for Development, Testing, and Build sections
		await expect(page.getByRole('heading', { name: 'Development', exact: true })).toBeVisible()
		await expect(page.getByRole('heading', { name: 'Testing', exact: true })).toBeVisible()
		await expect(page.getByRole('heading', { name: 'Build', exact: true })).toBeVisible()
	})

	test('has correct page title and metadata', async ({ page }) => {
		await expect(page).toHaveTitle('Next.js Starter Template')
	})

	test('page is responsive on mobile viewport', async ({ page }) => {
		// Set mobile viewport
		await page.setViewportSize({ width: 375, height: 667 })

		// Main heading should still be visible
		const heading = page.locator('h1')
		await expect(heading).toBeVisible()

		// Links should be stacked vertically on mobile
		const buttons = page.locator('a[href="/docs"], a[href="https://github.com"]').first()
		await expect(buttons).toBeVisible()
	})

	test('page is responsive on tablet viewport', async ({ page }) => {
		// Set tablet viewport
		await page.setViewportSize({ width: 768, height: 1024 })

		// Main heading should still be visible
		const heading = page.locator('h1')
		await expect(heading).toBeVisible()

		// Feature grid should display correctly
		const featureCards = page.locator(
			'.grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 > div'
		)
		await expect(featureCards).toHaveCount(6)
	})
})
