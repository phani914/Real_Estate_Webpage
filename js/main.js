const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const themeToggle = document.querySelector(".theme-toggle");
const themeText = document.querySelector(".theme-text");
const filterForm = document.querySelector("#property-filters");
const propertyGrid = document.querySelector("#property-grid");
const propertyCards = Array.from(document.querySelectorAll(".property-card"));
const emptyState = document.querySelector("#empty-state");
const filterSummary = document.querySelector("#filter-summary");
const quickLocation = document.querySelector("#quick-location");
const quickBudget = document.querySelector("#quick-budget");
const quickSearch = document.querySelector("#quick-search");
const agentForms = document.querySelectorAll(".agent-form");
const footerForms = document.querySelectorAll(".footer-form");
const propertyDetails = {
  oak: {
    title: "Oak Meadow Residence",
    type: "House",
    location: "Austin, TX",
    price: "$785,000",
    status: "Move-in ready",
    beds: "3",
    baths: "2.5",
    area: "2,180",
    built: "2019",
    overview: "A warm, move-in-ready residence with open-plan living, an upgraded kitchen, shaded patio, attached garage, and a quiet school-zone address close to parks and everyday essentials.",
    neighborhood: "Quiet school-zone location",
    commute: "18 minutes to downtown",
    availability: "Private tours this week",
    amenities: ["Upgraded kitchen", "Shaded patio", "Attached garage", "Open living plan", "Nearby parks", "Low-maintenance yard"],
    images: {
      hero: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=82",
      living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=82",
      kitchen: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=82"
    },
    imageAlt: {
      hero: "Modern white house with front lawn",
      living: "Open-plan living room with neutral furniture",
      kitchen: "Bright kitchen with island seating"
    }
  },
  union: {
    title: "Union Station Loft",
    type: "Condo",
    location: "Denver, CO",
    price: "$540,000",
    status: "Downtown loft",
    beds: "2",
    baths: "2",
    area: "1,320",
    built: "2021",
    overview: "A bright downtown loft with floor-to-ceiling windows, secure parking, private storage, and rooftop access near restaurants, transit, and Union Station.",
    neighborhood: "Walkable downtown address",
    commute: "4 minutes to Union Station",
    availability: "Evening tours available",
    amenities: ["Rooftop access", "Secure parking", "Floor-to-ceiling windows", "Private storage", "Transit nearby", "Elevator building"],
    images: {
      hero: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=82",
      living: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=82",
      kitchen: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=82"
    },
    imageAlt: {
      hero: "Contemporary home exterior with warm lights",
      living: "Modern loft interior with large windows",
      kitchen: "Bright condo bedroom with city-inspired styling"
    }
  },
  biscayne: {
    title: "Biscayne Pool Villa",
    type: "Villa",
    location: "Miami, FL",
    price: "$1,095,000",
    status: "Pool villa",
    beds: "4",
    baths: "3.5",
    area: "3,050",
    built: "2020",
    overview: "A private Miami villa with a pool, guest suite, covered outdoor dining, smart-home controls, and quick access to the bay.",
    neighborhood: "Near Biscayne Bay",
    commute: "12 minutes to waterfront dining",
    availability: "Weekend tours open",
    amenities: ["Private pool", "Guest suite", "Outdoor dining", "Smart-home controls", "Bay access", "Covered terrace"],
    images: {
      hero: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=82",
      living: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=82",
      kitchen: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=82"
    },
    imageAlt: {
      hero: "Luxury villa with pool at dusk",
      living: "Luxury home pool area with outdoor seating",
      kitchen: "Elegant kitchen and dining area in a luxury villa"
    }
  },
  cedar: {
    title: "Cedar Ridge Home",
    type: "House",
    location: "Seattle, WA",
    price: "$895,000",
    status: "Renovated craftsman",
    beds: "4",
    baths: "3",
    area: "2,640",
    built: "2017",
    overview: "A renovated craftsman with a media room, dedicated office, mature landscaping, and a covered porch that works beautifully through Seattle seasons.",
    neighborhood: "Leafy residential ridge",
    commute: "22 minutes to downtown",
    availability: "Tours by appointment",
    amenities: ["Media room", "Dedicated office", "Covered porch", "Mature landscaping", "Renovated interiors", "Fireplace lounge"],
    images: {
      hero: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=82",
      living: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=82",
      kitchen: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=82"
    },
    imageAlt: {
      hero: "Craftsman home with front porch and landscaped garden",
      living: "Warm craftsman-style living room with fireplace",
      kitchen: "Bright kitchen with island seating"
    }
  },
  sonoran: {
    title: "Sonoran View Villa",
    type: "Villa",
    location: "Phoenix, AZ",
    price: "$1,275,000",
    status: "Mountain-view retreat",
    beds: "5",
    baths: "4",
    area: "3,480",
    built: "2022",
    overview: "A resort-style desert villa with five bedrooms, a chef kitchen, three-car garage, sunset terrace, pool, and mountain views.",
    neighborhood: "Desert view enclave",
    commute: "16 minutes to Scottsdale",
    availability: "Limited tour windows",
    amenities: ["Resort-style pool", "Chef kitchen", "Three-car garage", "Sunset terrace", "Mountain views", "Guest bedroom wing"],
    images: {
      hero: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=82",
      living: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=82",
      kitchen: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=82"
    },
    imageAlt: {
      hero: "Desert villa with pool and mountain view",
      living: "Elegant kitchen and dining area in a luxury villa",
      kitchen: "Bright condo bedroom with city-inspired styling"
    }
  },
  river: {
    title: "River North Suite",
    type: "Condo",
    location: "Chicago, IL",
    price: "$625,000",
    status: "Concierge building",
    beds: "2",
    baths: "2",
    area: "1,460",
    built: "2018",
    overview: "A polished River North condo with balcony, fitness access, heated parking, concierge service, and quick access to dining and transit.",
    neighborhood: "River North dining district",
    commute: "8 minutes to the Loop",
    availability: "Same-week tours",
    amenities: ["Concierge service", "Private balcony", "Fitness access", "Heated parking", "Dining nearby", "Transit access"],
    images: {
      hero: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=82",
      living: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=82",
      kitchen: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=82"
    },
    imageAlt: {
      hero: "Bright modern apartment living area with city windows",
      living: "Bright condo bedroom with city-inspired styling",
      kitchen: "Modern loft interior with large windows"
    }
  }
};

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
  const query = String(data.get("query") || "").trim().toLowerCase();
  const queryTerms = query.split(/\s+/).filter(Boolean);
  const type = String(data.get("type") || "");
  const minPrice = Number(data.get("min-price") || 0);
  const maxPrice = Number(data.get("max-price") || 0);
  const minBeds = Number(data.get("beds") || 0);
  const minBaths = Number(data.get("baths") || 0);
  const sort = String(data.get("sort") || "featured");
  let visibleCount = 0;

  const sortedCards = [...propertyCards].sort((firstCard, secondCard) => {
    if (sort === "price-low") {
      return Number(firstCard.dataset.price) - Number(secondCard.dataset.price);
    }

    if (sort === "price-high") {
      return Number(secondCard.dataset.price) - Number(firstCard.dataset.price);
    }

    if (sort === "beds") {
      return Number(secondCard.dataset.beds) - Number(firstCard.dataset.beds);
    }

    if (sort === "area") {
      return Number(secondCard.dataset.area) - Number(firstCard.dataset.area);
    }

    return propertyCards.indexOf(firstCard) - propertyCards.indexOf(secondCard);
  });

  sortedCards.forEach((card) => {
    const price = Number(card.dataset.price);
    const beds = Number(card.dataset.beds);
    const baths = Number(card.dataset.baths);
    const searchText = String(card.dataset.search || "");
    const matchesQuery = queryTerms.every((term) => searchText.includes(term));
    const matchesType = !type || card.dataset.type === type;
    const matchesMinPrice = !minPrice || price >= minPrice;
    const matchesMaxPrice = !maxPrice || price <= maxPrice;
    const matchesBeds = !minBeds || beds >= minBeds;
    const matchesBaths = !minBaths || baths >= minBaths;
    const isVisible = matchesQuery && matchesType && matchesMinPrice && matchesMaxPrice && matchesBeds && matchesBaths;

    card.hidden = !isVisible;
    propertyGrid.append(card);
    if (isVisible) visibleCount += 1;
  });

  if (emptyState) {
    emptyState.classList.toggle("visible", visibleCount === 0);
  }

  if (filterSummary) {
    const totalCount = propertyCards.length;
    const resultLabel = visibleCount === 1 ? "home" : "homes";
    filterSummary.textContent = visibleCount === totalCount
      ? `Showing all ${totalCount} featured homes.`
      : `Showing ${visibleCount} of ${totalCount} ${resultLabel}.`;
  }
}

