// assets/js/modal.js
// Generic modal open/close logic using data attributes.
//
// HTML pattern:
//   <button data-modal-open="travel-note-1">More info</button>
//   <div class="modal" data-modal id="travel-note-1">
//     <div class="modal-backdrop" data-modal-close></div>
//     <div class="modal-dialog">
//       <button class="modal-close" data-modal-close>&times;</button>
//       ... content ...
//     </div>
//   </div>

(function () {
    "use strict";
  
    function openModal(id) {
      if (!id) return;
      const modal = document.querySelector(`[data-modal][id="${id}"]`);
      if (!modal) return;
  
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
  
      // Focus first focusable element inside the dialog (for accessibility).
      const dialog = modal.querySelector(".modal-dialog") || modal;
      const focusable = dialog.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable) {
        focusable.focus();
      }
    }
  
    function closeModal(modal) {
      if (!modal) return;
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
    }
  
    function closeAllModals() {
      const modals = document.querySelectorAll("[data-modal].is-open");
      modals.forEach(closeModal);
    }
  
    function initModals() {
      // Open triggers.
      document.addEventListener("click", (event) => {
        const opener = event.target.closest("[data-modal-open]");
        if (!opener) return;
  
        const id = opener.getAttribute("data-modal-open");
        if (!id) return;
  
        event.preventDefault();
        openModal(id);
      });
  
      // Close triggers (buttons, backdrop, etc.).
      document.addEventListener("click", (event) => {
        const closer = event.target.closest("[data-modal-close]");
        if (!closer) return;
  
        const modal = closer.closest("[data-modal]");
        if (!modal) {
          // Fallback: close all if we don't know which one.
          closeAllModals();
        } else {
          closeModal(modal);
        }
      });
  
      // Close on Escape.
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          closeAllModals();
        }
      });
    }
  
    // Expose to global.
    window.initModals = initModals;
    window.openModal = openModal;
    window.closeAllModals = closeAllModals;
  })();
  