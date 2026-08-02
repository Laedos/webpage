document.getElementById("year").textContent = new Date().getFullYear();

const grid = document.getElementById("project-grid");

for (const project of PROJECTS) {
  const card = document.createElement(project.url ? "a" : "div");
  card.className = "project-card";
  if (project.url) {
    card.href = project.url;
    card.target = "_blank";
    card.rel = "noopener";
  }

  const title = document.createElement("h3");
  title.textContent = project.name;

  const blurb = document.createElement("p");
  blurb.textContent = project.blurb;

  const tags = document.createElement("div");
  tags.className = "tags";
  for (const tag of project.tags) {
    const tagEl = document.createElement("span");
    tagEl.className = "tag";
    tagEl.textContent = tag;
    tags.appendChild(tagEl);
  }

  card.append(title, blurb, tags);
  grid.appendChild(card);
}
