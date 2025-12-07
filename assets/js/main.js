// assets/js/main.js
// Global orchestration + page-specific rendering.
// Assumes data.*.js may define:
//   SCHEDULE_ITEMS, VENUES, TRAVEL_OPTIONS, FAQ_ITEMS, PARTY_MEMBERS

(function () {
    "use strict";
  
    function getPageId() {
      if (!document.body) return null;
      return document.body.dataset.page || null;
    }
  
    // ---------- RENDERERS ----------
    // These read from data.*.js files if present and hydrate HTML containers.
  
    function renderSchedule() {
      const container = document.querySelector("[data-schedule-list]");
      if (!container) return;
      if (typeof SCHEDULE_ITEMS === "undefined") {
        console.warn("SCHEDULE_ITEMS is not defined; schedule page has no data.");
        return;
      }
  
      container.innerHTML = SCHEDULE_ITEMS.map((item) => {
        let venueHtml = "";
        if (typeof VENUES !== "undefined" && item.locationId && VENUES[item.locationId]) {
          const v = VENUES[item.locationId];
          const mapLink = v.mapUrl
            ? `<a href="${v.mapUrl}" target="_blank" rel="noopener noreferrer">View on map</a>`
            : "";
          venueHtml = `
            <div class="schedule-venue">
              <div>${v.name || ""}</div>
              <div>${v.address || ""}</div>
              ${mapLink}
            </div>
          `;
        }
  
        return `
          <article class="card schedule-card">
            <header>
              <h2>${item.title}</h2>
              <p class="schedule-meta">
                <span>${item.date || ""}</span>
                ${item.time ? `<span>at ${item.time}</span>` : ""}
              </p>
            </header>
            ${item.description ? `<p>${item.description}</p>` : ""}
            ${venueHtml}
          </article>
        `;
      }).join("");
    }
  
    function renderTravel() {
      const hotelContainer = document.querySelector("[data-travel-hotels]");
      const airportContainer = document.querySelector("[data-travel-airports]");
  
      if (hotelContainer && typeof TRAVEL_HOTELS !== "undefined") {
        hotelContainer.innerHTML = TRAVEL_HOTELS.map((hotel) => {
          const link = hotel.url
            ? `<a href="${hotel.url}" target="_blank" rel="noopener noreferrer">Website</a>`
            : "";
          const distance = hotel.distance
            ? `<span class="travel-distance">${hotel.distance}</span>`
            : "";
          const notes = hotel.notes ? `<p class="travel-notes">${hotel.notes}</p>` : "";
  
          return `
            <article class="card hotel-card">
              <h2>${hotel.name}</h2>
              <p>${hotel.address || ""}</p>
              <p>${hotel.phone || ""}</p>
              <p>${distance}</p>
              ${notes}
              ${link}
            </article>
          `;
        }).join("");
      }
  
      if (airportContainer && typeof TRAVEL_AIRPORTS !== "undefined") {
        airportContainer.innerHTML = TRAVEL_AIRPORTS.map((airport) => {
          const code = airport.code ? `<strong>${airport.code}</strong>` : "";
          const drive = airport.drive
            ? `<span class="travel-drive">${airport.drive} drive</span>`
            : "";
          return `
            <article class="card airport-card">
              <h2>${airport.name} ${code}</h2>
              <p>${airport.notes || ""}</p>
              <p>${drive}</p>
            </article>
          `;
        }).join("");
      }
    }
  
    function renderFaq() {
      const container = document.querySelector("[data-faq-list]");
      if (!container) return;
      if (typeof FAQ_ITEMS === "undefined") {
        console.warn("FAQ_ITEMS is not defined; faq page has no data.");
        return;
      }
  
      container.innerHTML = FAQ_ITEMS.map((item, idx) => {
        const qId = `faq-q-${idx}`;
        const aId = `faq-a-${idx}`;
        return `
          <article class="faq-item" data-faq-item>
            <button class="faq-question" aria-expanded="false" aria-controls="${aId}" id="${qId}">
              <span>${item.question}</span>
              <span class="faq-toggle-symbol" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer" id="${aId}" role="region" aria-labelledby="${qId}">
              <p>${item.answer}</p>
            </div>
          </article>
        `;
      }).join("");
  
      // Add basic expand/collapse behavior.
      container.addEventListener("click", function (event) {
        const button = event.target.closest(".faq-question");
        if (!button) return;
  
        const article = button.closest("[data-faq-item]");
        if (!article) return;
  
        const answer = article.querySelector(".faq-answer");
        if (!answer) return;
  
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        article.classList.toggle("is-open", !expanded);
      });
    }
  
    function renderParty() {
      const container = document.querySelector("[data-party-list]");
      if (!container) return;
      if (typeof PARTY_MEMBERS === "undefined") {
        console.warn("PARTY_MEMBERS is not defined; party page has no data.");
        return;
      }
  
      container.innerHTML = PARTY_MEMBERS.map((person) => {
        const role = person.role ? `<p class="party-role">${person.role}</p>` : "";
        const description = person.bio ? `<p class="party-bio">${person.bio}</p>` : "";
        const img = person.photo
          ? `<img src="${person.photo}" alt="${person.name}" class="party-photo" loading="lazy" />`
          : "";
  
        return `
          <article class="card party-card">
            ${img}
            <div class="party-content">
              <h2>${person.name}</h2>
              ${role}
              ${description}
            </div>
          </article>
        `;
      }).join("");
    }
  
    // ---------- INIT ----------
  
    document.addEventListener("DOMContentLoaded", function () {
      const page = getPageId();
  
      // Navbar + modals are global.
      if (typeof initNavbar === "function") {
        initNavbar();
      }
      if (typeof initModals === "function") {
        initModals();
      }
  
      // Countdown appears on home (or any page with [data-countdown]).
      if (typeof initCountdown === "function" && document.querySelector("[data-countdown]")) {
        initCountdown();
      }
  
      // Page-specific rendering.
      switch (page) {
        case "schedule":
          renderSchedule();
          break;
        case "travel":
          renderTravel();
          break;
        case "faq":
          renderFaq();
          break;
        case "party":
          renderParty();
          break;
        default:
          // home, story, rsvp, etc. can be mostly static for now
          break;
      }
    });
  })();
  