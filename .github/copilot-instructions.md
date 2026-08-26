# Copilot instructions — SB Dev Works webpage

Personal developer landing page for the `laedos`/SB Dev Works portfolio: logo, intro, a
projects grid generated from data, and a contact section. Plain HTML/CSS/JS — no build step,
no package manager, no framework, no backend. Keep suggestions and edits consistent with that:
don't introduce a bundler, framework, or `package.json` for this project.

## Structure

```
index.html    page structure
styles.css    all styling (shared by the homepage and app detail pages)
projects.js   portfolio data (edit this to add/remove projects)
script.js     renders the project cards on the homepage
year.js       footer year, shared by every page
assets/       logo.png (SB Dev Works logo)
apps/         one detail page per project (apps/<slug>.html)
```

See `README.md` for the up-to-date version of this table and the "Adding a project" steps.

## Conventions

- No build step and no dependencies are the point of this repo — don't add one for an
  incidental change.
- `projects.js` is the single source of truth for the homepage project grid — never hand-edit
  the generated `#project-grid` DOM in `index.html`; add/edit an entry in `PROJECTS` and let
  `script.js` render it.
- Every entry in `PROJECTS` needs a matching `apps/<slug>.html` — the card links to
  `apps/${slug}.html` unconditionally, so adding one without the other leaves a dead link.
- `apps/*.html` pages are static copies of each other's structure (title, tagline, overview,
  features, "Built with") — when changing that structure, update the existing pages too so
  they don't drift into different layouts.
- `styles.css` is shared by every page (homepage + all `apps/*.html`) — a class added for one
  page is available everywhere; check other pages aren't affected before renaming/removing a
  class.
- All asset/link references must stay relative (`assets/...`, `../styles.css`, etc.), not
  root-absolute (`/...`) — the site is served from a GitHub Pages project-site subpath
  (`https://laedos.github.io/webpage/`), and absolute paths break there.
- No automated tests exist and none are planned (static content, nothing to unit-test) — see
  `QA.md` for the manual pre-publish checklist instead. Run through it before anything that
  touches `index.html`, `projects.js`, or `apps/*.html` goes live.

## Hosting status (current as of this handoff)

GitHub Pages deployment is wired up via `.github/workflows/deploy-pages.yml` (GitHub's
official `actions/configure-pages` → `actions/upload-pages-artifact` → `actions/deploy-pages`
flow, triggered on every push to `main`). `.nojekyll` is present at the repo root so the
artifact isn't run through Jekyll.

**Outstanding, human-only step:** repo Settings → Pages → Build and deployment → Source must
be set to **GitHub Actions** (one-time, no API/tool can do this) before the workflow will
successfully publish. Until that's flipped, the `deploy-pages` job fails at the deploy step —
that's expected, not a bug to fix in the workflow.

**Contact email:** `index.html`'s contact section links `mailto:sbdevworks@proton.me` — the
default contact address across every project under `C:\Dev`, not a placeholder.
