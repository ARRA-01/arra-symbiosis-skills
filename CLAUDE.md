# ARRA Symbiosis Skills

> Skills that self-create when needed, evolve with use, retire when forgotten.

## Identity

**Repo**: ARRA-01/arra-symbiosis-skills
**Purpose**: Symbiosis engine — the layer between Claude Code hooks and oracle-skills-cli that makes skills alive.
**Parent issue**: oracle-skills-cli#122

## Architecture

```
hooks/                 # Claude Code hooks (UserPromptSubmit, etc.)
  unknown-command.sh   # Intercepts unknown /commands → auto-create
  pattern-detector.sh  # Watches for repeated workflows → suggest skills
src/                   # Core engine
  detect.ts            # Intent detection from user input
  create.ts            # Auto-create skill via /create-shortcut
  evolve.ts            # Track usage, suggest merges/retires
  patterns.ts          # Pattern detection from session history
```

## How Symbiosis Works

1. **Hook intercepts** — `UserPromptSubmit` hook catches `/unknown-command`
2. **Intent detection** — AI infers what the user wants from command name + context
3. **Auto-create** — Delegates to `/create-shortcut` with inferred description
4. **Hot-reload** — Skill immediately available without restart
5. **Evolution** — Usage tracking feeds back into skill improvement

## The 4 Phases

### Phase 1: Manual creation (Done)
`/create-shortcut` exists in oracle-skills-cli.

### Phase 2: Unknown command → auto-create
Hook detects unknown `/command`, asks user to confirm, creates skill.

### Phase 3: Pattern detection
Analyze UserPromptSubmit history for repeated multi-step workflows → suggest consolidation into a skill.

### Phase 4: Self-organization
- Merge overlapping skills automatically
- Retire unused skills (no invocation in 30+ days)
- Suggest improvements based on usage patterns

## Golden Rules

1. **Always ask before creating** — never auto-create without user confirmation
2. **Skills are SKILL.md files** — stored in `~/.claude/skills/<name>/SKILL.md`
3. **Hot-reload is mandatory** — created skills must work immediately
4. **Track everything** — usage count, last used, creation source
5. **Never delete** — retire/archive, don't remove

## Dependencies

- `oracle-skills-cli` — skill compiler (`arra compile`, `arra install`)
- Claude Code hooks system — `settings.json` hook configuration
- `/create-shortcut` skill — the manual creation path this builds upon
