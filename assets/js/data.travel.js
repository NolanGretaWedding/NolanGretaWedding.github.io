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
    name: "Hampton Inn & Suites",
    address: "117 Fort Evans Rd NE, Leesburg, VA 20176",
    phone: "(703) 669-8640",
    distance: "25 minutes from venue",
    notes:
      "4.1 Stars on Google Reviews",
    url: "https://www.hilton.com/en/hotels/waslbhx-hampton-suites-leesburg/?SEO_id=GMB-AMER-HX-WASLBHX&y_source=1_MjA4MjA5NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    hasRoomBlock: false
  },
  {
    name: "Homewood Suites by Hilton",
    address: "115 Fort Evans Rd NE, Leesburg, VA 20176",
    phone: "(571) 258-1068",
    distance: "26 minutes from venue",
    notes:
      "4.3 Stars on Google Reviews",
    url: "https://www.hilton.com/en/hotels/waslghw-homewood-suites-leesburg-va/?SEO_id=GMB-AMER-HG-WASLGHW&y_source=1_MjA4MjA2OC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
    hasRoomBlock: false
  },
  {
    name: "Best Western",
    address: "726 E Market St, Leesburg, VA 20176",
    phone: "(703) 777-9400",
    distance: "26 minutes from venue",
    notes:
      "3.7 Stars on Google Reviews",
    url: "https://www.bestwestern.com/en_US/book/hotel-rooms.47076.html?iata=00171880&ssob=BLBWI0004G&cid=BLBWI0004G:google:gmb:47076",
    hasRoomBlock: false
  },
  // {
  //   name: "Holiday Inn Express & Suites",
  //   address: "80 Prosperity Ave SE, Leesburg, VA 20175",
  //   phone: "(703) 669-1650",
  //   distance: "26 minutes from venue",
  //   notes:
  //     "4.4 Stars on Google Reviews",
  //   url: "https://www.ihg.com/leesburg-virginia?cm_mmc=GoogleMaps-_-EX-_-US-_-WASLB",
  //   hasRoomBlock: false
  // }
];
