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
    bio:
      "Placeholder"
  },
  {
    id: "person-greta",
    name: "Greta",
    role: "Bride",
    photo: "assets/img/party/greta.jpg",
    bio:
      "Placeholder"
  },

  // --- Example wedding party entries: edit / replace as needed ---

  {
    id: "person-best-man",
    name: "Casey Hughes",
    role: "Best man",
    photo: "assets/img/party/casey.jpg",
    bio:
      "Placeholder"
  },
  {
    id: "person-maid-of-honor",
    name: "Haley Frankovich",
    role: "Maid of honor",
    photo: "assets/img/party/haley.jpg",
    bio:
      "Placeholder"
  },
  {
    id: "person-groomsman-1",
    name: "First Last",
    role: "Groomsman",
    photo: "assets/img/party/groomsman1.jpg",
    bio:
      "A brief note about how Nolan knows [Name]—maybe a shared hobby, school, or work connection, plus a lighthearted detail."
  },
  {
    id: "person-groomsman-2",
    name: "First Last",
    role: "Groomsman",
    photo: "assets/img/party/groomsman2.jpg",
    bio:
      "Another short bio. You can keep these simple and consistent so the page is easy to scan."
  },
  {
    id: "person-bridesmaid-1",
    name: "First Last",
    role: "Bridesmaid",
    photo: "assets/img/party/bridesmaid1.jpg",
    bio:
      "A sentence or two about how Greta and [Name] met and what makes this friendship special."
  },
  {
    id: "person-bridesmaid-2",
    name: "First Last",
    role: "Bridesmaid",
    photo: "assets/img/party/bridesmaid2.jpg",
    bio:
      "Another short bio. You can add fun details (shared trips, inside jokes) if you want guests to get a feel for personalities."
  },

  // --- Example parents / family; keep or remove as you like ---

  {
    id: "person-parent-1",
    name: "Parent Name",
    role: "Parent of the groom",
    photo: "assets/img/party/parent-groom.jpg",
    bio:
      "A short sentence or two about the groom’s parent(s). You can keep this very simple and more formal if you prefer."
  },
  {
    id: "person-parent-2",
    name: "Parent Name",
    role: "Parent of the bride",
    photo: "assets/img/party/parent-bride.jpg",
    bio:
      "A short sentence or two about the bride’s parent(s), thanking them or noting their role in the story."
  }

  // Add or remove entries as needed.
];
