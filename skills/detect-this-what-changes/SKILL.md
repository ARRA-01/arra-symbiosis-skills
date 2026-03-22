---
name: detect-this-what-changes
description: User shortcut. Detect project stack + show what changed — full situational awareness of a codebase and its recent changes.
---

# /detect-this-what-changes

Two-part scan: identify what this project IS, then show what CHANGED.

## Part 1: Detect Stack

Scan the current directory and identify:

1. **Language & Runtime** — TypeScript, Python, Rust, Go, etc. Check package.json, pyproject.toml, Cargo.toml, go.mod
2. **Framework** — Next.js, Hono, Astro, SvelteKit, FastAPI, etc. Check dependencies and file patterns
3. **Infrastructure** — Docker, CF Workers, Vercel, AWS, etc. Check wrangler.json, Dockerfile, vercel.json
4. **Database** — SQLite, PostgreSQL, D1, PocketBase, etc. Check config files and imports
5. **AI/ML** — Claude API, OpenAI, Gemini, MCP servers, etc. Check SDK imports
6. **Build tools** — Bun, npm, pnpm, uv, cargo, etc. Check lockfiles

## Part 2: What Changed

Show what changed in the current branch compared to main (or a given base):

1. **Run** `git diff main...HEAD --stat` for file-level summary
2. **Run** `git log main..HEAD --oneline` for commit list
3. **Categorize changes**: new files, modified (+/- lines), deleted
4. **Impact analysis** — what does this change DO, what might BREAK, what should be TESTED

## Arguments

- No args → detect stack + diff against main
- Branch name → diff against that branch
- Path → detect stack at that path

## Output format

```
📦 Project: <name>
🔧 Stack: <runtime> + <framework>
🗄️ DB: <database>
☁️ Deploy: <platform>
🤖 AI: <integrations>
📋 Scripts: <key scripts>

📊 Changes: X files (+added / -removed)
🔀 Branch: <current> ← <base>
📝 Commits: N

### Files
+ new-file.ts (purpose)
~ modified-file.ts (+10/-3) — what changed
- deleted-file.ts — why removed

### Impact
⚠️ Breaking: <any breaking changes>
🧪 Test: <what needs testing>
```

## Rules

- Read file tree first (ls, glob), don't guess
- Check actual imports, not just config presence
- Always show actual diff stats, not guesses
- For large diffs, group by directory
- Flag changes to package.json, config files, or CI as high-impact
- If on main with no branch diff, show last 5 commits instead
