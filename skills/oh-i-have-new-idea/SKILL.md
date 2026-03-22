---
name: oh-i-have-new-idea
description: User shortcut. Capture a new idea fast — structure it, find where it fits, create issue or note.
---

# /oh-i-have-new-idea

The user just had a spark. Capture it before it fades.

## Steps

1. **Listen** — The user will describe their idea in free text (could be messy, excited, half-formed). That's fine.
2. **Structure it** — Restate the idea in 2-3 clear sentences. Ask "Is this what you mean?" only if truly ambiguous.
3. **Find the home** — Where does this idea belong?
   - Existing repo? → Which one?
   - New repo needed? → Suggest name
   - Existing issue to extend? → Link it
   - Totally new territory? → Say so
4. **Capture it** — Based on user preference:
   - **Issue** → Create GitHub issue with `/new-issue` (default)
   - **Oracle knowledge** → Store via oracle_learn
   - **Quick note** → Write to `ψ/inbox/` as markdown
5. **Connect it** — Link to related ideas, issues, or repos if obvious connections exist

## Output format

```
💡 Idea: <structured version>
🏠 Home: <repo or domain>
🔗 Related: <connected issues/repos if any>

→ Created: <issue URL or file path>
```

## Rules

- Speed over perfection — capture first, refine later
- Never say "that's not feasible" — just capture it
- If the idea spans multiple repos, pick the most relevant one
- Tag ideas with labels if creating issues: `idea`, `exploration`
- The user's excitement IS the signal — match their energy
