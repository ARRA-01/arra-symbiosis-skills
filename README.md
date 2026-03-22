# ARRA Oracle Symbiosis Skills

> "The skills are alive."

Skills that self-create, self-evolve, self-organize. Named how you'd say them to a friend, not how you'd name a function.

## The Symbiosis Principle

Skills don't just serve the user — they evolve WITH the user. The system notices what you need before you ask.

```
System notices you keep doing the same 3 steps
  → Suggests: "Create a skill for this?"
  → You approve
  → Skill exists. Forever.
```

## Born Today

5 skills born in one session, from natural conversation:

| Skill | Born From | Purpose |
|-------|-----------|---------|
| `/find-root-cause` | "I keep debugging the same way" | Trace symptoms to origin, not patch |
| `/read-this` | "I just want to read that URL" | Fetch + summarize any URL or file |
| `/detect-this-what-changes` | Merged from 2 separate skills | Stack detection + git diff awareness |
| `/make-this-cool-with-a-new-angle-suggest-me` | "suggest me something fresh" | Creative brainstorm on current work |
| `/oh-i-have-new-idea` | "I have a spark!" | Capture ideas before they fade |

## Skill Ecology

Skills aren't solo — they form chains:

```
/oh-i-have-new-idea          capture the spark
        ↓
/make-this-cool-with-a-new-angle-suggest-me    evolve it
        ↓
/detect-this-what-changes    understand the codebase
        ↓
  (build it)
        ↓
/find-root-cause             debug when it breaks
        ↓
/read-this                   read anything, anywhere
```

## Naming Philosophy

> `/oh-i-have-new-idea` > `/capture-idea`

Skills are named how you'd say them to a friend. The name IS the trigger — make it memorable, not minimal. Human emotion over programmer convention.

## How It Works

### Today (Phase 1-2) — Manual + Auto-create
1. User types `/something` that doesn't exist
2. AI recognizes intent instead of "Unknown command"
3. Auto-runs `/create-shortcut` with description inferred from context
4. Skill created + hot-reloaded + executes immediately

### Tomorrow (Phase 3-4) — Passive Evolution
1. System detects repeated workflows from session history
2. Suggests consolidation into a skill
3. Auto-merges overlapping skills
4. Retires unused skills (30+ days dormant)

## Metrics

| Metric | Value |
|--------|-------|
| Skills born | 5 |
| Session age | 1 session |
| Birth rate | 5/session |
| Merges | 1 (`/detect` + `/what-changes` → `/detect-this-what-changes`) |
| Retirements | 0 |

## Structure

```
src/           # Core symbiosis engine
hooks/         # Claude Code hooks for skill detection
```

## Related

- [oracle-skills-cli](https://github.com/Soul-Brews-Studio/oracle-skills-cli) — skill compiler and runtime
- [oracle-skills-cli#122](https://github.com/Soul-Brews-Studio/oracle-skills-cli/issues/122) — original vision issue

## License

MIT
