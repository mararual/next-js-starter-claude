# Contributing Guide

Thank you for your interest in contributing! This guide will help you get started.

## Development Setup

1. **Fork the repository**
   ```bash
   git clone <your-fork-url>
   cd nextjs-starter-claude
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Development Workflow

This project uses **BDD → ATDD → TDD** development methodology.

### Step 1: Create a Feature File

Create a new feature file in `docs/features/` with your feature using Gherkin syntax:

```gherkin
Feature: Your Feature Name
  As a [user role]
  I want [feature]
  So that [benefit]

  Scenario: Clear scenario description
    Given [initial context]
    When [action]
    Then [expected outcome]
```

### Step 2: Write E2E Tests

Create a test file in `tests/e2e/` using Playwright:

```javascript
import { test, expect } from '@playwright/test'

test.describe('Your Feature', () => {
	test('scenario description', async ({ page }) => {
		// Given...
		await page.goto('/')
		// When...
		await page.click('[data-testid="button"]')
		// Then...
		await expect(page.locator('text=Expected')).toBeVisible()
	})
})
```

### Step 3: Write Unit Tests

Create test files alongside your code in `src/**/*.test.js`:

```javascript
import { describe, it, expect } from 'vitest'
import { myFunction } from './myFunction'

describe('myFunction', () => {
	it('returns expected result', () => {
		expect(myFunction('input')).toBe('expected output')
	})
})
```

### Step 4: Implement Code

Write the minimal code to make tests pass:

```javascript
export const myFunction = (input) => {
	// Implementation
	return 'expected output'
}
```

### Step 5: Refactor

Improve code quality while keeping tests green.

## Code Style

### Functional Programming

- Write pure functions with no side effects
- Prefer immutability (spread operators instead of mutation)
- Use function composition for complex operations
- Avoid ES6 classes, use factory functions instead

**Example:**
```javascript
// ✅ Good - Pure function
export const addItem = (items, item) => [...items, item]

// ❌ Bad - Mutation
export const addItem = (items, item) => {
	items.push(item)
	return items
}
```

### Testing

- Write descriptive test names
- One behavior per test
- Use AAA pattern: Arrange, Act, Assert
- Test behavior, not implementation

**Example:**
```javascript
it('returns true for valid email addresses', () => {
	// Arrange
	const validEmail = 'user@example.com'

	// Act
	const result = validateEmail(validEmail)

	// Assert
	expect(result).toBe(true)
})
```

### Code Organization

- Keep files under 300 lines
- One responsibility per file
- Group related functionality together
- Use clear, descriptive names

## Commit Messages

Use conventional commits format:

```
<type>(<scope>): <description>

<optional body>
<optional footer>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code formatting
- `refactor` - Code restructuring
- `perf` - Performance improvement
- `test` - Adding/updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes

**Examples:**
```bash
git commit -m "feat(auth): add login functionality"
git commit -m "fix(utils): prevent null pointer in string utils"
git commit -m "test(utils): add string utility tests"
git commit -m "docs: update contribution guidelines"
```

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** following the development workflow

3. **Run tests**
   ```bash
   npm test                # Unit tests
   npm run test:e2e        # E2E tests
   npm run lint            # Linting
   npm run format:check    # Formatting
   ```

4. **Fix any issues**
   ```bash
   npm run lint:fix        # Auto-fix linting
   npm run format          # Auto-format code
   ```

5. **Commit changes** with conventional commits

6. **Push and create a pull request**
   ```bash
   git push origin feat/your-feature-name
   ```

7. **Address code review feedback**

## Testing Guidelines

### Unit Tests
- Test pure functions and utilities
- One behavior per test
- Mock external dependencies
- Use factory functions for test data

### E2E Tests
- Test user workflows
- Focus on critical paths
- Use data-testid attributes
- Keep tests independent

### Coverage Goals
- Aim for 80%+ coverage
- Focus on important logic
- Don't obsess over coverage metrics
- Test behavior, not coverage

## Common Commands

```bash
# Development
npm run dev

# Testing
npm test                    # Run unit tests
npm run test:watch         # Watch mode
npm run test:ui            # Test UI dashboard
npm run test:e2e           # E2E tests
npm run test:e2e:ui        # E2E interactive mode

# Code Quality
npm run lint               # Check style
npm run lint:fix           # Fix style issues
npm run format             # Format code
npm run format:check       # Check formatting

# Build
npm run build              # Production build
npm start                  # Start production server
```

## Getting Help

- Check the [Development Flow Guide](./DEVELOPMENT_FLOW.md)
- Review existing code in `src/utils/` for examples
- Look at existing tests for patterns
- Ask in issues or discussions

## Code of Conduct

Be respectful, inclusive, and constructive. We're all here to learn and build great software together.

---

**Happy coding!** 🚀
