// assets/js/navbar.js
// Wedding-friendly navbar: mobile toggle, active highlighting, scroll styling.

(function () {
  "use strict";

  function highlightActiveLink() {
    const nav = document.querySelector("[data-nav]");
    if (!nav) return;

    const links = nav.querySelectorAll("a[href]");
    if (!links.length) return;

    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href) return;

      const hrefPath = href.split("/").pop();

      const isHome =
        (currentPath === "" || currentPath === "index.html") &&
        (hrefPath === "" || hrefPath === "index.html");

      const isSamePage = hrefPath === currentPath;

      if (isHome || isSamePage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("is-active");
        link.removeAttribute("aria-current");
      }
    });
  }

  function setupScrollHeader() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    function onScroll() {
      const scrolled = window.scrollY > 8;
      header.classList.toggle("is-scrolled", scrolled);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupMobileToggle() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector("[data-nav-toggle]");
    const nav = document.querySelector("[data-nav]");
    const overlay = document.querySelector("[data-nav-overlay]");

    if (!toggle || !nav || !header) return;

    function openNav() {
      nav.classList.add("is-open");
      toggle.classList.add("is-open");
      header.classList.add("is-nav-open");
      if (overlay) overlay.classList.add("is-visible");
      document.body.classList.add("nav-open");

      toggle.setAttribute("aria-expanded", "true");
    }

    function closeNav() {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      header.classList.remove("is-nav-open");
      if (overlay) overlay.classList.remove("is-visible");
      document.body.classList.remove("nav-open");

      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-haspopup", "true");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.contains("is-open");
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    if (overlay) {
      overlay.addEventListener("click", closeNav);
    }

    // Close nav when clicking a link (mobile)
    nav.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const isInternal = !href.startsWith("http");
      if (isInternal) {
        closeNav();
      }
    });

    // Close on Escape
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    });

    // If window resized up to desktop while open, close gracefully
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768 && nav.classList.contains("is-open")) {
        closeNav();
      }
    });
  }

  // Expose single init function for main.js to call.
  window.initNavbar = function initNavbar() {
    highlightActiveLink();
    setupScrollHeader();
    setupMobileToggle();
  };
})();