if (filterForm) {
  filterForm.addEventListener("input", applyFilters);
  filterForm.addEventListener("change", applyFilters);
  filterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilters();
  });
  filterForm.addEventListener("reset", () => {
    window.setTimeout(applyFilters, 0);
  });
  applyFilters();
}

if (quickSearch && filterForm) {
  quickSearch.addEventListener("click", () => {
    filterForm.elements.query.value = quickLocation.value;
    filterForm.elements["max-price"].value = quickBudget.value;
    applyFilters();
    document.querySelector("#listings").scrollIntoView({ behavior: "smooth" });
  });
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderPropertyDetailPage() {
  const detailPage = document.querySelector("[data-detail-page]");
  if (!detailPage) return;

  const params = new URLSearchParams(window.location.search);
  const detailKey = params.get("property") || "oak";
  const detail = propertyDetails[detailKey] || propertyDetails.oak;

  document.title = `${detail.title} | PrimeNest Realty`;
  detailPage.style.setProperty("--detail-hero-image", `url("${detail.images.hero}")`);

  setText("[data-detail-title]", detail.title);
  setText("[data-detail-type]", detail.type);
  setText("[data-detail-location]", detail.location);
  setText("[data-detail-price]", detail.price);
  setText("[data-detail-status]", detail.status);
  setText("[data-detail-beds]", detail.beds);
  setText("[data-detail-baths]", detail.baths);
  setText("[data-detail-area]", detail.area);
  setText("[data-detail-built]", detail.built);
  setText("[data-detail-overview]", detail.overview);
  setText("[data-detail-neighborhood]", detail.neighborhood);
  setText("[data-detail-commute]", detail.commute);
  setText("[data-detail-availability]", detail.availability);

  document.querySelectorAll("[data-detail-image]").forEach((image) => {
    const imageKey = image.dataset.detailImage;
    if (!detail.images[imageKey]) return;

    image.src = detail.images[imageKey];
    image.alt = detail.imageAlt[imageKey] || detail.title;
  });

  const amenities = document.querySelector("[data-detail-amenities]");
  if (amenities) {
    amenities.innerHTML = "";
    detail.amenities.forEach((amenity) => {
      const item = document.createElement("li");
      item.textContent = amenity;
      amenities.append(item);
    });
  }

  const propertySelect = document.querySelector("[data-detail-property-select]");
  if (propertySelect) {
    propertySelect.value = detail.title;
  }
}

renderPropertyDetailPage();

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
