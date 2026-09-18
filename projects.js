// Portfolio data, rendered into the homepage grid by script.js. To add a project:
//   1. add an object below
//   2. create apps/<slug>.html for its detail page, with the same structure as the others
//
// name:        project name
// slug:        detail page filename (apps/<slug>.html) and screenshot prefix (assets/shots/<slug>-N.png)
// status:      one of "Live", "Built, not yet released", "In development" (statusClass matches it)
// blurb:       one sentence, what it does for people
// tags:        the same tags as the detail page, in the same order
// image:       the card thumbnail, the project's first screenshot (or null)
const PROJECTS = [
  {
    name: "Arcade",
    slug: "arcade",
    status: "Live",
    statusClass: "live",
    blurb: "Small browser games: seven to play right now, and online party games in preview.",
    tags: ["TypeScript","Vite","Canvas","Cloudflare"],
    image: null,
  },
  {
    name: "Handoffly",
    slug: "handoffly",
    status: "Built, not yet released",
    statusClass: "built",
    blurb: "One platform for a dev team’s weekly rotations: on-call, pairing, code review, standups and more.",
    tags: ["Kotlin","Ktor","React","React Native"],
    image: null,
  },
  {
    name: "Tenanza",
    slug: "tenanza",
    status: "Built, not yet released",
    statusClass: "built",
    blurb: "Leases, rent, documents and maintenance, shared between landlords and tenants.",
    tags: ["Android","Next.js","Kotlin","Ktor"],
    image: null,
  },
  {
    name: "Odomo",
    slug: "odomo",
    status: "Built, not yet released",
    statusClass: "built",
    blurb: "Maintenance, costs and paperwork for every vehicle you own.",
    tags: ["Android","Kotlin","Jetpack Compose","Ktor"],
    image: null,
  },
  {
    name: "ArcheryHelper",
    slug: "archeryhelper",
    status: "In development",
    statusClass: "dev",
    blurb: "Gear, practice sessions, scores and tuning for archers, in one Android app.",
    tags: ["Android","Kotlin","Jetpack Compose","Ktor"],
    image: null,
  },
  {
    name: "HavenEasy",
    slug: "haveneasy",
    status: "In development",
    statusClass: "dev",
    blurb: "Tasks, shopping, bills and chores for a shared household, in sync for everyone at home.",
    tags: ["Android","Kotlin","Jetpack Compose","Ktor"],
    image: null,
  },
  {
    name: "PollDrop",
    slug: "polldrop",
    status: "Built, not yet released",
    statusClass: "built",
    blurb: "Create a poll in seconds and share the link. No account needed.",
    tags: ["React","TypeScript","Kotlin","Ktor"],
    image: null,
  },
  {
    name: "procrast.io",
    slug: "procrastio",
    status: "In development",
    statusClass: "dev",
    blurb: "A desktop focus timer that blocks distracting websites, with an Android companion.",
    tags: ["Kotlin","JavaFX","Android","Ktor"],
    image: null,
  },
];
