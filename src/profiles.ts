/**
 * Symbiosis skill profiles — workflow automation, fleet, self-creation.
 * Core skills in oracle-skills-cli. Extended skills here.
 */

// --- Profiles (tiers) ---

export const profiles: Record<string, { include?: string[]; exclude?: string[] }> = {
  minimal: {
    include: ['rrr', 'workon', 'create-shortcut', 'whats-next'],
  },
  standard: {
    include: [
      'rrr', 'workon', 'create-shortcut', 'whats-next',
      'what-we-done', 'new-issue', 'list-issues-pr-pulse',
      'handover', 'tell', 'wake', 'worktree',
      'alpha-feature', 'resonance',
    ],
  },
  full: {},
};

// --- Features (add-on modules) ---

export const features: Record<string, string[]> = {
  fleet: ['tell', 'wake', 'handover', 'worktree'],
  analysis: ['mine', 'xray', 'dig', 'deep-research'],
  creation: ['create-shortcut', 'alpha-feature', 'release-alpha', 'birth'],
  soul: ['feel', 'resonance', 'speak'],
  automation: ['auto-rrr', 'whats-next', 'what-we-done', 'list-issues-pr-pulse'],
  media: ['watch', 'gemini'],
};

/**
 * Resolve a profile to a filtered list of skill names.
 */
export function resolveProfile(
  profileName: string,
  allSkillNames: string[]
): string[] | null {
  const profile = profiles[profileName];
  if (!profile) return null;

  if (profile.include && profile.include.length > 0) {
    return profile.include;
  }

  if (profile.exclude && profile.exclude.length > 0) {
    return allSkillNames.filter((s) => !profile.exclude!.includes(s));
  }

  return null;
}

/**
 * Resolve a profile + features into a combined skill list.
 */
export function resolveProfileWithFeatures(
  profileName: string,
  featureNames: string[],
  allSkillNames: string[]
): string[] {
  const base = resolveProfile(profileName, allSkillNames) || [...allSkillNames];

  const result = new Set(base);
  for (const feat of featureNames) {
    const skills = features[feat];
    if (skills) {
      for (const s of skills) result.add(s);
    }
  }

  return [...result];
}
