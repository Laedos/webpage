# SB Dev Works — webpage

Personal developer landing page for the `laedos`/SB Dev Works portfolio: logo, intro, a
projects grid generated from data, and a contact section. Plain HTML/CSS/JS — no build step,
no package manager, no framework, no backend.

Shared engineering conventions (principles, workflow, comments, communication style) live in the
root [`CLAUDE.md`](../CLAUDE.md) — apply them at a scale that fits a static, buildless site (most
of the backend/frontend/testing sections there don't apply here; see below for what does).

## Structure

See [README.md](README.md)'s "Structure" section — it's accurate and this file doesn't repeat it.
In short: `index.html` + `styles.css` + `script.js`/`year.js` render the homepage from the data in
`projects.js`; `apps/<slug>.html` is one static detail page per project, hand-written (not
generated).

## Conventions

- No build step and no dependencies are the point — don't introduce a bundler, framework, or
  package.json for this project. If it ever needs one, that's a bigger decision than an
  incidental refactor.
- `projects.js` is the single source of truth for the homepage project grid — never hand-edit the
  generated `#project-grid` DOM structure in `index.html`; add/edit an entry in `PROJECTS` instead
  and let `script.js` render it.
- Every entry in `PROJECTS` needs a matching `apps/<slug>.html` (the card links to
  `apps/${slug}.html` unconditionally) — adding one without the other leaves a dead link.
- `apps/*.html` pages are static copies of each other's structure (title, tagline, overview,
  features, "Built with") — when changing that structure, update the existing pages too so they
  stay consistent, don't let them drift into different layouts.
- `styles.css` is shared by every page (homepage + all `apps/*.html`) — a class added for one page
  is available everywhere; check other pages aren't affected before renaming/removing a class.
- Keep the six project entries in `projects.js` in sync with what actually exists under `C:\Dev` —
  this file is the one place across all these sibling repos that lists them together.

## Workflow

Small enough that the root `CLAUDE.md`'s multi-step ritual is overkill for most changes here (a
copy tweak, a new project card). For anything bigger — restructuring `apps/`, changing how the
grid renders — still read the existing pattern first and follow it rather than inventing a new one.

No automated tests exist and none are planned (static content, nothing to unit-test) — see
[QA.md](QA.md) for the manual pre-publish checklist instead.
