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
- `apps/*.html` pages are static copies of each other's structure (status, title, tagline, tags,
  screenshots, overview, features, "Built with") — when changing that structure, update the existing pages too so they
  stay consistent, don't let them drift into different layouts.
- `styles.css` is shared by every page (homepage + all `apps/*.html`) — a class added for one page
  is available everywhere; check other pages aren't affected before renaming/removing a class.
- Keep the project entries in `projects.js` in sync with what actually exists under `C:\Dev` —
  this file is the one place across all these sibling repos that lists them together.

## Workflow

Small enough that the root `CLAUDE.md`'s multi-step ritual is overkill for most changes here (a
copy tweak, a new project card). For anything bigger — restructuring `apps/`, changing how the
grid renders — still read the existing pattern first and follow it rather than inventing a new one.

No automated tests exist and none are planned (static content, nothing to unit-test) — see
[QA.md](QA.md) for the manual pre-publish checklist instead.

## Content conventions (set 2026-09-18)

- **Voice:** first person singular. It's one developer's portfolio ("I build…"), never "we".
- **Status:** exactly one of three labels, identical on the card and the detail page: `Live`
  (someone can use it right now, with a link), `Built, not yet released`, or `In development`.
  Each has its own pill colour (`.status-pill.live` / `.built` / `.dev`).
- **Copy:** lead with what the product does for people; engineering detail belongs in "Built with"
  and the About section. Features are 6–8 short bullets, written for a user.
- **Tags:** at most four, the same list and order on the card and the detail page. Use the full
  names: `Jetpack Compose`, not `Compose`; `PostgreSQL`, not `Postgres`.
- **"Built with"** is a `<dl class="built-with">` with one row per part (Android app, Web app,
  Mobile app, Desktop app, Server or Sync server, Architecture), and names every part the
  features rely on. A sync feature means the sync server is listed.
- **Screenshots** live in `assets/shots/<slug>-N.png`. The first one is also the card thumbnail and
  the page's `og:image`. Every image has real alt text.
- **No GitHub link.** The repos are private, so the profile shows almost nothing.
