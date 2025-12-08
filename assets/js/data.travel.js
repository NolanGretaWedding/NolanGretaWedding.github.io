// assets/js/data.travel.js
// TRAVEL_AIRPORTS and TRAVEL_HOTELS are consumed by renderTravel() in main.js.
// These are just examples; adjust to your real airports, hotels, and URLs.

"use strict";

// Airports that make sense for reaching the venue.
var TRAVEL_AIRPORTS = [
  {
    code: "IAD",
    name: "Dulles International Airport",
    drive: "30–40 minutes",
    notes:
      "This is the closest major airport to the venue and usually the easiest option.",
    url: "https://www.flydulles.com/"
  },
  {
    code: "DCA",
    name: "Ronald Reagan Washington National Airport",
    drive: "50–70 minutes",
    notes:
      "Smaller airport that can be a good option if you find a convenient flight or better price.",
    url: "https://www.flyreagan.com/"
  },
  {
    code: "BWI",
    name: "Baltimore/Washington International Thurgood Marshall Airport",
    drive: "1.5–2 hours",
    notes:
      "Southwest hub and sometimes has good deals, but it's a longer drive to the venue.",
    url: "https://bwiairport.com/"
  }
];

// Hotels / lodging options around the venue.
// You can add fields like `blockCode` or `blockDeadline` if you want.
var TRAVEL_HOTELS = [
  {
    name: "The Windswept Inn",
    address: "18104 Calumet Ln, Round Hill, VA 20141",
    phone: "(703) 314-2313",
    distance: "5 minutes from venue",
    notes:
      "Placeholder",
    url: "placeholder",
    hasRoomBlock: false
  },
  {
    name: "Hotel 2",
    address: "Placeholder",
    phone: "Placeholder",
    distance: "Placeholder",
    notes:
      "Placeholder",
    url: "Placeholder",
    hasRoomBlock: false
  },
  {
    name: "Hotel 3",
    address: "Placeholder",
    phone: "Placeholder",
    distance: "Placeholder",
    notes:
      "Placeholder",
    url: "Placeholder",
    hasRoomBlock: false
  },
  {
    name: "Hotel 4",
    address: "Placeholder",
    phone: "Placeholder",
    distance: "Placeholder",
    notes:
      "Placeholder",
    url: "Placeholder",
    hasRoomBlock: false
  }
];
