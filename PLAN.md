# webpage — Plan

## Status

Static site, no build step, working and green in CI. `projects.js` (the cross-project sync file)
is current — all 7 real projects under `C:\Dev` are listed (ArcheryHelper, My Garage, HomelyEasy,
EasyPoll, PairProgrammer, procrast.io, RentEasy), nothing missing or stale.

## Next steps

1. **Replace the placeholder contact email** — `index.html` still has `mailto:todo@example.com`
   and a visible "TODO: replace with real email" tag (flagged in QA.md's own pre-publish
   checklist). Needs your real address; not something to guess.
2. No CI split applies — single static site, no backend/mobile stack to separate.

## Docs audit

No stale content — README.md/CLAUDE.md/QA.md/.github/copilot-instructions.md are consistent with
each other and with the actual site structure. No cross-project sync update needed from this
session's work (root `CLAUDE.md`'s webpage-sync trigger is new/retired projects or business-facing
description changes — tonight's sweep was CI infra, doc-accuracy, and a JDK version fix, nothing
launch-visible).
