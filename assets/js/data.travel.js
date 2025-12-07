// assets/js/data.travel.js
// TRAVEL_AIRPORTS and TRAVEL_HOTELS are consumed by renderTravel() in main.js.
// These are just examples; adjust to your real airports, hotels, and URLs.

"use strict";

// Airports that make sense for reaching the venue.
var TRAVEL_AIRPORTS = [
  {
    code: "ABC",
    name: "ABC International Airport",
    drive: "25–35 minutes",
    notes:
      "This is the closest major airport to the venue and usually the easiest option. Most major airlines fly here.",
    url: "https://www.example.com/airport-abc"
  },
  {
    code: "DEF",
    name: "DEF Regional Airport",
    drive: "45–60 minutes",
    notes:
      "Smaller airport that can be a good option if you find a convenient flight or better price.",
    url: "https://www.example.com/airport-def"
  },
  {
    code: "GHI",
    name: "GHI International Airport",
    drive: "1.5–2 hours",
    notes:
      "Larger hub with more flight options; may be worth it if you are coming from far away and want more flexibility.",
    url: "https://www.example.com/airport-ghi"
  }
];

// Hotels / lodging options around the venue.
// You can add fields like `blockCode` or `blockDeadline` if you want.
var TRAVEL_HOTELS = [
  {
    name: "Example Hotel Downtown",
    address: "101 Main Street, Example City, ST 00000",
    phone: "(000) 111-2222",
    distance: "10 minutes from venue",
    notes:
      "Modern hotel in the downtown area with lots of restaurants and coffee shops nearby.",
    url: "https://www.example.com/hotel-downtown",
    hasRoomBlock: true,
    blockName: "Nolan & Greta Wedding",
    blockDeadline: "August 1, 2025"
  },
  {
    name: "Example Inn near Venue",
    address: "55 Garden Road, Example City, ST 00000",
    phone: "(000) 333-4444",
    distance: "5 minutes from venue",
    notes:
      "Smaller inn very close to the venue; a good option if you prefer to minimize driving.",
    url: "https://www.example.com/inn-near-venue",
    hasRoomBlock: false
  },
  {
    name: "Budget Suites",
    address: "200 Value Lane, Example City, ST 00000",
    phone: "(000) 555-6666",
    distance: "15 minutes from venue",
    notes:
      "More budget-friendly option with simple rooms. Good if you mainly need a place to sleep.",
    url: "https://www.example.com/budget-suites",
    hasRoomBlock: false
  },
  {
    name: "Boutique Hotel Riverside",
    address: "12 Riverfront Drive, Example City, ST 00000",
    phone: "(000) 777-8888",
    distance: "20 minutes from venue",
    notes:
      "Charming boutique hotel by the river. Slightly farther from the venue but nice views and surroundings.",
    url: "https://www.example.com/boutique-riverside",
    hasRoomBlock: false
  }
];
