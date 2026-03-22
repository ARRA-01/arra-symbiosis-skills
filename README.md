# ARRA Symbiosis Skills

> "The skills are alive."

A marketplace of Claude Code skills you can copy and use. No installer. No CLI. Just `SKILL.md` files.

## Install a skill

```bash
# Pick a skill, copy it
cp -r skills/find-root-cause ~/.claude/skills/

# That's it. It's live.
```

## Skills

| Skill | What it does |
|-------|-------------|
| [`/find-root-cause`](skills/find-root-cause/SKILL.md) | Trace bugs to origin, not just patch symptoms |
| [`/read-this`](skills/read-this/SKILL.md) | Fetch + summarize any URL or file path |
| [`/detect-this-what-changes`](skills/detect-this-what-changes/SKILL.md) | Detect project stack + show what changed |
| [`/make-this-cool-with-a-new-angle-suggest-me`](skills/make-this-cool-with-a-new-angle-suggest-me/SKILL.md) | Creative brainstorm on current work |
| [`/oh-i-have-new-idea`](skills/oh-i-have-new-idea/SKILL.md) | Capture ideas fast before they fade |
| [`/go-beyond-with-this-from-our-discussion-make-it-new-more-new-perspective`](skills/go-beyond-with-this-from-our-discussion-make-it-new-more-new-perspective/SKILL.md) | Push discussions further — new perspectives, deeper layers |

## Install all

```bash
cp -r skills/* ~/.claude/skills/
```

## How skills work

A skill is just a `SKILL.md` file in `~/.claude/skills/<name>/`. Claude Code reads it automatically. No restart needed.

```
~/.claude/skills/
  find-root-cause/
    SKILL.md          ← this is the entire skill
  read-this/
    SKILL.md
  ...
```

## Naming Philosophy

> `/oh-i-have-new-idea` > `/capture-idea`

Skills are named how you'd say them to a friend. The name IS the trigger — make it memorable, not minimal.

## Create your own

Type naturally in Claude Code:

```
/create-shortcut I want a skill that checks all my PRs
```

Done. Skill created. Share it here by adding your `SKILL.md` to `skills/`.

## Origin

These skills were born in one session from natural conversation. See [oracle-skills-cli#122](https://github.com/Soul-Brews-Studio/oracle-skills-cli/issues/122) for the vision.

## License

MIT
