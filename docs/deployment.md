# Portfolio Deployment

This document describes the deployment strategy used to publish the portfolio to **GitHub Pages**.

The deployment process is intentionally designed around **version-based releases** so that merging regular code changes into `main` does not automatically create a new production deployment.

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

1. **Automatic deployment** after a Pull Request is merged into `main` with a version change.
2. **Manual deployment** through GitHub Actions.

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

Automatic deployment is triggered when a Pull Request targeting `main` is **merged**.

The workflow does not deploy every time code is merged.

Instead, it compares the version in `package.json` with the version from the previous `main` commit.

### Deployment Conditions

| Condition                     | Deployment                 |
| ----------------------------- | -------------------------- |
| PR merged + version changed   | ✅ Deploy                  |
| PR merged + version unchanged | ❌ Skip                    |
| PR closed without merging     | ❌ Skip                    |
| Manual workflow execution     | ✅ Deploy                  |
| Direct push to `main`         | ❌ No automatic deployment |

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

The workflow detects this change and automatically deploys the new production build after the PR is merged.

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
7. GitHub Actions detects version change
        ↓
8. Production build
        ↓
9. Deploy to GitHub Pages
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
Merge
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

The workflow supports:

```yaml
on:
  pull_request:
    branches:
      - main
    types:
      - closed

  workflow_dispatch:
```

This means the workflow can start when:

- A Pull Request targeting `main` is closed
- A user manually starts the workflow

The job itself verifies that the Pull Request was actually merged:

```yaml
if: >
  github.event_name == 'workflow_dispatch' ||
  github.event.pull_request.merged == true
```

Therefore, simply closing a Pull Request without merging it does not result in a deployment.

---

## 🔍 Version Check

For an automatically triggered Pull Request workflow, the current version is compared with the version from the previous `main` commit.

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

---

## 🏗️ Build Process

When deployment is approved, the workflow performs the following steps:

### 1. Checkout

The latest `main` branch is checked out.

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

Because automatic deployment is based on Pull Request merges, `main` should ideally be protected from direct pushes.

Recommended repository configuration:

```text
Feature Branch
      ↓
Pull Request
      ↓
Required Review
      ↓
Merge into main
```

This ensures that production deployments follow the intended release process.

A direct push to `main` does not trigger the deployment workflow.

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
2. The workflow file exists at:

```text
.github/workflows/deploy.yml
```

3. The `package.json` version changed compared with the previous `main` commit.
4. GitHub Pages is configured to use **GitHub Actions**.
5. The GitHub Actions workflow completed successfully.

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
☐ GitHub Actions deployment completed
☐ Production site verified
```

---

## 📌 Summary

The deployment strategy intentionally separates **development changes** from **production releases**.

```text
Code changes
     ↓
PR merge
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
