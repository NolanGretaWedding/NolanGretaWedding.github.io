// assets/js/countdown.js
// Countdown to the wedding date.
//
// HTML pattern:
//   <section data-countdown data-countdown-target="2025-09-13T16:00:00-04:00">
//     <span data-countdown-days>0</span> days
//     <span data-countdown-hours>0</span> hours
//     <span data-countdown-minutes>0</span> minutes
//     <span data-countdown-seconds>0</span> seconds
//   </section>

(function () {
    "use strict";
  
    function formatNumber(n) {
      return n.toString().padStart(2, "0");
    }
  
    function computeDiff(target) {
      const now = new Date().getTime();
      const diffMs = target.getTime() - now;
  
      if (diffMs <= 0) {
        return {
          total: diffMs,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }
  
      const totalSeconds = Math.floor(diffMs / 1000);
      const days = Math.floor(totalSeconds / (60 * 60 * 24));
      const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
      const seconds = totalSeconds % 60;
  
      return {
        total: diffMs,
        days,
        hours,
        minutes,
        seconds,
      };
    }
  
    function initCountdown() {
      const root = document.querySelector("[data-countdown]");
      if (!root) return;
  
      const targetAttr = root.getAttribute("data-countdown-target");
  
      // Default: edit this to your actual date/time.
      // Use an ISO-8601 timestamp with offset if you want to be precise.
      const fallback = "2025-09-13T16:00:00-04:00";
      const targetDate = new Date(targetAttr || fallback);
  
      if (Number.isNaN(targetDate.getTime())) {
        console.error("Invalid countdown target date:", targetAttr);
        return;
      }
  
      const daysEl = root.querySelector("[data-countdown-days]");
      const hoursEl = root.querySelector("[data-countdown-hours]");
      const minutesEl = root.querySelector("[data-countdown-minutes]");
      const secondsEl = root.querySelector("[data-countdown-seconds]");
  
      if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        console.warn("Countdown elements missing required spans.");
        return;
      }
  
      function update() {
        const diff = computeDiff(targetDate);
  
        daysEl.textContent = diff.days.toString();
        hoursEl.textContent = formatNumber(diff.hours);
        minutesEl.textContent = formatNumber(diff.minutes);
        secondsEl.textContent = formatNumber(diff.seconds);
  
        if (diff.total <= 0) {
          clearInterval(timerId);
          root.classList.add("countdown-complete");
        }
      }
  
      update(); // initial render
      const timerId = setInterval(update, 1000);
    }
  
    // Expose to global.
    window.initCountdown = initCountdown;
  })();
  