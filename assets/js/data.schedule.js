// assets/js/data.schedule.js
// Structured data for the wedding date, venues, and schedule items.
// This file is *data only*; DOM manipulation happens in main.js.

"use strict";

// ISO-8601 string for the main ceremony start time.
// Adjust to your actual date/time and timezone offset.
var WEDDING_DATE_ISO = "2026-09-16T16:00:00-04:00";

// Venues referenced by schedule items via `locationId`.
var VENUES = {
  "main-venue": {
    id: "main-venue",
    name: "Stoneleigh Golf & Country Club",
    address: "35271 Prestwick Ct, Round Hill, VA 20141",
    mapUrl: "https://maps.app.goo.gl/EKHSDG4gvmL983jW8",
    notes: "Ceremony, cocktail hour, and reception will be held at this location."
  },
  "rehearsal-dinner-location": {
    id: "rehearsal-dinner-location",
    name: "Franklin Park",
    address: "36441 Blueridge View Ln, Purcellville, VA 20132",
    mapUrl: "https://maps.app.goo.gl/ennG2uYuYX7HxYfp9",
    notes: "Informal dinner for out-of-town guests and family."
  },
  // "farewell-brunch-location": {
  //   id: "farewell-brunch-location",
  //   name: "Farewell Brunch Spot",
  //   address: "Sunday Brunch Address",
  //   mapUrl: "link for maps to brunch location",
  //   notes: "Optional brunch for anyone still in town."
  // }
};

// Schedule items for the weekend.
// You can remove or add items as needed.
// `id` can be used for anchors or reference (e.g., "reception").
var SCHEDULE_ITEMS = [
  // -------- Friday (optional events) --------
  {
    id: "rehearsal-dinner",
    type: "other", // "ceremony" | "reception" | "other"
    dayLabel: "Friday",
    date: "Friday, September 18, 2026",
    time: "6:00 pm",
    title: "Rehearsal dinner",
    locationId: "rehearsal-dinner-location",
    description:
      "A casual rehearsal dinner at Franklin Park in preparation for the Saturday wedding."
  },

  // -------- Saturday (wedding day) --------
  {
    id: "getting-ready",
    type: "other",
    dayLabel: "Saturday",
    date: "Saturday, September 19, 2026",
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
    date: "Saturday, September 19, 2026",
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
    date: "Saturday, September 19, 2026",
    time: "4:00 pm",
    title: "Ceremony",
    locationId: "main-venue",
    description:
      "Wedding ceremony will begin promptly at 4:00pm in the courtyard."
  },
  {
    id: "cocktail-hour",
    type: "reception",
    dayLabel: "Saturday",
    date: "Saturday, September 19, 2026",
    time: "4:30 pm",
    title: "Cocktail hour",
    locationId: "main-venue",
    description:
      "Drinks and horderves will be served by the barn while the couple takes photos."
  },
  {
    id: "reception",
    type: "reception",
    dayLabel: "Saturday",
    date: "Saturday, September 19, 2026",
    time: "5:30 pm",
    title: "Reception",
    locationId: "main-venue",
    description:
      "Taco bar, open bar with beer and wine, dancing, and merriment to follow cocktail hour."
  },
  {
    id: "sendoff",
    type: "other",
    dayLabel: "Saturday",
    date: "Saturday, September 19, 2026",
    time: "10:00 pm",
    title: "Send-off",
    locationId: "main-venue",
    description:
      "Approximate end time. Final details will be shared closer to the date."
  },

  // -------- Sunday (optional brunch) --------
//   {
//     id: "farewell-brunch",
//     type: "other",
//     dayLabel: "Sunday",
//     date: "Sunday, September 14, 2025",
//     time: "10:00 am",
//     title: "Farewell brunch",
//     locationId: "farewell-brunch-location",
//     description:
//       "A casual brunch for anyone still in town. Come say goodbye and swap stories from the night before."
//   }
];

// If you ever want to group or filter by type/day in the UI,
// SCHEDULE_ITEMS already carries `type` and `dayLabel` for that.
