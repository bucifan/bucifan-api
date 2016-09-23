var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var rosterJson = {
    players: [{
      TwoDeep: 1,
      OffDef: "O",
      name: "Noah Brown",
      pos: "WR",
      el: "RSSO",
      number: 80,
      from: "Sparta N.J. | Pope John XXIII",
      hgt: 6.2,
      wgt: 222
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Parris Campbell",
      pos: "WR",
      el: "RSSO",
      number: 21,
      from: "Akron | St. Vincent-St.Mary",
      hgt: 6.1,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Corey Smith",
      pos: "WR",
      el: "RSSR-6",
      number: 5,
      from: "Akron | Akron Buchtel",
      hgt: 6.1,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Johnnie Dixon",
      pos: "WR",
      el: "RSSO",
      number: 1,
      from: "West Palm Beach Fla | Dwyer",
      hgt: 5.11,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Terry McLaurin",
      pos: "WR",
      el: "RSSO",
      number: 83,
      from: "Indianapolis Ind | Cathedral",
      hgt: 6.0,
      wgt: 204
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "James Clark",
      pos: "WR",
      el: "RSSR-6",
      number: 82,
      from: "New Smyrna Beach, Fla | New Smyrna Beach",
      hgt: 5.10,
      wgt: 185
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Binjimen Victor",
      pos: "WR",
      el: "FR",
      number: 9,
      from: "Fort Lauderdale Fla| Coconut Creek",
      hgt: 6.4,
      wgt: 185
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Austin Mack",
      pos: "WR",
      el: "FR",
      number: 11,
      from: "Fort Wayne Ind | Bishop Lucas",
      hgt: 6.2,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Curtis Sammuel",
      pos: "WR",
      el: "JR",
      number: 4,
      from: "Brooklyn N.Y | Erasmus",
      hgt: 5.11,
      wgt: 200
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Dontre Wilson",
      pos: "WR",
      el: "SR",
      number: 2,
      from: "Plano TX | DeSoto ",
      hgt: 5.10,
      wgt: 185
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Marcus Baugh",
      pos: "TE",
      el: "RSJR",
      number: 85,
      from: "Riverside Cal. | John W. North",
      hgt: 6.5,
      wgt: 255
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Jake Hausmann",
      pos: "TE",
      el: "SO",
      number: 81,
      from: "Cincinnati | Archbishop Moeller",
      hgt: 6.4,
      wgt: 245
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "J.T. Barrett",
      pos: "QB",
      el: "RSJR",
      number: 16,
      from: "Witchita Falls Texas | Rider",
      hgt: 6.2,
      wgt: 225
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Joe Burrow",
      pos: "QB",
      el: "RSFR",
      number: 10,
      from: "Athens | Athens",
      hgt: 6.3,
      wgt: 208
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Mike Webber",
      pos: "RB",
      el: "RSFR",
      number: 25,
      from: "Detroit | Cass Tech",
      hgt: 5.10,
      wgt: 215
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Sam Hubbard",
      pos: "DE",
      el: "RSSO",
      number: 6,
      from: "Cincinnati | Archbishop Moeller",
      hgt: 6.5,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Nick Bosa",
      pos: "DE",
      el: "FR",
      number: 97,
      from: "Fort Lauderdale, Fla | St. Thomas Aquinas",
      hgt: 6.4,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Michael Hill",
      pos: "DT",
      el: "RSJR",
      number: 77,
      from: "Pendleton, S.C. | Pendleton",
      hgt: 6.3,
      wgt: 295
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Robert Landers",
      pos: "DT",
      el: "RSFR",
      number: 57,
      from: "Dayton | Huber Heights",
      hgt: 6.2,
      wgt: 290
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Tracy Sprinkle",
      pos: "DT",
      el: "RSJR",
      number: 93,
      from: "Elyria | Elyria",
      hgt: 6.3,
      wgt: 290
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jashon Cornell",
      pos: "DT",
      el: "RSFR",
      number: 9,
      from: "St. Paul. Minn | Cretin-Derham Hall",
      hgt: 6.3,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Tyquan Lewis",
      pos: "DE",
      el: "RSJR",
      number: 59,
      from: "Tarboro N.C. | Tarboro",
      hgt: 6.4,
      wgt: 260
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jalyn Holmes",
      pos: "DE",
      el: "JR",
      number: 11,
      from: "Norfolk, Va. | Lake Taylor",
      hgt: 6.5,
      wgt: 265
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Dante Booker",
      pos: "LB",
      el: "JR",
      number: 33,
      from: "Akron | St. Vincent-St.Mary",
      hgt: 6.3,
      wgt: 233
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Justin Hilliard",
      pos: "LB",
      el: "RSFR",
      number: 47,
      from: "Cinicinnati | St. Xavier",
      hgt: 6.2,
      wgt: 230
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Joe Burger",
      pos: "LB",
      el: "SR",
      number: 48,
      from: "Cinicinnati | LaSalle",
      hgt: 6.2,
      wgt: 230
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Johnathan Cooper",
      pos: "DE",
      el: "FR",
      number: 18,
      from: "Gahanna | Lincohn",
      hgt: 6.3,
      wgt: 248
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "DreMont Jones",
      pos: "DT",
      el: "RSFR",
      number: 86,
      from: "Cleveland | St. Ignasius",
      hgt: 6.3,
      wgt: 280
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Davon Hamilton",
      pos: "DT",
      el: "RSFR",
      number: 53,
      from: "Pickerington | Pickerington Central",
      hgt: 6.4,
      wgt: 297
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Raekwon McMillan",
      pos: "LB",
      el: "JR",
      number: 5,
      from: "Hinesville, Ga. | Liberty County",
      hgt: 6.2,
      wgt: 240
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Nick Conner",
      pos: "LB",
      el: "RSFR",
      number: 34,
      from: "Dublin | Scioto",
      hgt: 6.3,
      wgt: 230
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Chris Worley",
      pos: "LB",
      el: "RSJR",
      number: 35,
      from: "Cleveland | Glenville",
      hgt: 6.2,
      wgt: 225
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jerome Baker",
      pos: "LB",
      el: "SO",
      number: 17,
      from: "Cleveland | St. Benedictine",
      hgt: 6.2,
      wgt: 215
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Craig Fada",
      pos: "LB",
      el: "SR",
      number: 38,
      from: "Columbus | Waterson",
      hgt: 6.1,
      wgt: 225
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Gareon Conley",
      pos: "CB",
      el: "RSJR",
      number: 8,
      from: "Massillon | Washington",
      hgt: 6.0,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Damon Arnette",
      pos: "CB",
      el: "RSFR",
      number: 3,
      from: "Fort Lauderdale, Fla. | St. Thomas Aquinas",
      hgt: 6.0,
      wgt: 191
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Malik Hooker",
      pos: "SS",
      el: "RSSO",
      number: 24,
      from: "New Castle, Pa | New Castle",
      hgt: 6.2,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Cam Burrows",
      pos: "SS",
      el: "RSJR",
      number: 16,
      from: "Trotwood | Trotwood Madison",
      hgt: 6.0,
      wgt: 208
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Erick Smith",
      pos: "FS",
      el: "JR",
      number: 34,
      from: "Cleveland | Glenville",
      hgt: 6.0,
      wgt: 202
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Damon Webb",
      pos: "FS",
      el: "JR",
      number: 7,
      from: "Detroit  | Cass Tech",
      hgt: 5.11,
      wgt: 193
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Marshon Lattimore",
      pos: "CB",
      el: "RSSO",
      number: 2,
      from: "Cleveland | Glenville",
      hgt: 6.0,
      wgt: 195
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Denzel Ward",
      pos: "CB",
      el: "SO",
      number: 12,
      from: "Macedonia | Nordonia",
      hgt: 5.11,
      wgt: 175
    }, {
      TwoDeep: 0,
      OffDef: "D",
      name: "Joshua Albi",
      pos: "DT",
      el: "RSFR",
      number: 58,
      from: "Detroit | Cass Tech",
      hgt: 6.5,
      wgt: 295
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "A.J. Alexander",
      pos: "TE",
      el: "RSFR",
      number: 88,
      from: "Burke, Va. | Lake Braddock",
      hgt: 6.2,
      wgt: 254
    }, {
      TwoDeep: 0,
      OffDef: "O",
      name: "Alex Backenstoe",
      pos: "RB",
      el: "SO",
      number: 35,
      from: "Hilliard | Davidson",
      hgt: 6.0,
      wgt: 220
    }, {
      TwoDeep: 0,
      OffDef: "D",
      name: "Jarrod Barnes",
      pos: "SAF",
      el: "GS",
      number: 26,
      from: "Westerville | South",
      hgt: 6.0,
      wgt: 200
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "K.J. Hill",
      pos: "WR",
      el: "FR",
      number: 14,
      from: "North Little Rock, Ark. | North Little Rock",
      hgt: 6.0,
      wgt: 200
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Rashod Berry",
      pos: "DE",
      el: "FR",
      number: 13,
      from: "Lorain | Lorain",
      hgt: 6.4,
      wgt: 252
    }, {
      TwoDeep: 1,
      OffDef: "D",
      name: "Jordan Fuller",
      pos: "FS",
      el: "FR",
      number: 4,
      from: "Old Tappan, N.J. | Old Tappan",
      hgt: 6.2,
      wgt: 205
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Jamarco Jones",
      pos: "OT",
      el: "JR",
      number: 74,
      from: "Chicago Il | De LasSalle",
      hgt: 6.5,
      wgt: 310
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Evan Lisle",
      pos: "OT",
      el: "JR",
      number: 75,
      from: "Centerville | Centerville",
      hgt: 6.6,
      wgt: 308
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Kevin Woidke",
      pos: "OT",
      el: "SO",
      number: 63,
      from: "Cleveland | St. Ignasius",
      hgt: 6.6,
      wgt: 295
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Michael Jordan",
      pos: "OG",
      el: "FR",
      number: 73,
      from: "Canton Mich. | Plymoth",
      hgt: 6.7,
      wgt: 310
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Matthew Burrell",
      pos: "OG",
      el: "FR",
      number: 69,
      from: "Woodbridge Va. | Hylton",
      hgt: 6.4,
      wgt: 305
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Pat Elflein",
      pos: "C",
      el: "SR",
      number: 65,
      from: "Pickerington | Pickerington North",
      hgt: 6.3,
      wgt: 300
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Brady Taylor",
      pos: "C",
      el: "SO",
      number: 79,
      from: "Columbus | Bishop Ready",
      hgt: 6.5,
      wgt: 300
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Billy Price",
      pos: "OG",
      el: "JR",
      number: 54,
      from: "Austintown | Fitch",
      hgt: 6.4,
      wgt: 315
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Demetrius Knox",
      pos: "OG",
      el: "SO",
      number: 78,
      from: "Fort Worth, TX | All Saints Episcopal ",
      hgt: 6.4,
      wgt: 308
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Isiah Price",
      pos: "OT",
      el: "SO",
      number: 59,
      from: "Greenbelt, Md. | Eleanor Roosevelt",
      hgt: 6.7,
      wgt: 310
    }, {
      TwoDeep: 1,
      OffDef: "O",
      name: "Brandon Bowen",
      pos: "OT",
      el: "RSFR",
      number: 76,
      from: "Draper, Utah (Corner Canyon)",
      hgt: 6.7,
      wgt: 315
    }]
  };
  res.json(rosterJson);
});

module.exports = router;