/**
 * Central place for your personal details — edit these once and they
 * propagate to the header, footer, home page, and RSS feed.
 */
export const SITE_TITLE = "Luca D'Angelo";

export const SITE_DESCRIPTION =
  "Personal website of Luca D'Angelo: CV, publications, and a small blog.";

export const GITHUB_URL = 'https://github.com/ldgaetano';
export const EMAIL = 'you@example.com';

/**
 * Prefix an internal path with the configured `base`.
 * Keeps every internal link correct whether the site lives at
 * https://user.github.io/ or https://user.github.io/repo-name/.
 */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  const joined = base.endsWith('/') ? base + path : `${base}/${path}`;
  return joined.replace(/\/+$/, '') || '/';
}
