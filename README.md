# ARRA Symbiosis Skills

> "The skills are alive."

The skill that creates skills. One `SKILL.md` — the seed that grows your entire skill ecosystem.

## Install

```bash
cp -r skills/create-shortcut ~/.claude/skills/
```

That's it. Now you can create any skill by talking naturally:

```
/create-shortcut I want a skill that checks all my PRs
/create-shortcut debug this thing find root cause
/create-shortcut read this URL and summarize it
```

## What happens

1. You speak naturally → skill is created
2. Skill is a `SKILL.md` file in `~/.claude/skills/<name>/`
3. Hot-reloaded instantly — no restart
4. Use it forever with `/<name>`

## The Symbiosis Principle

You don't install skills from a catalog. You grow them from conversation. Over time, your skill set becomes uniquely yours — shaped by how YOU work.

```
Day 1:  /create-shortcut makes your first skill
Day 7:  You have 10 skills born from real needs
Day 30: Your Oracle works differently than anyone else's
```

## Origin

Born from [oracle-skills-cli#122](https://github.com/Soul-Brews-Studio/oracle-skills-cli/issues/122) — the vision of skills that self-create.

## License

MIT
