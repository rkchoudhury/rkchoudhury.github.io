# Portfolio Deployment

This document describes the deployment strategy used to publish the portfolio to **GitHub Pages**.

The deployment process is intentionally designed around **version-based releases** so that regular code changes merged into `main` do not automatically create a new production deployment.

---

## 🌐 Production Environment

The portfolio is hosted using GitHub Pages.

**Production URL:**

https://rkchoudhury.github.io/

**Repository:**

https://github.com/rkchoudhury/rkchoudhury.github.io

The production build is generated using Vite and deployed through GitHub Actions.

---

## 🚀 Deployment Strategy

The deployment workflow supports two deployment paths:

1. **Automatic deployment** when changes are pushed to `main` and the `package.json` version has changed.
2. **Manual deployment** through GitHub Actions.

Since `main` is protected and changes are expected to go through Pull Requests, merging a PR into `main` creates the push event that triggers the deployment workflow.

The overall flow is:

```text
Feature Branch
      │
      ▼
Pull Request
      │
      ▼
Code Review
      │
      ▼
Merge into main
      │
      ▼
Push to main
      │
      ▼
GitHub Actions
      │
      ▼
Check package.json version
      │
      ├───────────────┐
      │               │
 Version Changed   Version Unchanged
      │               │
      ▼               ▼
   Build            Skip
      │            Deployment
      ▼
   Deploy
      │
      ▼
GitHub Pages
```

---

## 🔄 Automatic Deployment

Automatic deployment is triggered by a **push to the `main` branch**.

The workflow then compares the version in `package.json` with the version from the previous `main` commit.

### Deployment Conditions

| Condition                                 | Deployment  |
| ----------------------------------------- | ----------- |
| PR merged into `main` + version changed   | ✅ Deploy   |
| PR merged into `main` + version unchanged | ❌ Skip     |
| Direct push to `main` + version changed   | ✅ Deploy\* |
| Direct push to `main` + version unchanged | ❌ Skip     |
| Manual workflow execution                 | ✅ Deploy   |

\*Direct pushes to `main` should be prevented through branch protection. The normal production flow is through Pull Requests.

The repository should therefore use Pull Requests as the normal mechanism for changes to `main`.

---

## 📦 Version-Based Releases

The `version` field in `package.json` is used as the production release indicator.

Example:

```json
{
  "version": "1.0.7"
}
```

When preparing a new production release, increment the version:

```json
{
  "version": "1.0.8"
}
```

When the change is merged into `main`, GitHub Actions detects the version change and automatically deploys the new production build.

---

## ✅ Example: Deployment Triggered

Suppose the current production version is:

```text
1.0.7
```

A feature branch updates the application and changes:

```text
1.0.7 → 1.0.8
```

After the Pull Request is merged:

```text
PR merged
    ↓
Push to main
    ↓
GitHub Actions starts
    ↓
Current version:  1.0.8
Previous version: 1.0.7
    ↓
Version changed
    ↓
npm ci
    ↓
npm run build
    ↓
Upload dist/
    ↓
Deploy to GitHub Pages
```

### Result

The new version is automatically published to production.

---

## ⏭️ Example: Deployment Skipped

Suppose the current version is:

```text
1.0.8
```

A Pull Request contains only a CSS or React code change and does not update the version.

After merging:

```text
PR merged
    ↓
Push to main
    ↓
GitHub Actions starts
    ↓
Current version:  1.0.8
Previous version: 1.0.8
    ↓
Version unchanged
    ↓
Deployment skipped
```

The workflow exits without installing dependencies, building the application, or deploying to GitHub Pages.

---

## 🖐️ Manual Deployment

Manual deployment is always available through GitHub Actions.

This is useful when a deployment is required without creating a new version, for example:

- Re-deploying an existing release
- Recovering from a failed or interrupted deployment
- Re-publishing the current production build
- Testing the deployment process

### How to Deploy Manually

Open the repository on GitHub:

```text
GitHub
  → Actions
  → Deploy Portfolio
  → Run workflow
```

Select the `main` branch and run the workflow.

Manual deployment bypasses the version-change check.

```text
Manual Run
    ↓
Build
    ↓
Upload
    ↓
Deploy
```

---

## 🏷️ Release Workflow

The recommended development and release process is:

```text
1. Create feature branch
        ↓
2. Develop and test changes
        ↓
3. Increment package.json version
        ↓
4. Create Pull Request
        ↓
5. Review / approve PR
        ↓
6. Merge PR into main
        ↓
7. Push event triggers GitHub Actions
        ↓
8. Version change is detected
        ↓
9. Production build
        ↓
10. Deploy to GitHub Pages
```

For example:

```text
Feature branch
      ↓
Update portfolio
      ↓
Version: 1.0.8 → 1.0.9
      ↓
Pull Request
      ↓
Merge into main
      ↓
Push event
      ↓
Automatic deployment
```

---

## 🔢 Versioning Convention

The project follows a semantic versioning-style format:

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
1.0.7
1.0.8
1.1.0
2.0.0
```

Typical usage:

```text
PATCH

1.0.7 → 1.0.8

Bug fixes, small changes, content updates


MINOR

1.0.8 → 1.1.0

New features or significant improvements


MAJOR

1.1.0 → 2.0.0

Major redesigns or breaking changes
```

For this portfolio, the version number primarily acts as a **production deployment marker**.

---

## ⚙️ GitHub Actions Workflow

The deployment workflow is located at:

```text
.github/workflows/deploy.yml
```

The workflow is triggered by:

```yaml
on:
  push:
    branches:
      - main

  workflow_dispatch:
