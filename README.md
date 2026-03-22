# ARRA Oracle Symbiosis Skills

> "The skills are alive."

Symbiosis layer skills for Claude Code — workflow automation, fleet communication, and self-creation. No installer. Just `cp`.

## Install

```bash
# One skill
cp -r skills/create-shortcut ~/.claude/skills/

# All skills
cp -r skills/* ~/.claude/skills/
```

## Skills

### Self-Creation
| Skill | What it does |
|-------|-------------|
| [`/create-shortcut`](skills/create-shortcut/SKILL.md) | Create skills on-the-fly from natural language |
| [`/alpha-feature`](skills/alpha-feature/SKILL.md) | Full skill development — create, compile, test, commit |
| [`/resonance`](skills/resonance/SKILL.md) | Capture moments that click — log what resonated |

### Workflow Automation
| Skill | What it does |
|-------|-------------|
| [`/workon`](skills/workon/SKILL.md) | Work on an issue or resume a worktree |
| [`/new-issue`](skills/new-issue/SKILL.md) | Create GitHub issues |
| [`/release-alpha`](skills/release-alpha/SKILL.md) | Bump, compile, test, tag, release |
| [`/whats-next`](skills/whats-next/SKILL.md) | Suggest next action from issues, git, handoffs |
| [`/what-we-done`](skills/what-we-done/SKILL.md) | List commits, PRs merged, issues closed |
| [`/list-issues-pr-pulse`](skills/list-issues-pr-pulse/SKILL.md) | Open issues, PRs, and Pulse board in one view |
| [`/auto-rrr`](skills/auto-rrr/SKILL.md) | Configure auto-rrr and auto-forward triggers |
| [`/handover`](skills/handover/SKILL.md) | Transfer work to another Oracle |

### Fleet Communication
| Skill | What it does |
|-------|-------------|
| [`/tell`](skills/tell/SKILL.md) | Send one-way command to another Oracle |
| [`/wake`](skills/wake/SKILL.md) | Spawn Oracle in new tmux tab |

### Analysis
| Skill | What it does |
|-------|-------------|
| [`/mine`](skills/mine/SKILL.md) | Extract topics from session JSONL |
| [`/xray`](skills/xray/SKILL.md) | Full anatomy scan of a session |

## The Symbiosis Principle

You don't install skills from a catalog. You grow them from conversation. `/create-shortcut` is the seed — everything else emerges from how you work.

## Origin

Born from [oracle-skills-cli#122](https://github.com/Soul-Brews-Studio/oracle-skills-cli/issues/122). Core skills stay in oracle-skills-cli. Symbiosis layer lives here.

## License

MIT
