var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var gameJson = {
    name: "OSU Schedule",
    y2016: [{
      date: "09/03",
      Opp: "Bowling Green",
      OppShort: "BG",
      Himg: "bowling_green1.png",
      Start: "noon",
      OSUScore: 77,
      OppScore: 10,
      loc: "H",
      tyards: 776,
      pyards: 417,
      ryards:359,
      ypp: 8.3,
      ygivenup:224,
      mynotes: ""
    }, {
      date: "09/10",
      Opp: "Tulsa",
      OppShort: "Tulsa",
      Himg: "tulsa1.png",
      Start: "noon",
      OSUScore: 48,
      OppScore: 3,
      loc: "H",
      tyards: 417,
      pyards: 148,
      ryards:269,
      ypp: 6.0,
      ygivenup:188,
      mynotes: ""
    }, {
      date: "09/17",
      Opp: "Oklahoma",
      OppShort: "Okl",
      Himg: "oklahoma1.png",
      Start: "noon",
      OSUScore: 45,
      OppScore: 24,
      loc: "A",
      tyards: 443,
      pyards: 152,
      ryards:291,
      ypp: 6.5,
      ygivenup:403,
      mynotes: "My 50th party.  Noah Brown celebrated for me.  He had 4 TD's including catch behind the defenders back"
    },{ 
      date: "10/01",
      Opp: "Rutgers",
      OppShort: "RTG",
      Himg: "Rutgers1.png",
      Start: "noon",
      OSUScore: 58,
      OppScore: 0,
      loc: "H",
      tyards: 669,
      pyards: 259,
      ryards:410,
      ypp: 7.5,
      ygivenup:116,
      mynotes: ""
    },{ 
      date: "10/08",
      Opp: "Indiana",
      OppShort: "Ind",
      Himg: "Indiana1.png",
      Start: "3:30",
      OSUScore: 38,
      OppScore: 17,
      loc: "H",
      tyards: 383,
      pyards: 93,
      ryards:290,
      ypp: 5.4,
      ygivenup:281,
      mynotes: "U-G-L-Y passing game.  But the rushing game worked. Too much talent overall for the Hoosiers to keep up."
    },{ 
      date: "10/15",
      Opp: "Wisconsin",
      OppShort: "WSC",
      Himg: "Wisconsin1.png",
      Start: "8pm",
      OSUScore: 30,
      OppScore: 23,
      loc: "H",
      tyards: 411,
      pyards: 226,
      ryards:185,
      ypp: 5.6,
      ygivenup:450,
      mynotes: "Game went into OT. Passing game struggled and defense seemed to let them run up and down the field.  But in the end JT got it done."
    },{ 
      date: "10/22",
      Opp: "Penn State",
      Start: "8pm",
      OppShort: "PSU",
      Himg: "penn_st1.png",
      OSUScore: 21,
      OppScore: 24,
      loc: "A",
      mynotes: "Blocked punt = FG. Blocked FG returned for TD.  We struggled on Offense whole game.  "
    },{ 
      date: "10/29",
      Opp: "Northwestern",
      OppShort: "NW",
      Himg: "Northwestern1.png",
      Start: "3:30pm",
      OSUScore: 0,
      OppScore: 0,
      loc: "H"
    },{ 
      date: "11/05",
      Opp: "Nebraska",
      OppShort: "NB",
      Himg: "Nebraska1.png",
      Start: "8pm",
      OSUScore: 0,
      OppScore: 0,
      loc: "H"
    },{ 
      date: "11/12",
      Opp: "Maryland",
      OppShort: "MD",
      Himg: "Maryland1.png",
      Start: "noon",
      OSUScore: 0,
      OppScore: 0,
      loc: "A"
    },{ 
      date: "11/19",
      Opp: "Michigan St",
      OppShort: "MSU",
      Himg: "michigan_st1.png",
      Start: "noon",
      OSUScore: 0,
      OppScore: 0,
      loc: "A"
    },{ 
      date: "11/26",
      Opp: "TTUN",
      OppShort: "TTUN",
      Himg: "michigan1.png",
      Start: "noon",
      OSUScore: 0,
      OppScore: 0,
      loc: "H"
    },{ 
      date: "12/02",
      Opp: "Championship",
      Start: "8pm",
      OppShort: "BTC",
      Himg: "th.png",
      OSUScore: 0,
      OppScore: 0,
      loc: "N"
    },{ 
      date: "12/31",
      Opp: "Bowl Game",
      OppShort: "BWL",
      Start: "8pm",
      OSUScore: 0,
      OppScore: 0,
      loc: "N"
    }]
  };
  res.json(gameJson);
});

module.exports = router;