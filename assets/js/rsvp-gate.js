// assets/js/rsvp-gate.js
// Soft gate for RSVP page: checks name against INVITED_NAMES, then reveals form.

"use strict";

(function () {
  function normalizeName(name) {
    return name.toLowerCase().replace(/\s+/g, " ").trim();
  }

  function isInvited(inputName) {
    if (typeof INVITED_NAMES === "undefined") {
      console.warn("INVITED_NAMES is not defined; allowing everyone.");
      // Fail-open if the invited list is missing (so guests aren't blocked).
      return true;
    }

    var normalizedInput = normalizeName(inputName);
    if (!normalizedInput) return false;

    return INVITED_NAMES.some(function (invited) {
      return normalizeName(invited) === normalizedInput;
    });
  }

  function initRsvpGate() {
    var gate = document.getElementById("rsvp-gate");
    var formContainer = document.getElementById("rsvp-form-container");
    var form = document.getElementById("rsvp-name-form");
    var input = document.getElementById("guest-name");
    var errorEl = document.getElementById("rsvp-error");

    if (!gate || !formContainer || !form || !input) {
      return;
    }

    // If already validated once in this browser, remember and skip gate.
    try {
      if (localStorage.getItem("rsvp-access") === "granted") {
        gate.hidden = true;
        formContainer.hidden = false;
        return;
      }
    } catch (e) {
      // Ignore storage errors.
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = input.value || "";

      if (isInvited(value)) {
        gate.hidden = true;
        formContainer.hidden = false;
        if (errorEl) errorEl.textContent = "";

        try {
          localStorage.setItem("rsvp-access", "granted");
        } catch (e) {
          // Ignore storage errors.
        }
      } else {
        if (errorEl) {
          errorEl.textContent =
            "We couldn’t find that name. Please check the spelling or contact us if you think this is an error.";
        }
      }
    });
  }

  // Expose initializer to main.js
  window.initRsvpGate = initRsvpGate;
})();
