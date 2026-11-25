// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

/**
 * GitHub Pages configuration
 * ──────────────────────────
 * Case 1 — repo named `<username>.github.io` (site lives at the root):
 *   site: 'https://<username>.github.io', and leave `base` unset.
 *
 * Case 2 — repo with any other name, e.g. `website` (site lives in a subfolder):
 *   site: 'https://<username>.github.io',
 *   base: '/website/',
 *
 * `site` is also required for the RSS feed to produce valid links.
 */
export default defineConfig({
  site: 'https://ldgaetano.github.io',
  // base: '/website/',
  // Parses src/data/publications.yaml so it can be imported as data.
  vite: {
    plugins: [yaml()],
  },
});
