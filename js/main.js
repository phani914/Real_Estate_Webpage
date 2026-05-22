const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const themeText = document.querySelector(".theme-text");
const filterForm = document.querySelector("#property-filters");
const propertyCards = Array.from(document.querySelectorAll(".property-card"));
const emptyState = document.querySelector("#empty-state");
const quickLocation = document.querySelector("#quick-location");
const quickBudget = document.querySelector("#quick-budget");
const quickSearch = document.querySelector("#quick-search");
const agentForms = document.querySelectorAll(".agent-form");
const footerForms = document.querySelectorAll(".footer-form");

function setMenuState(isOpen) {
  if (!navToggle || !navLinks) return;

  navLinks.classList.toggle("open", isOpen);
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  document.body.classList.toggle("menu-open", isOpen);
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuState(false));
  });
}

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.documentElement.dataset.theme = theme;

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  }

  if (themeText) {
    themeText.textContent = isDark ? "Light" : "Dark";
  }
}

function getSavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

applyTheme(getSavedTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

function applyFilters() {
  if (!filterForm) return;

  const data = new FormData(filterForm);
  const location = String(data.get("location") || "").trim().toLowerCase();
  const type = String(data.get("type") || "");
  const maxPrice = Number(data.get("price") || 0);
  const minBeds = Number(data.get("beds") || 0);
  let visibleCount = 0;

  propertyCards.forEach((card) => {
    const matchesLocation = !location || card.dataset.location.includes(location);
    const matchesType = !type || card.dataset.type === type;
    const matchesPrice = !maxPrice || Number(card.dataset.price) <= maxPrice;
    const matchesBeds = !minBeds || Number(card.dataset.beds) >= minBeds;
    const isVisible = matchesLocation && matchesType && matchesPrice && matchesBeds;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  if (emptyState) {
    emptyState.classList.toggle("visible", visibleCount === 0);
  }
}

if (filterForm) {
  filterForm.addEventListener("input", applyFilters);
  filterForm.addEventListener("reset", () => {
    window.setTimeout(applyFilters, 0);
  });
}

if (quickSearch && filterForm) {
  quickSearch.addEventListener("click", () => {
    filterForm.elements.location.value = quickLocation.value;
    filterForm.elements.price.value = quickBudget.value;
    applyFilters();
    document.querySelector("#listings").scrollIntoView({ behavior: "smooth" });
  });
}

agentForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");

    if (status) {
      status.textContent = "Thanks. An agent will contact you shortly.";
    }

    form.reset();
  });
});

footerForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".footer-status");

    if (status) {
      status.textContent = "You are on the list.";
    }

    form.reset();
  });
});