```

This means the workflow can start when:

- Changes are pushed to `main`
- A user manually starts the workflow

The `push` event is what triggers the automatic deployment after a Pull Request is merged.

A merged Pull Request results in a new commit on `main`, which generates the required `push` event.

---

## 🔍 Version Check

For an automatically triggered workflow, the current version is compared with the version from the previous `main` commit.

Conceptually:

```text
Current package.json
        │
        ▼
    1.0.8

Previous main commit
        │
        ▼
    1.0.7

        ↓

1.0.8 != 1.0.7

        ↓

Deploy
```

If both versions are identical:

```text
1.0.8 == 1.0.8

        ↓

Skip deployment
```

The workflow checks only the version value rather than whether any other part of `package.json` changed.

---

## 🏗️ Build Process

When deployment is approved, the workflow performs the following steps.

### 1. Checkout

The commit that triggered the workflow is checked out.

For automatic deployments, this is the latest commit on `main`.

### 2. Install Dependencies

Dependencies are installed using:

```bash
npm ci
```

### 3. Build

The production application is generated using:

```bash
npm run build
```

The generated files are placed in:

```text
dist/
```

### 4. Configure GitHub Pages

GitHub Pages deployment is configured using the GitHub Pages Actions.

### 5. Upload Build

The `dist/` directory is uploaded as the Pages deployment artifact.

### 6. Deploy

The artifact is published to GitHub Pages.

---

## 🌐 GitHub Pages Configuration

The repository is configured as a GitHub Pages user-site repository:

```text
rkchoudhury.github.io
```

The production site is:

```text
https://rkchoudhury.github.io/
```

GitHub Pages should use **GitHub Actions** as the deployment source.

The workflow is responsible for building and publishing the application.

---

## 🔐 Required GitHub Actions Permissions

The workflow requires the following permissions:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

These permissions allow the workflow to:

- Read repository contents
- Publish the GitHub Pages artifact
- Authenticate the deployment

---

## 🔒 Branch Protection

Because the deployment strategy is designed around Pull Requests, the `main` branch should be protected from direct pushes.

Recommended configuration:

```text
Feature Branch
      ↓
Pull Request
      ↓
Code Review
      ↓
Merge into main
      ↓
Push event
      ↓
GitHub Actions
```

Recommended `main` branch settings:

- Require a Pull Request before merging
- Do not allow force pushes
- Do not allow branch deletion
- Required approvals are optional for a personal repository

For this portfolio, required approvals can remain disabled because the repository may be maintained by a single developer.

Branch protection ensures that the normal production deployment flow is:

```text
Pull Request → Merge → Push to main → Deployment Check
```

---

## 🧪 Local Verification

Before creating a Pull Request, verify the production build locally:

```bash
npm ci
npm run build
```

To preview the production build:

```bash
npm run preview
```

This helps catch build-time issues before merging a release.

---

## 🛠️ Troubleshooting

### Deployment did not run after merging a PR

Check:

1. The PR was actually merged into `main`.
2. The merge resulted in a push to `main`.
3. The workflow file exists at:

```text
.github/workflows/deploy.yml
```

4. The `package.json` version changed compared with the previous `main` commit.
5. GitHub Pages is configured to use **GitHub Actions**.
6. The `github-pages` environment allows deployments from `main`.
7. The GitHub Actions workflow completed successfully.

---

### Workflow ran but deployment was skipped

Check the version values displayed in the workflow logs.

For example:

```text
Previous version: 1.0.8
Current version:  1.0.8
```

This is expected behavior.

The workflow intentionally skips the deployment when the version has not changed.

---

### PR merged but version did not change

This is expected behavior.

For example:

```text
Previous: 1.0.8
Current:  1.0.8
```

The workflow intentionally skips the deployment.

If a production deployment is required, either increment the version or use the manual deployment option.

---

### Need to redeploy without changing the version

Use:

```text
GitHub
  → Actions
  → Deploy Portfolio
  → Run workflow
```

Manual execution bypasses the automatic version check.

---

### Deployment rejected by GitHub Pages environment

If GitHub Pages reports an error similar to:

```text
Branch "refs/pull/.../merge" is not allowed to deploy
to github-pages due to environment protection rules.
```

the workflow is likely running from a Pull Request reference instead of `main`.

The current deployment workflow avoids this by using:

```yaml
on:
  push:
    branches:
      - main
```

Therefore, automatic deployments run from the actual `main` branch context rather than the Pull Request merge reference.

---

## 📋 Deployment Checklist

Before releasing a new version:

```text
☐ Changes completed
☐ Application tested locally
☐ npm run build succeeds
☐ package.json version incremented
☐ Pull Request created
☐ Pull Request reviewed
☐ Pull Request merged into main
☐ Push to main triggers GitHub Actions
☐ Version change detected
☐ GitHub Actions deployment completed
☐ Production site verified
```

---

## 📌 Summary

The deployment strategy intentionally separates **development changes** from **production releases**.

```text
Code changes
     ↓
Pull Request
     ↓
Merge into main
     ↓
Push event
     ↓
Version changed?
   ↙       ↘
 YES       NO
  ↓         ↓
Deploy     Skip
```

This keeps the production deployment process predictable while still allowing manual deployments when required.

The `package.json` version serves as a lightweight **release marker**, while GitHub Actions handles the build and GitHub Pages deployment.

---

## 📎 Related Files

```text
.github/
└── workflows/
    └── deploy.yml

package.json
```

Production site:

```text
https://rkchoudhury.github.io/
```

Repository:

```text
https://github.com/rkchoudhury/rkchoudhury.github.io
```
