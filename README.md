# ARRA Symbiosis Skills

> "The skills are alive."

Skills that self-create, self-evolve, self-organize. When user needs a skill that doesn't exist, the system auto-creates it.

## The Symbiosis Principle

Skills don't just serve the user — they evolve WITH the user. The Oracle learns what you need before you ask.

```
Day 1:  User manually types commands
Day 7:  User creates shortcuts for common workflows
Day 30: System suggests skills based on patterns
Day 90: Skills self-create, self-merge, self-retire
```

## Phases

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | `/create-shortcut` — manual skill creation | Done |
| 2 | Unknown command → auto-create | In progress |
| 3 | Pattern detection from repeated workflows | Planned |
| 4 | Self-organization (merge, retire, improve) | Planned |

## Structure

```
src/           # Core symbiosis engine
hooks/         # Claude Code hooks for skill detection
```

## How It Works

1. User types `/something` that doesn't exist
2. AI recognizes intent instead of "Unknown command"
3. Auto-runs `/create-shortcut something` with description inferred from context
4. Skill created + hot-reloaded
5. Execute immediately

## Related

- [oracle-skills-cli](https://github.com/Soul-Brews-Studio/oracle-skills-cli) — skill compiler and runtime
- [oracle-skills-cli#122](https://github.com/Soul-Brews-Studio/oracle-skills-cli/issues/122) — original vision issue

## License

MIT
