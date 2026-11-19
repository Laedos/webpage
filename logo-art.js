// Draws LOGO_GLYPHS on the hero canvas: rows resolve from noise once, then cells under the pointer
// flare to the accent and settle. The <pre> beside the canvas is the no-script picture.
(() => {
  const art = document.querySelector("[data-logo-art]");
  if (!art || typeof LOGO_GLYPHS === "undefined") return;

  const canvas = art.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const { cols, rows, text } = LOGO_GLYPHS;
  const rowCount = rows.length;
  const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const RESOLVE_MS = 1500;
  const FLARE_MS = 700;
  const FLARE_RADIUS = 5;

  const css = getComputedStyle(document.documentElement);
  const ramp = Array.from({ length: 8 }, (_, i) => css.getPropertyValue(`--glyph-${i}`).trim());
  const accent = css.getPropertyValue("--color-accent").trim();
  const face = css.getPropertyValue("--font-display").trim();

  const glyphs = [];
  let n = 0;
  for (const row of rows) glyphs.push([...row].map((l) => (l === "0" ? "" : text[n++ % text.length])));

  const flare = new Float64Array(cols * rowCount);
  let cellW = 0, cellH = 0, start = 0, frame = 0;

  function size() {
    const dpr = window.devicePixelRatio || 1;
    const w = art.clientWidth;
    cellW = w / cols;
    cellH = cellW * 1.85;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(cellH * rowCount * dpr);
    canvas.style.height = `${cellH * rowCount}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  }

  function draw(now) {
    const elapsed = still ? Infinity : now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let busy = elapsed < RESOLVE_MS;
    for (let r = 0; r < rowCount; r++) {
      const resolved = elapsed >= (r / rowCount) * RESOLVE_MS;
      for (let c = 0; c < cols; c++) {
        const level = rows[r].charCodeAt(c) - 48;
        if (!resolved) {
          if (Math.random() < 0.06) paint(r, c, text[(Math.random() * text.length) | 0], ramp[(Math.random() * 3) | 0], 0.62);
          continue;
        }
        if (!level) continue;
        const f = flare[r * cols + c] ? 1 - (now - flare[r * cols + c]) / FLARE_MS : 0;
        if (f > 0) busy = true;
        paint(r, c, glyphs[r][c], f > 0.35 ? accent : ramp[level - 1], level <= 3 ? 0.62 : 1);
      }
    }
    frame = busy ? requestAnimationFrame(draw) : 0;
  }

  function paint(r, c, ch, colour, scale) {
    ctx.fillStyle = colour;
    ctx.font = `500 ${cellH * 0.8 * scale}px ${face}`;
    ctx.fillText(ch, (c + 0.5) * cellW, (r + 0.5) * cellH);
  }

  function wake() {
    if (!frame) frame = requestAnimationFrame(draw);
  }

  function onPointer(e) {
    const box = canvas.getBoundingClientRect();
    const pc = (e.clientX - box.left) / cellW;
    const pr = (e.clientY - box.top) / cellH;
    const now = performance.now();
    for (let r = Math.max(0, Math.floor(pr - FLARE_RADIUS)); r <= Math.min(rowCount - 1, pr + FLARE_RADIUS); r++) {
      for (let c = Math.max(0, Math.floor(pc - FLARE_RADIUS * 1.85)); c <= Math.min(cols - 1, pc + FLARE_RADIUS * 1.85); c++) {
        if (Math.hypot((c - pc) / 1.85, r - pr) <= FLARE_RADIUS) flare[r * cols + c] = now;
      }
    }
    wake();
  }

  document.fonts.ready.then(() => {
    size();
    start = performance.now();
    art.classList.add("is-drawn");
    wake();
    if (!still) canvas.addEventListener("pointermove", onPointer);
    new ResizeObserver(() => { size(); wake(); }).observe(art);
  });
})();
