// assets/js/data.party.js
// PARTY_MEMBERS is consumed by renderParty() in main.js.
//
// You can change names, roles, bios, and photo paths as needed.
//
// Photo suggestions:
//   Place images in assets/img/party/ and reference them like:
//   "assets/img/party/person-name.jpg"
//   If you do not have a photo for someone yet, you can set photo: null.

"use strict";

var PARTY_MEMBERS = [
  {
    id: "person-nolan",
    name: "Nolan",
    role: "Groom",
    photo: "assets/img/party/nolan.jpg", // optional, use null or "" if you don't have it yet
    bio: ""
  },
  {
    id: "person-greta",
    name: "Greta",
    role: "Bride",
    photo: "assets/img/party/greta.jpg",
    bio: ""
  },

  // --- Example wedding party entries: edit / replace as needed ---

  {
    id: "person-best-man",
    name: "Casey Hughes",
    role: "Best man",
    photo: "assets/img/party/casey.jpg",
    bio:
      ""
  },
  {
    id: "person-maid-of-honor",
    name: "Haley Frankovich",
    role: "Maid of honor",
    photo: "assets/img/party/haley.jpg",
    bio:
      ""
  }
];
