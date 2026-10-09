# webpage — Plan

## Status

Static site, no build step, working and green in CI. `projects.js` (the cross-project sync file)
is current — all 9 real projects under `C:\Dev` are listed (ArcheryHelper, Odomo, HavenEasy,
PollDrop, Handoffly, procrast.io, Doorwell (then Tenanza), Arcade, Dzieńki), nothing missing or stale. Updated 2026-08-29: the
PairProgrammer and ShiftLoop entries were replaced by a single RotaHub entry now that both source
apps have been retired (merged into RotaHub, archived on GitHub) — `apps/pairprogrammer.html` and
`apps/shiftloop.html` removed, `apps/rotahub.html` added. Updated 2026-09-02: RotaHub renamed to
Handoffly (the app outgrew "rotation hub" — it's a general dev-team platform now) —
`apps/rotahub.html` renamed to `apps/handoffly.html`, `projects.js` entry updated to match.
Updated 2026-09-18: Arcade added (`apps/arcade.html`), the first page with a "Live" status pill
and a "Play now" link, since it really is deployed (play.sbdevworks.com).
Updated 2026-10-02: Dzieńki added (`apps/dzienki.html`, four phone screenshots of the demo preschool),
and the grid now orders cards by status (Live, then built, then in development) in `script.js`,
whatever the order in `projects.js`.
Updated 2026-10-05: Dzieńki renamed to Mój Dzionek (`apps/mojdzionek.html`, `assets/shots/mojdzionek-*.png`);
"In development" became "MVP ready" the same day.
Updated 2026-10-09: Mój Dzionek's group photo gallery (consent register, retention) added to its blurb
and detail page; no new screenshots yet.

## Next steps

1. ~~Replace the placeholder contact email~~ — done: `index.html` now links
   `mailto:sbdevworks@proton.me`, the "TODO: replace with real email" tag and its now-dead
   `.todo-tag` CSS class removed. This is the default contact address across every project under
   `C:\Dev` going forward, not just webpage.
2. No CI split applies — single static site, no backend/mobile stack to separate.

## Docs audit

No stale content — README.md/CLAUDE.md/QA.md/.github/copilot-instructions.md are consistent with
each other and with the actual site structure. No cross-project sync update needed from this
session's work (root `CLAUDE.md`'s webpage-sync trigger is new/retired projects or business-facing
description changes — tonight's sweep was CI infra, doc-accuracy, and a JDK version fix, nothing
launch-visible).
