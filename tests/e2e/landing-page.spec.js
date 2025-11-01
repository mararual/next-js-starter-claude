import { test, expect } from '@playwright/test'

test.describe('Landing Page', () => {
	test('displays main title and description', async ({ page }) => {
		// Given I navigate to the home page
		await page.goto('/')

		// Then I should see the main title
		await expect(page.locator('h1')).toContainText('Next.js Starter Template')

		// And I should see a description
		await expect(page.locator('p')).toContainText('BDD/ATDD/TDD development flow')
	})

	test('has call-to-action buttons', async ({ page }) => {
		// Given I navigate to the home page
		await page.goto('/')

		// Then I should see at least one button
		const buttons = page.locator('a[class*="bg-blue"]')
		await expect(buttons).toHaveCount(1)

		// The button should be clickable
		await expect(buttons.first()).toBeVisible()
	})

	test('displays feature cards', async ({ page }) => {
		// Given I navigate to the home page
		await page.goto('/')

		// Then I should see feature cards with expected content
		await expect(page.locator('text=BDD First')).toBeVisible()
		await expect(page.locator('text=Test Driven')).toBeVisible()
		await expect(page.locator('text=Modern Stack')).toBeVisible()
	})
})
