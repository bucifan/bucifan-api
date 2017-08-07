var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
  var gameJson = {
    name: "OSU Schedule",
    curAP:2,
    curCoaches: 2,
    curCFP: 2,
    y2017: [{
      date: "08/31",
      Opp: "Indiana",
      OppShort: "Ind",
      Himg: "Indiana1.png",
      Start: "8pm (ESPN)",
      OSUScore: 0,
      OppScore: 0,
      loc: "A",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp:0,
      ygivenup:0,
      mynotes: ""
    }, {
      date: "09/09",
      Opp: "Oklahoma",
      OppShort: "OK",
      Himg: "oklahoma1.png",
      Start: "7:30pm (ABC)",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    }, {
      date: "09/16",
      Opp: "Army",
      OppShort: "Army",
      Himg: "army1.png",
      Start: "4:30pm (FOX)",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{ 
      date: "09/23",
      Opp: "UNLV",
      OppShort: "UNLV",
      Himg: "unlv1.png",
      Start: "tba",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards:0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{ 
      date: "09/30",
      Opp: "Rutgers",
      OppShort: "Rut",
      Himg: "Rutgers1.png",
      Start: "tba",
      OSUScore: 0,
      OppScore: 0,
      loc: "A",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{ 
      date: "10/07",
      Opp: "Maryland",
      OppShort: "MD",
      Himg: "Maryland1.png",
      Start: "tba",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{ 
      date: "10/14",
      Opp: "Nebraska",
      Start: "8pm",
      OppShort: "Neb",
      Himg: "Nebraska1.png",
      OSUScore: 0,
      OppScore: 0,
      loc: "A",
      mynotes: ""
    },{ 
      date: "10/21",
      Opp: "Bye",
      OppShort: "Bye",
      Himg: "th.png",
      Start: "",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{ 
      date: "10/28",
      Opp: "Penn State",
      OppShort: "PSU",
      Himg: "Penn_st1.png",
      Start: "3:30pm (FOX)",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{ 
      date: "11/04",
      Opp: "Iowa",
      OppShort: "IW",
      Himg: "iowa1.png",
      Start: "tba",
      OSUScore: 0,
      OppScore: 0,
      loc: "A",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: " "
    },{ 
      date: "11/11",
      Opp: "Michigan St",
      OppShort: "MSU",
      Himg: "michigan_st1.png",
      Start: "tba",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{
      date: "11/18",
      Opp: "Illinios",
      OppShort: "Ill",
      Himg: "Illinois1.png",
      Start: "tba",
      OSUScore: 0,
      OppScore: 0,
      loc: "H",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""      
    },{ 
      date: "11/25",
      Opp: "TTUN",
      OppShort: "TTUN",
      Himg: "michigan1.png",
      Start: "noon (FOX)",
      OSUScore: 0,
      OppScore: 0,
      loc: "A",
      tyards: 0,
      pyards: 0,
      ryards:0,
      ypp: 0,
      ygivenup:0,
      mynotes: ""
    },{ 
      date: "12/02",
      Opp: "Big 10 Championship",
      OppShort: "Big10",
      Himg: "th.png",
      Start: "8pm",
      OSUScore: 0,
      OppScore: 0,
      loc: "N",
      mynotes: ""
    }],
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
      OSUScore: 24,
      OppScore: 20,
      loc: "H",
      tyards: 431,
      pyards: 223,
      ryards:208,
      ypp: 5.6,
      ygivenup:406,
      mynotes: "Never quite seemed to dominate like we think we should.  Northwestern out coached us - called good plays at key times.  We simply won by having more overall talent."
    },{ 
      date: "11/05",
      Opp: "Nebraska",
      OppShort: "NB",
      Himg: "Nebraska1.png",
      Start: "8pm",
      OSUScore: 62,
      OppScore: 3,
      loc: "H",
      tyards: 590,
      pyards: 352,
      ryards:238,
      ypp: 6.9,
      ygivenup:204,
      mynotes: "Wow didn't see this coming! We dominated.  Eileen and I went to the game, beautiful night - way up in C deck, highest I have ever sat"
    },{ 
      date: "11/12",
      Opp: "Maryland",
      OppShort: "MD",
      Himg: "Maryland1.png",
      Start: "3:30pm",
      OSUScore: 62,
      OppScore: 3,
      loc: "A",
      tyards: 581,
      pyards: 328,
      ryards:253,
      ypp: 7.4,
      ygivenup:176,
      mynotes: "Maryland never in the game. "
    },{ 
      date: "11/19",
      Opp: "Michigan St",
      OppShort: "MSU",
      Himg: "michigan_st1.png",
      Start: "noon",
      OSUScore: 17,
      OppScore: 16,
      loc: "A",
      tyards: 310,
      pyards: 86,
      ryards:224,
      ypp: 4.6,
      ygivenup:334,
      mynotes: "UGHH!  Did not watch game - we went to Notre Dame game. "
    },{ 
      date: "11/26",
      Opp: "TTUN",
      OppShort: "TTUN",
      Himg: "michigan1.png",
      Start: "noon",
      OSUScore: 30,
      OppScore: 27,
      loc: "H",
      tyards: 310,
      pyards: 86,
      ryards:224,
      ypp: 4.6,
      ygivenup:334,
      mynotes: "Unbelievable! "
    },{ 
      date: "12/31",
      Opp: "Clemson",
      OppShort: "Clm",
      Himg: "fiesta.png",
      Start: "7pm",
      OSUScore: 0,
      OppScore: 31,
      loc: "N",
      mynotes: "One of the worst games ever!  Cannot believe an Urban Myer team would play this badly in a big game! Offense was terrible!"
    }]
  };
  res.json(gameJson);
});

module.exports = router;