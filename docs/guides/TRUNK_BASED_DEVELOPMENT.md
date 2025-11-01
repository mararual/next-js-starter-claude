# Trunk-Based Development Guide

This project uses **Trunk-Based Development** with a single `main` branch as the source of truth. All work flows through feature commits directly to `main`.

## Core Principles

### Single Branch
- ✅ **One main branch** - All code flows through `main`
- ✅ **No long-lived branches** - No `develop`, `staging`, or `release` branches
- ✅ **Fast integration** - Changes merge to main daily or more frequently
- ✅ **Continuous deployment** - Merged code automatically deploys

### Quality Gates
- ✅ **All tests must pass** - Unit, E2E, and quality checks
- ✅ **Code review before merge** - Every change reviewed
- ✅ **Automated checks** - Linting, formatting, type checking
- ✅ **No bypassing CI/CD** - All checks must succeed

### Small, Frequent Commits
- ✅ **Atomic commits** - Each commit does one thing
- ✅ **Descriptive messages** - Conventional commits format
- ✅ **Easy to revert** - If needed, changes are small and reversible
- ✅ **Fast review cycles** - Smaller changes are easier to review

## Workflow

### 1. Create Feature Branch (Optional)

While trunk-based development typically works directly on `main`, you can use short-lived feature branches:

```bash
# Create feature branch from main
git checkout main
git pull origin main
git checkout -b feat/your-feature-name
```

**Branch naming conventions:**
- `feat/feature-name` - New features
- `fix/bug-name` - Bug fixes
- `docs/what-changed` - Documentation updates
- `refactor/what-improved` - Refactoring
- `perf/optimization` - Performance improvements

### 2. Develop Your Feature

Follow BDD → ATDD → TDD workflow:

```bash
# 1. Write BDD feature file
echo "Feature: Your feature" > docs/features/your-feature.feature

# 2. Write acceptance tests
# Create tests/e2e/your-feature.spec.js

# 3. Write unit tests
# Create src/**/*.test.js

# 4. Implement code
# Write implementation to pass tests

# 5. Run all tests locally
npm test
npm run test:e2e

# 6. Lint and format
npm run lint:fix
npm run format
```

### 3. Commit Changes (Conventional Commits)

```bash
# Stage your changes
git add .

# Commit with conventional format
git commit -m "feat: add user authentication"
```

**Valid commit types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code formatting (no logic change)
- `refactor` - Code restructuring
- `perf` - Performance improvement
- `test` - Adding/updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes

**Commit message guidelines:**
- ✅ Imperative mood: "add" not "added" or "adds"
- ✅ Don't capitalize: "fix bug" not "Fix bug"
- ✅ No period at end: "add feature" not "add feature."
- ✅ Reference issues: "fix #123" or "closes #456"

**Examples:**
```bash
git commit -m "feat: add user login page"
git commit -m "fix: prevent null pointer in string utils"
git commit -m "test: add comprehensive string utility tests"
git commit -m "docs: update deployment guide"
git commit -m "refactor: simplify counter logic"
git commit -m "perf: optimize image loading"
```

### 4. Push to Feature Branch

```bash
# Push your feature branch
git push origin feat/your-feature-name
```

### 5. Create Pull Request

Create PR on GitHub:

1. **Title:** Use same format as commit message
   - Good: "feat: add user authentication"
   - Bad: "Update stuff" or "WIP"

2. **Description:** Explain what and why
   ```markdown
   ## Summary
   Adds user authentication with OAuth2

   ## Changes
   - Created login page
   - Integrated OAuth provider
   - Added authentication middleware

   ## Testing
   - [ ] Unit tests pass (npm test)
   - [ ] E2E tests pass (npm run test:e2e)
   - [ ] Linting passes (npm run lint)
   - [ ] Code review approved
   ```

3. **Checklist:** Ensure all items complete
   - Tests pass locally
   - No console errors
   - Code reviewed
   - Documentation updated

### 6. CI/CD Validation

When you push, GitHub Actions automatically:

1. **Code Quality**
   - Runs ESLint
   - Checks code formatting
   - Validates TypeScript

2. **Tests**
   - Runs unit tests
   - Uploads coverage to Codecov
   - Runs E2E tests

3. **Build**
   - Builds Next.js application
   - Verifies no build errors

**All jobs must pass before merging to main.**

### 7. Code Review

**Reviewer's checklist:**
- ✅ Code follows project patterns
- ✅ Tests are comprehensive
- ✅ No security issues
- ✅ Performance is acceptable
- ✅ Documentation is clear
- ✅ Conventional commit message

**Request changes** if needed:
```
Please add tests for the error case
```

**Approve** when ready:
```
Looks good! ✅
```

### 8. Merge to Main

Once approved and CI passes:

1. **Squash commits** (if multiple):
   ```bash
   # If using GitHub UI, select "Squash and merge"
   ```

2. **Or merge as-is** if commits are already clean

3. **Delete feature branch** after merging

```bash
# Locally update main
git checkout main
git pull origin main

# Delete local feature branch
git branch -d feat/your-feature-name

# Delete remote feature branch (GitHub does this automatically)
```

### 9. Automatic Deployment

After merge to `main`:

1. **CI/CD runs** on `main`
2. **All checks pass**
3. **Automatic deploy to Vercel**
4. **Live in production**

No manual deployment needed!

