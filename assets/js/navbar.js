// assets/js/navbar.js
// Handles mobile nav toggle + "active" link highlighting.

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
  
        // Handle absolute / relative links.
        const hrefPath = href.split("/").pop();
  
        // index.html vs root special case.
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
  
    function setupMobileToggle() {
      const toggle = document.querySelector("[data-nav-toggle]");
      const nav = document.querySelector("[data-nav]");
      const overlay = document.querySelector("[data-nav-overlay]");
  
      if (!toggle || !nav) return;
  
      function openNav() {
        nav.classList.add("is-open");
        toggle.classList.add("is-open");
        if (overlay) overlay.classList.add("is-visible");
        document.body.classList.add("nav-open");
      }
  
      function closeNav() {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-open");
        if (overlay) overlay.classList.remove("is-visible");
        document.body.classList.remove("nav-open");
      }
  
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
  
      // Close nav when clicking a link (useful on mobile).
      nav.addEventListener("click", (event) => {
        const link = event.target.closest("a[href]");
        if (!link) return;
        // Only close if it's an internal link.
        const href = link.getAttribute("href") || "";
        const isInternal = !href.startsWith("http");
        if (isInternal) {
          closeNav();
        }
      });
  
      // Optional: close on Escape.
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeNav();
        }
      });
    }
  
    // Expose single init function for main.js to call.
    window.initNavbar = function initNavbar() {
      highlightActiveLink();
      setupMobileToggle();
    };
  })();
  