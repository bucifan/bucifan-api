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
      loc: "H"
    }, {
      date: "09/10",
      Opp: "Tulsa",
      OppShort: "Tulsa",
      Himg: "tulsa1.png",
      Start: "noon",
      OSUScore: 48,
      OppScore: 3,
      loc: "H"
    }, {
      date: "09/17",
      Opp: "Oklahoma",
      OppShort: "Okl",
      Himg: "oklahoma1.png",
      Start: "noon",
      OSUScore: 45,
      OppScore: 24,
      loc: "A"
    },{ 
      date: "10/01",
      Opp: "Rutgers",
      OppShort: "RTG",
      Himg: "Rutgers1.png",
      Start: "noon",
      OSUScore: 58,
      OppScore: 0,
      loc: "H"
    },{ 
      date: "10/08",
      Opp: "Indiana",
      OppShort: "Ind",
      Himg: "Indiana1.png",
      Start: "noon",
      OSUScore: 0,
      OppScore: 0,
      loc: "H"
    },{ 
      date: "10/15",
      Opp: "Wisconsin",
      OppShort: "WSC",
      Himg: "Wisconsin1.png",
      Start: "8pm",
      OSUScore: 0,
      OppScore: 0,
      loc: "H"
    },{ 
      date: "10/22",
      Opp: "Penn State",
      Start: "noon",
      OppShort: "PSU",
      Himg: "penn_st1.png",
      OSUScore: 0,
      OppScore: 0,
      loc: "A"
    },{ 
      date: "10/29",
      Opp: "Northwestern",
      OppShort: "NW",
      Himg: "Northwestern1.png",
      Start: "5:30pm",
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