---
name: read-this
description: User shortcut. Read a URL or file path the user provides — fetch, display, and summarize the content.
---

# /read-this

When the user provides a URL or file path:

1. **Detect type**:
   - GitHub URL → use `gh api` to fetch raw content (repos, issues, PRs, files, README)
   - Web URL → use WebFetch to retrieve the page
   - Local file path → use Read tool

2. **Display content** — show the full content (or relevant excerpt if very long)

3. **Summarize** — provide a brief summary of what the content contains:
   - For code: what it does, key functions, dependencies
   - For issues/PRs: status, description, key discussion points
   - For articles: main points, conclusions
   - For README: project purpose, setup, key features

## Rules

- Always show the actual content first, then summarize
- For GitHub URLs, parse the URL to extract owner/repo/path and use `gh api`
- For large files, show the first 100 lines + summary
- If the URL is invalid or unreachable, say so clearly
