import { describe, test, expect } from 'bun:test';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const SKILLS_DIR = join(process.cwd(), 'src', 'skills');

describe('symbiosis skills', () => {
  test('all skills have SKILL.md', async () => {
    const dirs = await readdir(SKILLS_DIR, { withFileTypes: true });
    const skills = dirs.filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== '_template');

    for (const skill of skills) {
      const skillPath = join(SKILLS_DIR, skill.name, 'SKILL.md');
      expect(existsSync(skillPath)).toBe(true);
    }
  });

  test('all skills have valid frontmatter', async () => {
    const dirs = await readdir(SKILLS_DIR, { withFileTypes: true });
    const skills = dirs.filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== '_template');

    for (const skill of skills) {
      const content = await readFile(join(SKILLS_DIR, skill.name, 'SKILL.md'), 'utf-8');
      const parts = content.split(/^---\s*$/m);
      expect(parts.length).toBeGreaterThanOrEqual(3);

      const frontmatter = parts[1];
      expect(frontmatter).toContain('name:');
      expect(frontmatter).toContain('description:');
    }
  });

  test('skill count is 25', async () => {
    const dirs = await readdir(SKILLS_DIR, { withFileTypes: true });
    const skills = dirs.filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== '_template');
    expect(skills.length).toBe(25);
  });
});

describe('profiles', () => {
  test('resolveProfile returns skills for known profiles', async () => {
    const { resolveProfile } = await import('../src/profiles');
    const all = ['rrr', 'workon', 'create-shortcut', 'whats-next', 'mine'];

    const minimal = resolveProfile('minimal', all);
    expect(minimal).not.toBeNull();
    expect(minimal!.length).toBeGreaterThan(0);

    const full = resolveProfile('full', all);
    expect(full).toBeNull(); // full = no filter
  });

  test('resolveProfile returns null for unknown profile', async () => {
    const { resolveProfile } = await import('../src/profiles');
    expect(resolveProfile('nonexistent', [])).toBeNull();
  });

  test('resolveProfileWithFeatures adds feature skills', async () => {
    const { resolveProfileWithFeatures } = await import('../src/profiles');
    const all = ['rrr', 'workon', 'create-shortcut', 'mine', 'xray'];

    const result = resolveProfileWithFeatures('minimal', ['analysis'], all);
    expect(result).toContain('mine');
    expect(result).toContain('xray');
  });
});
