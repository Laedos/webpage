# SB Dev Works — Pre-publish QA

Manual checklist to run before pushing to the branch GitHub Pages (or any static host) serves
from. No automated tests exist for this site — see [CLAUDE.md](CLAUDE.md) for why.

**Checked by / date:** _______________

## 1. Content is real, not placeholder

- [ ] `index.html`'s contact section still links `mailto:sbdevworks@proton.me` (the default
      contact address across every project under `C:\Dev`), not a placeholder.
- [ ] The GitHub link (`https://github.com/Laedos`) still points at the right profile.
- [ ] Every entry in `projects.js` reflects the current state of that project (name, blurb, tags) —
      cross-check against the project's own README.

## 2. Every project card works

For each entry in `PROJECTS` (`projects.js`):

- [ ] The card renders on the homepage grid with the right name, blurb, and tags.
- [ ] Clicking the card opens `apps/<slug>.html` (not a 404) — every `slug` in `projects.js` has a
      matching file in `apps/`.
- [ ] The detail page's title, tagline, overview, features, and "Built with" sections are accurate
      and not copy-pasted leftovers from whichever page it was cloned from.

## 3. Visual / cross-page checks

- [ ] Homepage and every `apps/*.html` page share the same header/footer/nav look (via
      `styles.css`) — no page has drifted to a different layout.
- [ ] Logo (`assets/logo.png`) loads in the header, hero, and browser tab favicon.
- [ ] Footer year (`year.js`) shows the current year on every page.
- [ ] Resize to a narrow (mobile-width) viewport — header nav, hero, project grid, and contact
      section all stay readable, no horizontal scroll.

## 4. Local preview before pushing

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

- [ ] Click through every nav link, every project card, and the "View GitHub profile" / GitHub
      profile links from the local server — no console errors in devtools.

## 5. After publishing

- [ ] Visit the live URL (GitHub Pages / custom domain) and repeat the project-card and
      cross-page checks above — a path or case-sensitivity issue that's invisible on a local
      `file://` or `localhost` preview can still break on the actual host.
