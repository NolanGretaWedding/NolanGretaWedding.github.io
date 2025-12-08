// assets/js/navbar.js
// Fancy, sticky, glassy, mobile-friendly navbar.

(function () {
  "use strict";

  function initNavbar() {
    var header = document.querySelector(".site-header");
    var nav = header ? header.querySelector("[data-nav]") : null;
    var toggle = header ? header.querySelector("[data-nav-toggle]") : null;
    var overlay = document.querySelector("[data-nav-overlay]");
    if (!header || !nav || !toggle || !overlay) return;

    var navLinks = Array.prototype.slice.call(nav.querySelectorAll("a[href]"));
    var isOpen = false;

    function setNav(open) {
      isOpen = open;

      header.classList.toggle("is-nav-open", open);
      overlay.classList.toggle("is-active", open);
      document.body.classList.toggle("no-scroll", open);

      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }

    // Toggle button
    toggle.addEventListener("click", function () {
      setNav(!isOpen);
    });

    // Overlay click closes nav
    overlay.addEventListener("click", function () {
      setNav(false);
    });

    // Clicking a nav link closes nav (on mobile)
    nav.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (!link) return;
      setNav(false);
    });

    // Close nav if resized to desktop
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768 && isOpen) {
        setNav(false);
      }
    });

    // Scroll effect (shrink + solid background)
    function handleScroll() {
      var scrolled = window.scrollY > 10;
      header.classList.toggle("is-scrolled", scrolled);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Active link highlight based on body[data-page]
    var pageId = document.body && document.body.dataset
      ? document.body.dataset.page
      : null;

    if (pageId && navLinks.length) {
      var map = {
        home: "index.html",
        schedule: "schedule.html",
        travel: "travel.html",
        rsvp: "rsvp.html",
        faq: "faq.html",
        party: "party.html",
        story: "story.html"
      };

      var targetHref = map[pageId];
      if (targetHref) {
        navLinks.forEach(function (link) {
          var href = link.getAttribute("href");
          if (!href) return;

          var baseHref = href.split("#")[0];

          if (href === targetHref || baseHref === targetHref) {
            link.classList.add("is-active");
          }
        });
      }
    }
  }

  // Expose for main.js
  window.initNavbar = initNavbar;
})();
