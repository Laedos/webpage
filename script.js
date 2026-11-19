// Live apps get a full row with a screenshot and a link to their page, built ones a one-line teaser,
// and the rest (MVP ready, in development) stay off the homepage until they are released.
const liveList = document.getElementById("project-grid");
const upcomingList = document.getElementById("upcoming-list");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

for (const project of PROJECTS.filter((p) => p.statusClass === "live")) {
  const item = el("li", "project-row");
  const link = el("a", "project-link");
  link.href = `apps/${project.slug}.html`;

  const text = el("div", "project-text");
  const tags = el("p", "tags");
  for (const tag of project.tags) tags.appendChild(el("span", "tag", tag));
  text.append(el("h3", null, project.name), el("p", "project-blurb", project.blurb), tags, el("span", "project-more", "Read more"));
  link.appendChild(text);

  if (project.image) {
    const frame = el("div", project.imageTall ? "project-shot project-shot-tall" : "project-shot");
    const shot = el("img");
    shot.src = project.image;
    shot.alt = "";
    shot.loading = "lazy";
    frame.appendChild(shot);
    link.appendChild(frame);
  }

  item.appendChild(link);
  liveList.appendChild(item);
}

for (const project of PROJECTS.filter((p) => p.statusClass === "built")) {
  const item = el("li", "upcoming-row");
  item.append(el("h3", null, project.name), el("p", null, project.blurb));
  upcomingList.appendChild(item);
}

for (const button of document.querySelectorAll("[data-copy]")) {
  const status = button.parentElement.querySelector(".copy-status");
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
    } catch {
      status.textContent = "Copy failed. Select the address instead.";
      return;
    }
    button.classList.add("is-done");
    status.textContent = "Copied";
    setTimeout(() => {
      button.classList.remove("is-done");
      status.textContent = "";
    }, 1400);
  });
}
