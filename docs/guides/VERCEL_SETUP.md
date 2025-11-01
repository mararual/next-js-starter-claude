# Vercel Deployment Setup Guide

This guide walks you through setting up automatic deployment to Vercel with GitHub Actions.

## Prerequisites

- GitHub repository created
- Vercel account (free tier available)
- Repository pushed to GitHub

## Step 1: Create Vercel Project

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Select your repository
5. Configure project settings:
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Install Command:** `npm ci` (auto-filled)
6. Click "Deploy"
7. Wait for initial deployment

### Option B: Via CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel

# Follow prompts to create project
```

## Step 2: Get Vercel Credentials

You need three pieces of information:

### 2.1 Get VERCEL_TOKEN

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click "Create Token"
3. Give it a name: "GitHub Actions"
4. Set scope to: "Full Account"
5. Click "Create"
6. **Copy the token** (you'll only see it once)

### 2.2 Get VERCEL_ORG_ID

1. Go to [vercel.com/account/general](https://vercel.com/account/general)
2. Find "Team ID" (if personal account, it shows your personal ID)
3. **Copy the Team ID**

### 2.3 Get VERCEL_PROJECT_ID

1. Go to your project in Vercel dashboard
2. Click "Settings"
3. Find "Project ID"
4. **Copy the Project ID**

## Step 3: Add GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings" tab
3. In left sidebar: "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add three secrets:

### Secret 1: VERCEL_TOKEN
- Name: `VERCEL_TOKEN`
- Value: [paste from Step 2.1]
- Click "Add secret"

### Secret 2: VERCEL_ORG_ID
- Name: `VERCEL_ORG_ID`
- Value: [paste from Step 2.2]
- Click "Add secret"

### Secret 3: VERCEL_PROJECT_ID
- Name: `VERCEL_PROJECT_ID`
- Value: [paste from Step 2.3]
- Click "Add secret"

**Result:** Three secrets visible in your Actions secrets

## Step 4: Verify CI/CD Configuration

The GitHub Actions workflow is already configured in `.github/workflows/ci.yml`:

```yaml
deploy:
  name: Deploy to Vercel
  runs-on: ubuntu-latest
  needs: build
  if: github.event_name == 'push' && github.ref == 'refs/heads/main'

  steps:
    - uses: actions/checkout@v4
    - name: Deploy to Vercel
      uses: vercel/action@v4
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

This automatically deploys when pushing to `main` after all tests pass.

## Step 5: Environment Variables

### Add to Vercel Dashboard

1. Go to your Vercel project
2. Click "Settings"
3. Click "Environment Variables"
4. Add variables:

```
NEXT_PUBLIC_API_URL = https://api.yourdomain.com
NEXT_PUBLIC_FEATURE_NEW_UI = false
DATABASE_URL = postgresql://...
```

**Note:** Variables prefixed with `NEXT_PUBLIC_` are available in the browser. Don't put secrets there.

### Development Environment

Create `.env.local` for local development:

```bash
# Copy example
cp .env.example .env.local

# Edit with your values
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Step 6: Test the Setup

### Make a Test Commit

```bash
# Create feature branch
git checkout -b test/vercel-setup

# Make a small change
echo "# Test" >> README.md

# Commit and push
git add .
git commit -m "test: verify vercel setup"
git push origin test/vercel-setup
```

### Create Pull Request

1. Go to GitHub
2. Create PR from `test/vercel-setup` to `main`
3. Watch GitHub Actions run tests
4. Vercel will create a **Preview Deployment**
5. Click "Visit" to preview changes

### Merge to Main

Once happy with preview:

1. Merge PR to `main`
2. GitHub Actions runs CI/CD
3. If all tests pass → **Automatic deployment to Vercel**
4. See your changes live!

## Deployment Flow

```
1. Push to feature branch
          ↓
2. GitHub Actions: Test
   ├─ Lint & Format
   ├─ Unit Tests
   └─ E2E Tests
          ↓
3. Create PR
          ↓
4. Vercel: Preview Deployment
   (Share URL with team)
          ↓
5. Code Review & Approval
          ↓
6. Merge to main
          ↓
7. GitHub Actions: Test (again)
          ↓
8. Build Application
          ↓
9. Deploy to Vercel (Production)
          ↓
10. 🚀 Live at yourdomain.com
```

## Monitoring Deployments

### Vercel Dashboard

Monitor all deployments:

1. Go to vercel.com
2. Click your project
3. See deployment history
4. View build logs
5. Check analytics

### GitHub Actions

Monitor CI/CD pipeline:

1. Go to your GitHub repo
2. Click "Actions" tab
3. See workflow runs
4. Check individual job logs
5. Debug failures

### Logs and Debugging

**View Vercel Build Logs:**
- Vercel Dashboard → Deployments → Click deployment → Build Logs

**View GitHub Actions Logs:**
- GitHub Repo → Actions → Click workflow run → Click job → View logs

**Common Issues:**
- Tests failing → Fix code and push update
- Build failing → Check Next.js build errors
- Deployment failing → Check Vercel logs

## Rollback (If Needed)

If a deployment breaks production:

### Via Vercel Dashboard

1. Go to vercel.com → Project → Deployments
2. Find the previous good deployment
3. Click "Promote to Production"
4. Live immediately

### Via GitHub (Revert Commit)

```bash
git revert <bad-commit-hash>
git push origin main
```

This creates a new commit undoing changes automatically.

## Custom Domain

### Add Custom Domain

1. Vercel Dashboard → Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain
4. Follow DNS instructions
5. Vercel verifies ownership
6. 🚀 Live at yourdomain.com

### DNS Configuration

Vercel provides DNS records to add to your domain registrar:

```
Type  Name  Value
A     @     76.76.19.165
AAAA  @     2606:4700:3111::ac43:8e65
CNAME www   cname.vercel-dns.com.
```

## Performance Monitoring

Vercel provides analytics:

1. Dashboard → Project → Analytics
2. Monitor:
   - Core Web Vitals
   - Page load times
   - Error rates
   - Traffic

## Scaling

Vercel automatically scales:

- ✅ Serverless functions scale to handle traffic
- ✅ Edge caching speeds up responses
- ✅ No configuration needed
- ✅ Pay only for what you use (free tier generous)

## Troubleshooting

### Deployment Fails

1. Check GitHub Actions logs
2. Check Vercel build logs
3. Common issues:
   - Missing environment variables
   - Build errors in Next.js
   - Test failures

### Preview Deployment Not Available

- Push to feature branch again
- Wait for GitHub Actions to complete
- Vercel will create preview URL

### Custom Domain Not Working

- Check DNS configuration is correct
- Wait 24-48 hours for DNS propagation
- Verify in Vercel dashboard

### Performance Issues

1. Check Vercel Analytics
2. Monitor Core Web Vitals
3. Optimize images and assets
4. Check database queries

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** vercel.com/support
- **Next.js Deployment:** https://nextjs.org/docs/deployment

## Summary

✅ Vercel setup is complete when:

1. Project created in Vercel
2. Three GitHub secrets added
3. Environment variables configured
4. First successful deployment to main
5. Custom domain configured (optional)

**You now have continuous deployment!** Every merge to main automatically deploys to production.
