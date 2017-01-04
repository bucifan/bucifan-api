var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  var osubbresp = {
        name: "OSU BasketBall Data",
        games: [
              {date:"11/11", Time:"", TV:"", Opp:"Navy",  OppImage: "navy-sm.png", Loc: "Away", OppNH:"Midshipmen", OppShort: "Navy", BTG:0, OppScore:68, OSUScore:78, OppRank:0, OSURank:0},
              {date:"11/14", Time:"", TV:"", Opp:"North Carolina Cntrl",  OppImage: "nccu-sm.png", Loc: "Home", OppNH:"Eagles", OppShort: "NCC", BTG:0, OppScore:63, OSUScore:69, OppRank:0, OSURank:0},
              {date:"11/17", Time:"7 pm ", TV:"btn", Opp:"Providence",  OppImage: "prov-sm.png", Loc: "Home", OppNH:"Fryers", OppShort: "PRD", BTG:0, OppScore:67, OSUScore:72, OppRank:0, OSURank:0},
              {date:"11/21", Time:"7 pm ", TV:"btn", Opp:"Western Carolina",  OppImage: "wcar-sm.png", Loc: "Home", OppNH:"WC", OppShort: "WC", BTG:0, OppScore:38, OSUScore:66, OppRank:0, OSURank:0},
              {date:"11/23", Time:"7 pm ", TV:"espn3", Opp:"Jackson State",  OppImage: "jast-sm.png", Loc: "Home", OppNH:"", OppShort: "JS", BTG:0, OppScore:47, OSUScore:78, OppRank:0, OSURank:0},
              {date:"11/25", Time:"7 pm ", TV:"btn", Opp:"Marshall",  OppImage: "mars-sm.png", Loc: "Home", OppNH:"", OppShort: "MSH", BTG:0, OppScore:70, OSUScore:111, OppRank:0, OSURank:0},
              {date:"11/30", Time:"9 pm ", TV:"espn2", Opp:"Virginia",  OppImage: "va-sm.png", Loc: "Away", OppNH:"", OppShort: "VGA", BTG:0, OppScore:63, OSUScore:61, OppRank:0, OSURank:0},
              {date:"12/3", Time:"4:30 pm ", TV:"", Opp:"Fairly Dickinson",  OppImage: "flei-sm.png", Loc: "Home", OppNH:"", OppShort: "FD", BTG:0, OppScore:62, OSUScore:70, OppRank:0, OSURank:0},
              {date:"12/6", Time:"7 pm ", TV:"espn3", Opp:"Florida Atlanic",  OppImage: "fau-sm.png", Loc: "Home", OppNH:"", OppShort: "FA", BTG:0, OppScore:79, OSUScore:77, OppRank:0, OSURank:0},
              {date:"12/10", Time:"6 pm ", TV:"btn", Opp:"UConn",  OppImage: "conn-sm.png", Loc: "Home", OppNH:"", OppShort: "UConn", BTG:0, OppScore:60, OSUScore:64, OppRank:0, OSURank:0},
              {date:"12/17", Time:"3 pm ", TV:"cbs", Opp:"UCLA",  OppImage: "ucla-sm.png", Loc: "Away", OppNH:"Bruins", OppShort: "UCLA", BTG:0, OppScore:86, OSUScore:73, OppRank:0, OSURank:0},
              {date:"12/20", Time:"7 pm ", TV:"espn3", Opp:"Youngstown State",  OppImage: "youn-sm.png", Loc: "Home", OppNH:"YSU", OppShort: "", BTG:0, OppScore:40, OSUScore:77, OppRank:0, OSURank:0},
              {date:"12/22", Time:"9 pm ", TV:"espn2", Opp:"UNC Asheville",  OppImage: "unca-sm.png", Loc: "Home", OppNH:"", OppShort: "UNCA", BTG:0, OppScore:77, OSUScore:79, OppRank:0, OSURank:0},
              {date:"1/1", Time:"7 pm", TV:"btn", Opp:"Illinios",  OppImage: "ill-sm.png", Loc: "Away", OppNH:"Illini", OppShort: "Ill", BTG:1, OppScore:75, OSUScore:70, OppRank:0, OSURank:0},
              {date:"1/5", Time:"7 pm ", TV:"espn", Opp:"Purdue",  OppImage: "pur-sm.png", Loc: "Home", OppNH:"Boilermakers", OppShort: "PUR", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/8", Time:"7:30 pm ", TV:"btn", Opp:"Minnesota",  OppImage: "minn-sm.png", Loc: "Away", OppNH:"Gophers", OppShort: "MINN", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/12", Time:"7 pm ", TV:"espn", Opp:"Wisconsin",  OppImage: "wis-sm.png", Loc: "Away", OppNH:"Badgers", OppShort: "WISC", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/15", Time:"1:30 pm  ", TV:"cbs", Opp:"Mich State",  OppImage: "msu-sm.png", Loc: "Home", OppNH:"Spartans", OppShort: "MSU", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/18", Time:"9 pm ", TV:"btn", Opp:"Nebraska",  OppImage: "neb-sm.png", Loc: "Away", OppNH:"Corn Huskers", OppShort: "NEB", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/22", Time:"1 pm ", TV:"btn", Opp:"Northwestern",  OppImage: "nw-sm.png", Loc: "Home", OppNH:"Wildcats", OppShort: "NWN", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/25", Time:"7 pm ", TV:"btn", Opp:"Minnesota",  OppImage: "minn-sm.png", Loc: "Home", OppNH:"Gophers", OppShort: "MINN", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/28", Time:"8 pm ", TV:"espn", Opp:"Iowa",  OppImage: "iowa-sm.png", Loc: "Away", OppNH:"Hawkeyes", OppShort: "IOWA", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/31", Time:"7 pm ", TV:"espn", Opp:"Maryland",  OppImage: "md-sm.png", Loc: "Home", OppNH:"Terapines", OppShort: "MD", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/4", Time:"6 pm ", TV:"espn2", Opp:"TTUN",  OppImage: "mich-sm.png", Loc: "Away", OppNH:"Wolverines", OppShort: "M", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/8", Time:"7 pm ", TV:"btn", Opp:"Rutgers",  OppImage: "rutu-sm.png", Loc: "Home", OppNH:"Scarlet Nights", OppShort: "RUT", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/11", Time:"4 pm ", TV:"espn", Opp:"Maryland",  OppImage: "md-sm.png", Loc: "Away", OppNH:"Terapines", OppShort: "MD", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/14", Time:"9 pm ", TV:"espn", Opp:"Mich State",  OppImage: "msu-sm.png", Loc: "Away", OppNH:"Spartans", OppShort: "MSU", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/18", Time:"TBA ", TV:"", Opp:"Nebraska",  OppImage: "neb-sm.png", Loc: "Home", OppNH:"Corn Huskers", OppShort: "NEB", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/23", Time:"9 pm ", TV:"espn", Opp:"Wisconsin",  OppImage: "wis-sm.png", Loc: "Home", OppNH:"Badgers", OppShort: "WISC", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/28", Time:"8:30 pm ", TV:"btn", Opp:"Penn State",  OppImage: "psu-sm.png", Loc: "Away", OppNH:"Nitney Lions", OppShort: "PSU", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"3/4", Time:"12 pm ", TV:"espn", Opp:"Indiana",  OppImage: "ind-sm.png", Loc: "Home", OppNH:"Gophers", OppShort: "IND", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0}
            ]
    };
  res.json(osubbresp );
});

module.exports = router;