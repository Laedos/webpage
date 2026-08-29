// Portfolio data. To add a project:
//   1. add an object below
//   2. create apps/<slug>.html for its detail page (copy an existing one as a template)
// Nothing else on the page needs to change.
//
// name:  project name
// slug:  used for the detail page filename (apps/<slug>.html)
// blurb: one-sentence description
// tags:  short list of tech/platform labels
const PROJECTS = [
  {
    name: "ArcheryHelper",
    slug: "archeryhelper",
    blurb: "Track bows, arrows, strings, sessions and maintenance for archery equipment.",
    tags: ["Android", "Kotlin", "Compose"],
  },
  {
    name: "Odomo",
    slug: "odomo",
    blurb: "Vehicle maintenance, expenses, and documents for your garage.",
    tags: ["Android", "Kotlin", "Compose"],
  },
  {
    name: "HavenEasy",
    slug: "haveneasy",
    blurb: "Simple home management for shared households.",
    tags: ["Android", "Kotlin", "Spring Boot"],
  },
  {
    name: "PollDrop",
    slug: "polldrop",
    blurb: "Create and share anonymous polls in seconds.",
    tags: ["Kotlin", "React", "TypeScript"],
  },
  {
    name: "RotaHub",
    slug: "rotahub",
    blurb: "Modular rotation platform for dev teams — on-call paging and pair-programming scheduling.",
    tags: ["Kotlin", "React", "React Native"],
  },
  {
    name: "procrast.io",
    slug: "procrastio",
    blurb: "Desktop focus timer and website blocker, with cross-device sync and an Android companion app.",
    tags: ["Kotlin", "JavaFX", "Android"],
  },
  {
    name: "Tenanza",
    slug: "tenanza",
    blurb: "Leases, rent, documents, and maintenance shared between landlords and tenants.",
    tags: ["Android", "Kotlin", "Next.js", "Spring Boot"],
  },
];
