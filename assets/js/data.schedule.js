// assets/js/data.schedule.js
// Structured data for the wedding date, venues, and schedule items.
// This file is *data only*; DOM manipulation happens in main.js.

"use strict";

// ISO-8601 string for the main ceremony start time.
// Adjust to your actual date/time and timezone offset.
var WEDDING_DATE_ISO = "2025-09-13T16:00:00-04:00";

// Venues referenced by schedule items via `locationId`.
var VENUES = {
  "main-venue": {
    id: "main-venue",
    name: "Example Wedding Venue",
    address: "123 Example Street, Example City, ST 00000",
    mapUrl: "https://maps.google.com/?q=123+Example+Street+Example+City+ST",
    notes: "Ceremony and reception will both be held at this location."
  },
  "welcome-dinner-location": {
    id: "welcome-dinner-location",
    name: "Welcome Dinner Restaurant",
    address: "456 Dinner Lane, Example City, ST 00000",
    mapUrl: "https://maps.google.com/?q=456+Dinner+Lane+Example+City+ST",
    notes: "Informal dinner for out-of-town guests and family."
  },
  "farewell-brunch-location": {
    id: "farewell-brunch-location",
    name: "Farewell Brunch Spot",
    address: "789 Brunch Avenue, Example City, ST 00000",
    mapUrl: "https://maps.google.com/?q=789+Brunch+Avenue+Example+City+ST",
    notes: "Optional brunch for anyone still in town."
  }
};

// Schedule items for the weekend.
// You can remove or add items as needed.
// `id` can be used for anchors or reference (e.g., "reception").
var SCHEDULE_ITEMS = [
  // -------- Friday (optional events) --------
  {
    id: "welcome-dinner",
    type: "other", // "ceremony" | "reception" | "other"
    dayLabel: "Friday",
    date: "Friday, September 12, 2025",
    time: "7:00 pm",
    title: "Welcome dinner",
    locationId: "welcome-dinner-location",
    description:
      "A casual dinner for family and out-of-town guests. Totally optional—come if your travel schedule allows."
  },

  // -------- Saturday (wedding day) --------
  {
    id: "getting-ready",
    type: "other",
    dayLabel: "Saturday",
    date: "Saturday, September 13, 2025",
    time: "Morning / early afternoon",
    title: "Getting ready",
    locationId: "main-venue",
    description:
      "Wedding party will arrive earlier for photos and preparation. Exact times will be shared directly with the wedding party."
  },
  {
    id: "guest-arrival",
    type: "other",
    dayLabel: "Saturday",
    date: "Saturday, September 13, 2025",
    time: "3:30 pm",
    title: "Guest arrival & seating",
    locationId: "main-venue",
    description:
      "Doors open and guests may begin taking their seats. Please arrive a little early to allow time for parking and seating."
  },
  {
    id: "ceremony",
    type: "ceremony",
    dayLabel: "Saturday",
    date: "Saturday, September 13, 2025",
    time: "4:00 pm",
    title: "Ceremony",
    locationId: "main-venue",
    description:
      "Our wedding ceremony. Please silence your phones and enjoy the moment with us."
  },
  {
    id: "cocktail-hour",
    type: "reception",
    dayLabel: "Saturday",
    date: "Saturday, September 13, 2025",
    time: "5:00 pm",
    title: "Cocktail hour",
    locationId: "main-venue",
    description:
      "Drinks and light bites while we wrap up family photos and transition into the reception."
  },
  {
    id: "reception",
    type: "reception",
    dayLabel: "Saturday",
    date: "Saturday, September 13, 2025",
    time: "6:00 pm",
    title: "Reception",
    locationId: "main-venue",
    description:
      "Dinner, toasts, dancing, and celebrating together. We can’t wait to party with you."
  },
  {
    id: "sendoff",
    type: "other",
    dayLabel: "Saturday",
    date: "Saturday, September 13, 2025",
    time: "10:30 pm",
    title: "Send-off",
    locationId: "main-venue",
    description:
      "Approximate end time. Final details (sparkler exit or equivalent) will be shared closer to the date."
  },

  // -------- Sunday (optional brunch) --------
  {
    id: "farewell-brunch",
    type: "other",
    dayLabel: "Sunday",
    date: "Sunday, September 14, 2025",
    time: "10:00 am",
    title: "Farewell brunch",
    locationId: "farewell-brunch-location",
    description:
      "A casual brunch for anyone still in town. Come say goodbye and swap stories from the night before."
  }
];

// If you ever want to group or filter by type/day in the UI,
// SCHEDULE_ITEMS already carries `type` and `dayLabel` for that.
