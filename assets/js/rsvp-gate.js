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
    // Fail-open if list is missing, so guests aren't stuck
    if (typeof INVITED_NAMES === "undefined") {
      console.warn("INVITED_NAMES is not defined; allowing everyone.");
      return true;
    }

    if (!Array.isArray(INVITED_NAMES) || INVITED_NAMES.length === 0) {
      console.warn("INVITED_NAMES is empty or not an array; allowing everyone.");
      return true;
    }

    var normalizedInput = normalizeName(inputName);
    if (!normalizedInput) return false;

    // More forgiving matching:
    // - exact normalized match
    // - or input is contained in invited name
    // - or invited name is contained in input
    var match = INVITED_NAMES.some(function (invitedRaw) {
      var invited = normalizeName(invitedRaw);
      if (!invited) return false;

      if (invited === normalizedInput) return true;
      if (invited.includes(normalizedInput)) return true;
      if (normalizedInput.includes(invited)) return true;

      return false;
    });

    // Optional: console debug to see what's going on
    if (!match) {
      console.debug(
        "[RSVP gate] No match for input:",
        '"' + normalizedInput + '"',
        "in invited list:",
        INVITED_NAMES
      );
    }

    return match;
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
      // ignore storage issues
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
          // ignore storage issues
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
