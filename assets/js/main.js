// assets/js/main.js
// Global orchestration + page-specific rendering.

(function () {
  "use strict";

  function getPageId() {
    if (!document.body) return null;
    return document.body.dataset.page || null;
  }

  // Interactive hero background (parallax-ish) on home page
  function initHeroInteractive() {
    var hero = document.querySelector(".hero[data-hero-interactive]");
    if (!hero) return;

    // Initial offsets
    hero.style.setProperty("--hero-offset-x", "0px");
    hero.style.setProperty("--hero-offset-y", "0px");

    hero.addEventListener("mousemove", function (event) {
      var rect = hero.getBoundingClientRect();
      var relX = (event.clientX - rect.left) / rect.width - 0.5;  // -0.5..0.5
      var relY = (event.clientY - rect.top) / rect.height - 0.5; // -0.5..0.5

      // Tweak 20 for more/less motion
      var offsetX = (relX * 20).toFixed(1) + "px";
      var offsetY = (relY * 20).toFixed(1) + "px";

      hero.style.setProperty("--hero-offset-x", offsetX);
      hero.style.setProperty("--hero-offset-y", offsetY);
    });
  }

  // ---------- RENDERERS ----------

  function renderSchedule() {
    var container = document.querySelector("[data-schedule-list]");
    if (!container) return;

    if (typeof SCHEDULE_ITEMS === "undefined") {
      console.warn("SCHEDULE_ITEMS is not defined; schedule page has no data.");
      return;
    }

    container.innerHTML = SCHEDULE_ITEMS.map(function (item) {
      var venueHtml = "";

      if (
        typeof VENUES !== "undefined" &&
        item.locationId &&
        VENUES[item.locationId]
      ) {
        var v = VENUES[item.locationId];
        var mapLink = v.mapUrl
          ? '<a href="' +
            v.mapUrl +
            '" target="_blank" rel="noopener noreferrer">View on map</a>'
          : "";

        venueHtml =
          '<div class="schedule-venue">' +
          "<div>" +
          (v.name || "") +
          "</div>" +
          "<div>" +
          (v.address || "") +
          "</div>" +
          mapLink +
          "</div>";
      }

      var dayLabel = item.dayLabel
        ? '<p class="schedule-meta"><span>' + item.dayLabel + "</span></p>"
        : "";

      var whenMetaParts = [];
      if (item.date) whenMetaParts.push(item.date);
      if (item.time) whenMetaParts.push(item.time);
      var whenMeta = whenMetaParts.length
        ? '<p class="schedule-meta"><span>' +
          whenMetaParts.join(" &middot; ") +
          "</span></p>"
        : "";

      return (
        '<article class="card schedule-card" data-type="' +
        (item.type || "other") +
        '">' +
        "<header>" +
        "<h2>" +
        item.title +
        "</h2>" +
        dayLabel +
        whenMeta +
        "</header>" +
        (item.description ? "<p>" + item.description + "</p>" : "") +
        venueHtml +
        "</article>"
      );
    }).join("");
  }

  function renderTravel() {
    var hotelContainer = document.querySelector("[data-travel-hotels]");
    var airportContainer = document.querySelector("[data-travel-airports]");

    if (
      hotelContainer &&
      typeof TRAVEL_HOTELS !== "undefined" &&
      Array.isArray(TRAVEL_HOTELS)
    ) {
      hotelContainer.innerHTML = TRAVEL_HOTELS.map(function (hotel) {
        var link = hotel.url
          ? '<a href="' +
            hotel.url +
            '" target="_blank" rel="noopener noreferrer">Website</a>'
          : "";
        var distance = hotel.distance
          ? '<span class="travel-distance">' + hotel.distance + "</span>"
          : "";
        var notes = hotel.notes
          ? '<p class="travel-notes">' + hotel.notes + "</p>"
          : "";

        var blockInfo = "";
        if (hotel.hasRoomBlock) {
          var blockName = hotel.blockName
            ? hotel.blockName
            : "Wedding room block";
          var deadline = hotel.blockDeadline
            ? "Book by " + hotel.blockDeadline + " for the group rate."
            : "";
          blockInfo =
            '<p class="travel-block"><strong>Room block:</strong> ' +
            blockName +
            (deadline ? "<br />" + deadline : "") +
            "</p>";
        }

        return (
          '<article class="card hotel-card">' +
          "<h2>" +
          hotel.name +
          "</h2>" +
          "<p>" +
          (hotel.address || "") +
          "</p>" +
          "<p>" +
          (hotel.phone || "") +
          "</p>" +
          (distance ? "<p>" + distance + "</p>" : "") +
          notes +
          blockInfo +
          link +
          "</article>"
        );
      }).join("");
    }

    if (
      airportContainer &&
      typeof TRAVEL_AIRPORTS !== "undefined" &&
      Array.isArray(TRAVEL_AIRPORTS)
    ) {
      airportContainer.innerHTML = TRAVEL_AIRPORTS.map(function (airport) {
        var code = airport.code ? "<strong>" + airport.code + "</strong>" : "";
        var drive = airport.drive
          ? '<span class="travel-drive">' + airport.drive + " drive</span>"
          : "";
        var notes = airport.notes ? "<p>" + airport.notes + "</p>" : "";

        var link = airport.url
          ? '<a href="' +
            airport.url +
            '" target="_blank" rel="noopener noreferrer">Airport website</a>'
          : "";

        return (
          '<article class="card airport-card">' +
          "<h2>" +
          airport.name +
          " " +
          code +
          "</h2>" +
          notes +
          (drive ? "<p>" + drive + "</p>" : "") +
          link +
          "</article>"
        );
      }).join("");
    }
  }

  function renderFaq() {
    var container = document.querySelector("[data-faq-list]");
    if (!container) return;

    if (typeof FAQ_ITEMS === "undefined") {
      console.warn("FAQ_ITEMS is not defined; faq page has no data.");
      return;
    }

    container.innerHTML = FAQ_ITEMS.map(function (item, idx) {
      var qId = "faq-q-" + idx;
      var aId = "faq-a-" + idx;
      return (
        '<article class="faq-item" data-faq-item>' +
        '<button class="faq-question" aria-expanded="false" aria-controls="' +
        aId +
        '" id="' +
        qId +
        '">' +
        "<span>" +
        item.question +
        "</span>" +
        '<span class="faq-toggle-symbol" aria-hidden="true">+</span>' +
        "</button>" +
        '<div class="faq-answer" id="' +
        aId +
        '" role="region" aria-labelledby="' +
        qId +
        '">' +
        "<p>" +
        item.answer +
        "</p>" +
        "</div>" +
        "</article>"
      );
    }).join("");

    container.addEventListener("click", function (event) {
      var button = event.target.closest(".faq-question");
      if (!button) return;

      var article = button.closest("[data-faq-item]");
      if (!article) return;

      var answer = article.querySelector(".faq-answer");
      if (!answer) return;

      var expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      article.classList.toggle("is-open", !expanded);
    });
  }

  function renderParty() {
    var container = document.querySelector("[data-party-list]");
    if (!container) return;

    if (typeof PARTY_MEMBERS === "undefined") {
      console.warn("PARTY_MEMBERS is not defined; party page has no data.");
      return;
    }

    container.innerHTML = PARTY_MEMBERS.map(function (person) {
      var role = person.role
        ? '<p class="party-role">' + person.role + "</p>"
        : "";
      var description = person.bio
        ? '<p class="party-bio">' + person.bio + "</p>"
        : "";
      var img = person.photo
        ? '<img src="' +
          person.photo +
          '" alt="' +
          person.name +
          '" class="party-photo" loading="lazy" />'
        : "";

      return (
        '<article class="card party-card">' +
        img +
        '<div class="party-content">' +
        "<h2>" +
        person.name +
        "</h2>" +
        role +
        description +
        "</div>" +
        "</article>"
      );
    }).join("");
  }

  // ---------- INIT ----------

  document.addEventListener("DOMContentLoaded", function () {
    var page = getPageId();

    if (typeof initNavbar === "function") {
      initNavbar();
    }
    if (typeof initModals === "function") {
      initModals();
    }

    if (
      typeof initCountdown === "function" &&
      document.querySelector("[data-countdown]")
    ) {
      initCountdown();
    }

    switch (page) {
      case "home":
        initHeroInteractive();
        break;
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
      case "rsvp":
        if (typeof initRsvpGate === "function") {
          initRsvpGate();
        }
        break;
      default:
        break;
    }
  });
})();
