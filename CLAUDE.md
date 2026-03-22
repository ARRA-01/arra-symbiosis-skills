# ARRA Symbiosis Skills

Skill marketplace for Claude Code. Each skill is a `SKILL.md` file in `skills/<name>/`.

## Structure

```
skills/
  <skill-name>/
    SKILL.md        ← the entire skill, no other files needed
```

## Rules

- One SKILL.md per skill, nothing else
- No build step, no dependencies, no installer
- Skills are named in natural language, not programmer convention
- To add a skill: create `skills/<name>/SKILL.md` with frontmatter (name, description)
