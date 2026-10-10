# Space-Native AI

**Intelligence Beyond Earth** — an emerging independent research initiative on machine learning, autonomous scientific discovery and intelligence in space.

Founded by Bingyi Zhao (Darmstadt, Germany).

## Public website

**Expected organization site:** <https://space-native-ai.github.io/> (after Pages deployment; not yet verified live)

> Deployment assumes the GitHub organization is named `space-native-ai`. If it has a different username, update the canonical URLs and GitHub Issues links before publishing.

## Quick deployment: GitHub website, no command line

1. In the `space-native-ai` **organization**, create a **Public** repository named **`space-native-ai.github.io`**. Initialize it with a README and leave Issues enabled. Do not use GitHub's **Import repository** tool for this ZIP; the importer expects the URL of an existing Git repository.
2. Download this package, **extract it**, and open the extracted folder.
3. In the GitHub repository, choose **Add file → Upload files**. Drag the **contents of the extracted folder** (including the `.github` folder) into the upload page, not the ZIP file itself. Upload all files to the repository root (where `index.html` will be visible). If `.github` is hidden in the file browser, enable hidden files or drag the containing extracted folder.
4. Commit changes on the default `main` branch. If GitHub requests a PR instead, follow the prompt and merge it.
5. In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, `main`, `/(root)`, then **Save**.
6. Confirm the site at <https://space-native-ai.github.io/> and test `contribute.html`, the Issues links, and the issue form templates.

If the public site is not live yet, **do not** provide its planned URL as an operational submission link for World Space Week.

## Files

- `index.html` — initiative homepage and research agenda
- `event-2026.html` — inaugural World Space Week 2026 activity
- `contribute.html` — call for research questions through public GitHub Issue forms
- `about.html` — founder attribution and independent organizational status
- `privacy.html` — visitor privacy and public-submission practices
- `.github/ISSUE_TEMPLATE/*.yml` — structured public submission forms
- `styles.css`, `script.js`, `favicon.svg`, `.nojekyll` — static website assets

## Important

This is an **independent initiative**, not a registered association, a confirmed conference workshop, or an ESA/UN/WSW institutional program. The event page is not evidence of WSW listing or approval. GitHub Issues are **public** and require a GitHub account. Contributors should not provide confidential or patent-sensitive research.
