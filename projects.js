// Portfolio data. To add a project:
//   1. add an object below
//   2. create apps/<slug>.html for its detail page (copy an existing one as a template)
// Nothing else on the page needs to change.
//
// name:  project name
// slug:  used for the detail page filename (apps/<slug>.html)
// blurb: one-sentence description
// tags:  short list of tech/platform labels
// url:   link to the repo or app (leave as null if there isn't a public one yet)
const PROJECTS = [
  {
    name: "ArcheryHelper",
    slug: "archeryhelper",
    blurb: "Track bows, arrows, strings, sessions and maintenance for archery equipment.",
    tags: ["Android", "Kotlin", "Compose"],
    url: null,
  },
  {
    name: "My Garage",
    slug: "my-garage",
    blurb: "Vehicle maintenance, expenses, and documents for your garage.",
    tags: ["Android", "Kotlin", "Compose"],
    url: null,
  },
  {
    name: "HomelyEasy",
    slug: "homelyeasy",
    blurb: "Simple home management for shared households.",
    tags: ["Android", "Kotlin", "Spring Boot"],
    url: null,
  },
  {
    name: "EasyPoll",
    slug: "easypoll",
    blurb: "Create and share anonymous polls in seconds.",
    tags: ["Kotlin", "React", "TypeScript"],
    url: null,
  },
  {
    name: "PairProgrammer",
    slug: "pairprogrammer",
    blurb: "Rotation scheduling for pair-programming teams.",
    tags: ["Kotlin", "React", "React Native"],
    url: null,
  },
  {
    name: "procrast.io",
    slug: "procrastio",
    blurb: "An early-stage desktop focus/productivity app.",
    tags: ["Kotlin", "JavaFX"],
    url: null,
  },
  {
    name: "RentEasy",
    slug: "renteasy",
    blurb: "Leases, rent, documents, and maintenance shared between landlords and tenants.",
    tags: ["Android", "Kotlin", "Next.js", "Spring Boot"],
    url: null,
  },
];
