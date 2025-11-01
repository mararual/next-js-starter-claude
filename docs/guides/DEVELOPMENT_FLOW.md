# Development Flow Guide

This project follows a **BDD → ATDD → TDD** workflow for systematic, test-driven development.

## Philosophy

**BDD → ATDD → TDD → Red → Green → Refactor**

1. Write Gherkin feature scenarios (BDD)
2. Convert scenarios to acceptance tests (ATDD)
3. Write failing unit/integration tests (TDD)
4. Write minimal code to pass tests (Red → Green)
5. Refactor while keeping tests green
6. Repeat

## BDD - Behavior-Driven Development

### Define Features with Gherkin

Create feature files in `docs/features/` using Gherkin syntax:

```gherkin
Feature: Feature Name
  As a [role]
  I want [feature]
  So that [benefit]

  Scenario: Clear scenario description
    Given [initial context]
    When [action occurs]
    Then [expected outcome]
```

**Example:** `docs/features/user-authentication.feature`

```gherkin
Feature: User Authentication
  As a user
  I want to log in to the application
  So that I can access my account

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should be redirected to the dashboard
```

## ATDD - Acceptance Test-Driven Development

### Convert Features to Playwright E2E Tests

Translate Gherkin scenarios to Playwright tests in `tests/e2e/`:

**File:** `tests/e2e/authentication.spec.js`

```javascript
import { test, expect } from '@playwright/test'

test.describe('User Authentication', () => {
	test('successful login redirects to dashboard', async ({ page }) => {
		// Given I am on the login page
		await page.goto('/login')

		// When I enter valid credentials
		await page.fill('[data-testid="email"]', 'user@example.com')
		await page.fill('[data-testid="password"]', 'password123')

		// And I click the login button
		await page.click('[data-testid="login-button"]')

		// Then I should be redirected to the dashboard
		await expect(page).toHaveURL('/dashboard')
	})
})
```

## TDD - Test-Driven Development

### Write Unit Tests First

Create tests in `src/**/*.test.js` following the AAA pattern:

```javascript
import { describe, it, expect } from 'vitest'
import { validateEmail } from './validators'

describe('validateEmail', () => {
	it('returns true for valid email addresses', () => {
		// Arrange
		const validEmail = 'user@example.com'

		// Act
		const result = validateEmail(validEmail)

		// Assert
		expect(result).toBe(true)
	})

	it('returns false for invalid email addresses', () => {
		// Arrange
		const invalidEmail = 'not-an-email'

		// Act
		const result = validateEmail(invalidEmail)

		// Assert
		expect(result).toBe(false)
	})
})
```

### Implement Code to Pass Tests

Write minimal code to make tests pass:

```javascript
// src/lib/validators.js
export const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email)
}
```

## Testing Pyramid

```
        /\
       /  \    E2E Tests (Playwright)
      /____\   - User acceptance criteria
     /      \  Integration Tests
    /________\ - Component behavior
   /          \ Unit Tests (Vitest)
  /____________\ - Pure functions & utilities
```

## Project Structure

```
project/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   ├── lib/               # Library code
│   ├── utils/             # Utility functions
│   │   ├── string.js
│   │   └── string.test.js
│   └── test/
│       └── setup.js       # Test configuration
├── tests/
│   └── e2e/               # Playwright E2E tests
│       └── landing-page.spec.js
├── docs/
│   ├── features/          # BDD feature files
│   │   └── landing-page.feature
│   └── guides/            # Development guides
├── vitest.config.js       # Vitest configuration
└── playwright.config.js   # Playwright configuration
```

## Development Commands

```bash
# Start development server
npm run dev

# Run tests
npm test              # Unit tests (one-time run)
npm run test:watch   # Unit tests (watch mode)
npm run test:ui      # Unit tests with UI

# E2E tests
npm run test:e2e      # Run Playwright tests
npm run test:e2e:ui   # Interactive Playwright UI

# Code quality
npm run lint          # Check code style
npm run lint:fix      # Auto-fix style issues
npm run format        # Format code
npm run format:check  # Check formatting

# Build
npm run build         # Production build
npm start             # Production start
```

## Workflow Example

### 1. Write BDD Feature

Create `docs/features/greeting.feature`:

```gherkin
Feature: Greeting Message
  As a user
  I want to see a personalized greeting
  So that I feel welcomed

  Scenario: Display greeting for user
    Given the user is named "Alice"
    When the page loads
    Then I should see "Hello, Alice!"
```

### 2. Write ATDD Test

Create `tests/e2e/greeting.spec.js`:

```javascript
test('displays greeting with user name', async ({ page }) => {
	await page.goto('/?name=Alice')
	await expect(page.locator('text=Hello, Alice!')).toBeVisible()
})
```

### 3. Write Unit Tests

Create `src/utils/greeting.test.js`:

```javascript
import { describe, it, expect } from 'vitest'
import { createGreeting } from './greeting'

describe('createGreeting', () => {
	it('creates greeting with user name', () => {
		expect(createGreeting('Alice')).toBe('Hello, Alice!')
	})
})
```

### 4. Implement Code

Create `src/utils/greeting.js`:

```javascript
export const createGreeting = (name) => `Hello, ${name}!`
```

### 5. Run Tests

```bash
npm test                # All tests pass ✓
npm run test:e2e        # E2E tests pass ✓
```

### 6. Refactor

Improve code while keeping tests green.

## Best Practices

### Functional Programming

- ✅ Pure functions (no side effects)
- ✅ Immutability (no mutation)
- ✅ Function composition
- ✅ No unnecessary classes

### Testing

- ✅ One assertion per test (usually)
- ✅ Test behavior, not implementation
- ✅ Descriptive test names
- ✅ Isolated, independent tests

### Code Organization

- ✅ Keep files under 300 lines
- ✅ One responsibility per file
- ✅ Group related functionality
- ✅ Clear, descriptive names

## Git Workflow

### Conventional Commits

Follow conventional commits for clear history:

```bash
git commit -m "feat: add user authentication"
git commit -m "fix: prevent null pointer in greeting"
git commit -m "test: add tests for string utilities"
git commit -m "docs: update development flow guide"
```

Valid types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`

## Helpful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Vitest Documentation](https://vitest.dev)
- [Playwright Documentation](https://playwright.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/)

## Getting Help

If you get stuck:

1. Check the relevant documentation
2. Search for similar issues in your project
3. Run tests with verbose output: `npm test -- --reporter=verbose`
4. Use Vitest UI for debugging: `npm run test:ui`
5. Use Playwright Inspector: `PWDEBUG=1 npm run test:e2e`
