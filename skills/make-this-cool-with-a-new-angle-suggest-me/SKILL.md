---
name: make-this-cool-with-a-new-angle-suggest-me
description: User shortcut. Look at current work and suggest fresh angles, creative twists, unexpected improvements.
---

# /make-this-cool-with-a-new-angle-suggest-me

Look at what the user is currently working on — the code, the repo, the feature, the idea — and suggest creative angles they haven't considered.

## Steps

1. **Understand context** — Read the current file, recent git changes, or whatever the user just described
2. **Identify the core** — What is this thing trying to BE?
3. **Find the gap** — What's missing, boring, or conventional about it?
4. **Suggest 3-5 fresh angles** — Each one should be:
   - Unexpected but feasible
   - Concrete enough to act on (not vague "make it better")
   - Include a one-liner on HOW to implement it

## Angle types to consider

- **Flip it** — What if the opposite assumption were true?
- **Cross-pollinate** — What would this look like if borrowed from another domain? (gaming, music, biology, architecture)
- **Remove** — What if you deleted the most "obvious" part?
- **10x** — What if this needed to handle 10x the scale/users/data?
- **Make it weird** — What's the most unconventional version that still works?
- **User surprise** — What would make a user say "wait, it can do THAT?"
- **Time shift** — What if this was built for 2030? What would be different?

## Output format

```
🔍 Looking at: <what you analyzed>
💡 Core: <what this thing is trying to be>

### Fresh Angles

1. 🔄 **[Angle name]** — [one-line description]
   → How: [concrete implementation step]

2. 🌀 **[Angle name]** — [one-line description]
   → How: [concrete implementation step]

3. ⚡ **[Angle name]** — [one-line description]
   → How: [concrete implementation step]
```

## Rules

- Never suggest "add tests" or "add docs" — that's not creative
- Every suggestion must be something the user HASN'T already done
- Be specific — "add AI" is bad, "use embeddings to cluster user shortcuts by semantic similarity and auto-merge overlapping ones" is good
- It's OK to be bold — the user can always say no
