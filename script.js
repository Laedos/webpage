const grid = document.getElementById("project-grid");

for (const project of PROJECTS) {
  const card = document.createElement("a");
  card.className = "project-card";
  card.href = `apps/${project.slug}.html`;

  if (project.image) {
    const thumb = document.createElement("img");
    thumb.className = project.imageTall ? "project-thumb project-thumb-tall" : "project-thumb";
    thumb.src = project.image;
    thumb.alt = "";
    thumb.loading = "lazy";
    card.appendChild(thumb);
  }

  const body = document.createElement("div");
  body.className = "project-body";

  const status = document.createElement("span");
  status.className = `status-pill ${project.statusClass}`;
  status.textContent = project.status;

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

  body.append(status, title, blurb, tags);
  card.appendChild(body);
  grid.appendChild(card);
}
