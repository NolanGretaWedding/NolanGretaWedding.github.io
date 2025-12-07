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
      "Short bio about Nolan. You can mention how he spends his time, how he met Greta, or a fun detail guests might enjoy."
  },
  {
    id: "person-greta",
    name: "Greta",
    role: "Bride",
    photo: "assets/img/party/greta.jpg",
    bio:
      "Short bio about Greta. Feel free to keep it light and fun—this is just a way for guests to connect names and faces."
  },

  // --- Example wedding party entries: edit / replace as needed ---

  {
    id: "person-best-man",
    name: "First Last",
    role: "Best man",
    photo: "assets/img/party/best-man.jpg",
    bio:
      "Nolan met [Name] in [context—school, work, childhood]. They have been close friends ever since and have more stories than can reasonably fit on this page."
  },
  {
    id: "person-maid-of-honor",
    name: "First Last",
    role: "Maid of honor",
    photo: "assets/img/party/maid-of-honor.jpg",
    bio:
      "Greta and [Name] have been inseparable since [time/place]. She has been there for every major moment leading up to the wedding."
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
