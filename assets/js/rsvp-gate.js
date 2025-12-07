// assets/js/rsvp-gate.js
// Soft gate for RSVP page: checks name against INVITED_NAMES, then reveals form.

"use strict";

(function () {
  function normalizeName(name) {
    return (name || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function isInvited(inputName) {
    if (typeof INVITED_NAMES === "undefined") {
      console.warn("[RSVP gate] INVITED_NAMES is not defined; allowing everyone.");
      return true; // fail-open so guests aren't stuck
    }

    if (!Array.isArray(INVITED_NAMES) || INVITED_NAMES.length === 0) {
      console.warn("[RSVP gate] INVITED_NAMES is empty or not an array; allowing everyone.");
      return true;
    }

    var normalizedInput = normalizeName(inputName);
    if (!normalizedInput) return false;

    var match = INVITED_NAMES.some(function (invitedRaw) {
      var invited = normalizeName(invitedRaw);
      if (!invited) return false;

      // exact match OR one string contains the other
      if (invited === normalizedInput) return true;
      if (invited.includes(normalizedInput)) return true;
      if (normalizedInput.includes(invited)) return true;

      return false;
    });

    console.log("[RSVP gate] isInvited?", {
      input: normalizedInput,
      match: match,
      invitedList: INVITED_NAMES
    });

    return match;
  }

  function setupGate() {
    var gate = document.getElementById("rsvp-gate");
    var formContainer = document.getElementById("rsvp-form-container");
    var form = document.getElementById("rsvp-name-form");
    var input = document.getElementById("guest-name");
    var errorEl = document.getElementById("rsvp-error");

    if (!gate || !formContainer || !form || !input) {
      console.warn("[RSVP gate] Missing gate/form elements; skipping.");
      return;
    }

    // If already validated once in this browser, skip gate.
    try {
      if (localStorage.getItem("rsvp-access") === "granted") {
        console.log("[RSVP gate] Access already granted in this browser.");
        gate.hidden = true;
        formContainer.hidden = false;
        return;
      }
    } catch (e) {
      // ignore storage issues
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var value = input.value || "";
      console.log("[RSVP gate] Submitted name:", value);

      if (isInvited(value)) {
        console.log("[RSVP gate] Name accepted, showing form.");
        gate.hidden = true;
        formContainer.hidden = false;
        if (errorEl) errorEl.textContent = "";

        try {
          localStorage.setItem("rsvp-access", "granted");
        } catch (e) {
          // ignore storage
        }
      } else {
        console.log("[RSVP gate] Name NOT found in list.");
        if (errorEl) {
          errorEl.textContent =
            "We couldn’t find that name. Please check the spelling or contact us if you think this is an error.";
        }
      }
    });
  }

  function initRsvpGate() {
    console.log("[RSVP gate] initRsvpGate called.");
    setupGate();
  }

  // Export (for main.js), but also self-init on RSVP page.
  window.initRsvpGate = initRsvpGate;

  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    if (!body) return;

    if (body.dataset && body.dataset.page === "rsvp") {
      console.log("[RSVP gate] Auto-initializing on RSVP page.");
      initRsvpGate();
    }
  });
})();
