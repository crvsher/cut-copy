// Renders SITE and SNIPPETS (from snippets.js) into the page. No text of its own.
(function () {
  document.getElementById("heading").textContent = SITE.heading;
  document.getElementById("subhead").textContent = SITE.subhead;
  document.title = SITE.heading + " — " + SITE.subhead;

  const items = SNIPPETS.slice();
  if (SITE.shuffle) {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
  }

  // Billboards and paragraphs stand as blocks; everything else runs on inline,
  // one after the other, like the copy on a crowded label.
  const BLOCK = new Set(["billboard", "paragraph"]);
  const catalog = document.getElementById("catalog");
  let run = null;

  for (const s of items) {
    const el = document.createElement(BLOCK.has(s.kind) ? "div" : "span");
    el.className = "snip snip--" + s.kind;

    const text = document.createElement("span");
    text.className = "snip__text";
    if (BLOCK.has(s.kind)) {
      text.textContent = s.text;
    } else {
      // Inside a run, line breaks become a pilcrow so the run stays one block of text.
      s.text.split(/\n+/).forEach((part, i) => {
        if (i) {
          const mark = document.createElement("span");
          mark.className = "snip__break";
          mark.setAttribute("aria-hidden", "true");
          mark.textContent = "\u00b6";
          text.appendChild(mark);
        }
        text.appendChild(document.createTextNode(part));
      });
    }
    el.appendChild(text);

    if (s.client) {
      const who = document.createElement("span");
      who.className = "snip__client";
      who.textContent = s.client;
      el.appendChild(who);
    }

    if (BLOCK.has(s.kind)) {
      run = null;
      catalog.appendChild(el);
    } else {
      if (!run) {
        run = document.createElement("p");
        run.className = "run";
        catalog.appendChild(run);
      }
      run.appendChild(el);
    }
  }
})();
