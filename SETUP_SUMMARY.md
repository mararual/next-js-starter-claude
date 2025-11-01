# Next.js Starter Template - Setup Summary

This is a complete, clean Next.js starter template ready for development with **BDD/ATDD/TDD workflow**.

## What's Included

### Core Framework
- ✅ **Next.js 14** with React 19
- ✅ **Tailwind CSS** for styling
- ✅ **TypeScript** configuration (optional, can be used with JS)

### Testing Setup
- ✅ **Vitest** for unit tests
- ✅ **Playwright** for E2E tests
- ✅ **@testing-library/react** for component testing
- ✅ Test configuration files ready to use

### Code Quality
- ✅ **ESLint** configured with Next.js rules
- ✅ **Prettier** for code formatting
- ✅ **Husky** git hooks
- ✅ **Conventional Commits** validation
- ✅ **Lint-staged** for pre-commit checks

### Project Structure

```
nextjs-starter-claude/
├── app/                          # Next.js app directory
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   └── globals.css               # Global styles
├── src/
│   ├── components/               # React components (empty)
│   ├── lib/                      # Utilities and helpers (empty)
│   ├── utils/
│   │   ├── string.js            # Sample utility functions
│   │   └── string.test.js       # Sample unit tests
│   └── test/
│       └── setup.js              # Test configuration
├── tests/
│   └── e2e/
│       └── landing-page.spec.js # Sample E2E test
├── docs/
│   ├── features/
│   │   └── landing-page.feature # Sample BDD feature file
│   └── guides/
│       ├── DEVELOPMENT_FLOW.md   # Detailed development guide
│       └── CONTRIBUTING.md       # Contributing guidelines
├── .github/
│   └── workflows/
│       └── ci.yml                # GitHub Actions CI pipeline
├── vitest.config.js              # Unit test configuration
├── playwright.config.js          # E2E test configuration
├── tailwind.config.js            # Tailwind CSS config
├── next.config.js                # Next.js config
├── tsconfig.json                 # TypeScript config
├── .eslintrc.json                # ESLint rules
├── .prettierrc.json              # Prettier rules
├── commitlint.config.js          # Commit message validation
├── .husky/
│   ├── pre-commit                # Pre-commit hook
│   └── commit-msg                # Commit message hook
├── package.json                  # Dependencies and scripts
└── README.md                      # Project documentation
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Tests

```bash
# Unit tests
npm test

# E2E tests
npm run test:e2e

# All tests together
npm test && npm run test:e2e
```

### 4. Code Quality

```bash
# Check linting
npm run lint

# Fix linting issues
npm run lint:fix

# Check formatting
npm run format:check

# Fix formatting
npm run format
```

## Development Workflow

This starter follows **BDD → ATDD → TDD** methodology:

### 1. Write BDD Features
- Create feature files in `docs/features/` using Gherkin syntax
- Define user behavior in human-readable scenarios

### 2. Write ATDD Tests
- Create E2E tests in `tests/e2e/` using Playwright
- Test acceptance criteria from feature files

### 3. Write TDD Tests
- Create unit tests in `src/**/*.test.js`
- Test individual functions and components

### 4. Implement Code
- Write minimal code to make tests pass
- Keep functions pure and components simple

### 5. Refactor
- Improve code quality while keeping tests green
- Extract reusable patterns

## Example: Adding a Feature

### 1. Create Feature File (`docs/features/counter.feature`)

```gherkin
Feature: Counter Component
  As a user
  I want to increment and decrement a counter
  So that I can track count

  Scenario: Increment counter
    Given the counter is at 0
    When I click the increment button
    Then the counter should be 1
```

### 2. Write E2E Test (`tests/e2e/counter.spec.js`)

```javascript
import { test, expect } from '@playwright/test'

test('counter increments', async ({ page }) => {
	await page.goto('/')
	await page.click('[data-testid="increment"]')
	await expect(page.locator('[data-testid="count"]')).toContainText('1')
})
```

### 3. Write Unit Test (`src/utils/counter.test.js`)

```javascript
import { describe, it, expect } from 'vitest'
import { increment } from './counter'

describe('increment', () => {
	it('increments value by 1', () => {
		expect(increment(0)).toBe(1)
	})
})
```

### 4. Implement Code (`src/utils/counter.js`)

```javascript
export const increment = (value) => value + 1
```

### 5. Use in Component (`app/page.js`)

```javascript
'use client'

import { useState } from 'react'
import { increment } from '@/utils/counter'

export default function Home() {
	const [count, setCount] = useState(0)

	return (
		<div>
			<p data-testid="count">{count}</p>
			<button
				data-testid="increment"
				onClick={() => setCount(increment)}
			>
				Increment
			</button>
		</div>
	)
}
```

## Available Scripts

| Script | Purpose |
|--------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm test` | Run unit tests |
| `npm run test:watch` | Watch mode for tests |
| `npm run test:ui` | Interactive test UI |
| `npm run test:coverage` | Generate coverage report |
| `npm run test:e2e` | Run E2E tests |
| `npm run test:e2e:ui` | Interactive E2E UI |
| `npm run lint` | Check code style |
| `npm run lint:fix` | Auto-fix style |
| `npm run format` | Format code |
| `npm run format:check` | Check formatting |

## Configuration Files

### Environment Variables (`.env.example`)

```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_FEATURE_NEW_UI=false
NEXT_PUBLIC_ANALYTICS_ID=
```

Copy to `.env.local` and customize for your environment.

### Tailwind CSS (`tailwind.config.js`)

Customize colors, spacing, and other design tokens. The file includes helpful extension examples.

### ESLint (`.eslintrc.json`)

Configured for Next.js best practices. Extend with your own rules as needed.

### Prettier (`.prettierrc.json`)

Uses tabs for indentation (can be changed to spaces). Update preferences as needed.

## Git Workflow

### Conventional Commits

```bash
git commit -m "feat: add counter component"
git commit -m "fix: prevent negative counter"
git commit -m "test: add counter tests"
git commit -m "docs: update README"
git commit -m "style: format counter code"
git commit -m "refactor: simplify counter logic"
```

**Valid types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code formatting
- `refactor` - Code restructuring
- `perf` - Performance improvement
- `test` - Adding/updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes

### Pre-commit Checks

Husky runs automatically:
- **Pre-commit**: Lints and formats staged files
- **Commit-msg**: Validates commit message format

## Deployment

### Build and Export

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy Anywhere

Next.js generates a `.next` folder that can be deployed to any Node.js hosting.

## Documentation

- **[README.md](./README.md)** - Project overview and quick start
- **[DEVELOPMENT_FLOW.md](./docs/guides/DEVELOPMENT_FLOW.md)** - Detailed development guide
- **[CONTRIBUTING.md](./docs/guides/CONTRIBUTING.md)** - Contribution guidelines
- **[docs/features/](./docs/features/)** - BDD feature files

## Next Steps

1. ✅ Run `npm install`
2. ✅ Read [DEVELOPMENT_FLOW.md](./docs/guides/DEVELOPMENT_FLOW.md)
3. ✅ Start with `npm run dev`
4. ✅ Create your first feature in `docs/features/`
5. ✅ Write tests before implementation
6. ✅ Build amazing things!

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)
- [Gherkin Syntax](https://cucumber.io/docs/gherkin/)

---

**You're all set!** Happy building! 🚀
