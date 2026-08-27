# webpage — Plan

## Status

Static site, no build step, working and green in CI. `projects.js` (the cross-project sync file)
is current — all 7 real projects under `C:\Dev` are listed (ArcheryHelper, Odomo, HavenEasy,
PollDrop, PairProgrammer, procrast.io, Tenanza), nothing missing or stale.

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
