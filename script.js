import linksData from "./data.js";

function renderLinktree() {
  const linksContainer = document.getElementById("links");
  const socialDock = document.getElementById("social");

  // Set the dynamic year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  linksData.forEach((item, index) => {
    const linkEl = document.createElement("a");
    linkEl.href = item.link;
    linkEl.target = "_blank";
    linkEl.rel = "noopener noreferrer";

    // Add a staggering delay for a smooth entry animation
    linkEl.style.animationDelay = `${index * 0.1}s`;
    linkEl.style.animation = `slideUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`;
    linkEl.style.opacity = "0";

    // Route to the circular Social Dock
    if (item.category === "social") {
      linkEl.className = "social-btn";
      linkEl.setAttribute("aria-label", item.text);
      linkEl.innerHTML = item.icon;
      socialDock.appendChild(linkEl);
    }
    // Route to the Main Vertical Links
    else {
      linkEl.className = "link-card";
      if (item.category === "important") {
        linkEl.classList.add("important");
      }

      // Render icon only if it exists
      const iconHtml = item.icon ? item.icon : "";
      linkEl.innerHTML = `${iconHtml} <span>${item.text}</span>`;

      linksContainer.appendChild(linkEl);
    }
  });
}

// Initialize when DOM is ready
window.addEventListener("DOMContentLoaded", renderLinktree);