## Strategies for Trunk-Based Development

### Feature Flags

Use feature flags for incomplete features:

```typescript
// src/config/flags.ts
export const FEATURES = {
  newUI: process.env.NEXT_PUBLIC_FEATURE_NEW_UI === 'true',
  betaPayments: process.env.NEXT_PUBLIC_FEATURE_BETA_PAYMENTS === 'true',
} as const;

// In component
if (FEATURES.newUI) {
  return <NewUIVersion />
} else {
  return <OldUIVersion />
}
```

### Branch by Abstraction

For large refactorings:

```typescript
// Create new implementation alongside old
export const newAuthProvider = () => { /* v2 */ }
export const oldAuthProvider = () => { /* v1 */ }

// Route based on flag
const provider = FEATURES.useNewAuth ? newAuthProvider : oldAuthProvider
```

### Short-Lived Branches

- Keep branches under 1 day old
- Merge daily or more frequently
- Rebase on main if conflicts

```bash
# Update branch with main changes
git fetch origin
git rebase origin/main

# Resolve any conflicts
git add .
git rebase --continue

# Force push (only for your feature branch!)
git push origin feat/your-feature --force-with-lease
```

## Handling Issues

### Accidental Commit to Main

If you commit directly to main:

```bash
# Create feature branch from current state
git checkout -b feat/your-feature

# Move main back to where it was
git checkout main
git reset --hard origin/main

# Push feature branch and create PR
git push origin feat/your-feature
```

### Need to Revert

If a commit breaks production:

```bash
# Create revert commit
git revert <commit-hash>

# This creates a new commit that undoes the changes
git push origin main
```

### Merge Conflict

If main has diverged:

```bash
# Update your branch
git fetch origin
git rebase origin/main

# Resolve conflicts in your editor
git add .
git rebase --continue

# Push updates
git push origin feat/your-feature --force-with-lease
```

## CI/CD Pipeline

```
push to feature branch
        ↓
  Run Tests (Parallel)
    ├─ Code Quality (lint, format)
    ├─ Unit Tests (vitest)
    └─ E2E Tests (playwright)
        ↓
  Build Application
        ↓
  All Pass? → Create PR
        ↓
  Code Review Approval
        ↓
  Merge to main
        ↓
  Run Tests Again
        ↓
  Build Application
        ↓
  Deploy to Vercel
        ↓
  🚀 Live
```

## Best Practices

### ✅ Do

- ✅ Keep commits small and focused
- ✅ Push to feature branch daily
- ✅ Write descriptive commit messages
- ✅ Run tests locally before pushing
- ✅ Review your own code first
- ✅ Ask questions in PR review
- ✅ Rebase on main before merging
- ✅ Use feature flags for incomplete work
- ✅ Deploy small changes frequently

### ❌ Don't

- ❌ Make large refactorings in one commit
- ❌ Commit directly to main
- ❌ Merge without tests passing
- ❌ Keep feature branches open for weeks
- ❌ Use vague commit messages
- ❌ Force push to main
- ❌ Merge without review
- ❌ Ignore CI/CD failures
- ❌ Commit incomplete work

## Vercel Deployment

### Setup

1. **Connect repository to Vercel**
   - Go to vercel.com
   - Click "New Project"
   - Import from GitHub
   - Select your repository

2. **Configure environment variables**
   ```
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   NEXT_PUBLIC_FEATURE_NEW_UI=false
   ```

3. **Set secrets in GitHub**
   - Go to Settings → Secrets and variables → Actions
   - Add:
     - `VERCEL_TOKEN` - From Vercel account
     - `VERCEL_ORG_ID` - From Vercel project
     - `VERCEL_PROJECT_ID` - From Vercel project

### Automatic Deployment

When you push to main:

1. GitHub Actions runs CI/CD pipeline
2. If all tests pass
3. Automatic deployment to Vercel
4. Preview URL provided
5. Live on production domain

### Preview Deployments

Every pull request gets automatic preview:

1. Push feature branch
2. Create PR
3. Vercel creates preview URL
4. Test changes before merge
5. Share URL with team

## Monitoring

### CI/CD Status

Check status in GitHub:
- Green checkmark ✅ - All checks pass
- Red X ❌ - Some checks failed
- Yellow circle ⏳ - Checks running

### Vercel Dashboard

Monitor deployments:
- vercel.com → Project → Deployments
- See all production and preview deployments
- Rollback if needed
- View analytics and performance

## Troubleshooting

### CI/CD Fails on Main

1. Check GitHub Actions tab
2. Click failed job
3. See error message
4. Fix in new commit
5. Push to main again

### Preview Deployment Fails

1. Check Vercel dashboard
2. View build logs
3. Fix issue locally
4. Push update to feature branch
5. Vercel rebuilds automatically

### Performance Issues After Deploy

1. Check Vercel Analytics
2. Monitor Core Web Vitals
3. Rollback if critical
4. Fix and redeploy

## Resources

- [GitHub Trunk-Based Development](https://trunkbaseddevelopment.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Actions](https://github.com/features/actions)

## Summary

Trunk-Based Development means:
- ✅ One main branch
- ✅ Small, frequent commits
- ✅ Comprehensive testing
- ✅ Fast code review
- ✅ Continuous deployment
- ✅ High quality standards

This ensures fast iteration while maintaining code quality and reliability.
