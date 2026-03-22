---
name: find-root-cause
description: User shortcut. Investigate the root cause of a bug or error — trace symptoms to origin, not just patch.
---

# /find-root-cause

When the user reports a bug, error, or unexpected behavior:

1. **Gather symptoms** — Read error messages, logs, stack traces. Ask the user what they expected vs what happened.
2. **Reproduce** — Find the minimal reproduction path. Run the failing command/test if possible.
3. **Trace backwards** — From the symptom, trace the call chain to the origin:
   - Read the failing code
   - Check git blame for recent changes
   - Search for related patterns across the codebase
4. **Identify the root cause** — Not the surface error, but WHY it happens. Present:
   - **Symptom**: What the user sees
   - **Proximate cause**: The line/function that fails
   - **Root cause**: The underlying reason (wrong assumption, missing check, race condition, etc.)
   - **Evidence**: Git commits, code paths, or logs that confirm the diagnosis
5. **Propose fix** — Suggest the minimal change that addresses the ROOT cause, not a workaround.

## Rules

- Never patch symptoms — always dig to the origin
- Error 1x → investigate. Error 2x → warning. Error 3x → STOP and change strategy.
- Check git log for recent changes to the affected area first
- If multiple possible causes exist, rank by likelihood with evidence
- Ask before applying fixes — present the diagnosis first
