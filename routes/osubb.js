var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  var osubbresp = {
        name: "OSU BasketBall Data",
        games: [
              {date:"11/11", Time:"", TV:"", Opp:"Navy", Loc: "Away", OppNH:"Midshipmen", OppShort: "Navy", BTG:0, OppScore:68, OSUScore:78, OppRank:0, OSURank:0},
              {date:"11/14", Time:"", TV:"", Opp:"North Carolina Central", Loc: "Home", OppNH:"Eagles", OppShort: "NCC", BTG:0, OppScore:63, OSUScore:69, OppRank:0, OSURank:0},
              {date:"11/17", Time:"7 pm ", TV:"btn", Opp:"Providence", Loc: "Home", OppNH:"Fryers", OppShort: "PRD", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/21", Time:"7 pm ", TV:"btn", Opp:"Western Carolina", Loc: "Home", OppNH:"", OppShort: "WC", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/23", Time:"7 pm ", TV:"espn3", Opp:"Jackson State", Loc: "Home", OppNH:"", OppShort: "JS", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/25", Time:"7 pm ", TV:"btn", Opp:"Marshall", Loc: "Home", OppNH:"", OppShort: "MSH", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/30", Time:"9 pm ", TV:"espn2", Opp:"Virginia", Loc: "Away", OppNH:"", OppShort: "VGA", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/3", Time:"4:30 pm ", TV:"", Opp:"Fairly Dickinson", Loc: "Home", OppNH:"", OppShort: "FD", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/6", Time:"7 pm ", TV:"espn3", Opp:"Florida Atlanic", Loc: "Home", OppNH:"", OppShort: "FA", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/10", Time:"6 pm ", TV:"btn", Opp:"UConn", Loc: "Home", OppNH:"", OppShort: "UConn", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/20", Time:"7 pm ", TV:"espn3", Opp:"Youngstown State", Loc: "Home", OppNH:"YSU", OppShort: "", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/22", Time:"9 pm ", TV:"espn2", Opp:"UNC Asheville", Loc: "Home", OppNH:"", OppShort: "UNCA", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/1", Time:"TBA", TV:"btn", Opp:"Illinios", Loc: "Away", OppNH:"Illini", OppShort: "Ill", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/5", Time:"7 pm ", TV:"espn", Opp:"Purdue", Loc: "Home", OppNH:"Boilermakers", OppShort: "PUR", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/8", Time:"7:30 pm ", TV:"btn", Opp:"Minnesota", Loc: "Away", OppNH:"Gophers", OppShort: "MINN", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/12", Time:"7 pm ", TV:"espn", Opp:"Wisconsin", Loc: "Away", OppNH:"Badgers", OppShort: "WISC", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/15", Time:"TBA", TV:"cbs", Opp:"Mich State", Loc: "Home", OppNH:"Spartans", OppShort: "MSU", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/18", Time:"9 pm ", TV:"btn", Opp:"Nebraska", Loc: "Away", OppNH:"Corn Huskers", OppShort: "NEB", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/22", Time:"1 pm ", TV:"btn", Opp:"Northwestern", Loc: "Home", OppNH:"Wildcats", OppShort: "NWN", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/25", Time:"7 pm ", TV:"btn", Opp:"Minnesota", Loc: "Home", OppNH:"Gophers", OppShort: "MINN", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/28", Time:"8 pm ", TV:"espn", Opp:"Iowa", Loc: "Away", OppNH:"Hawkeyes", OppShort: "IOWA", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/31", Time:"7 pm ", TV:"espn", Opp:"Maryland", Loc: "Home", OppNH:"Terapines", OppShort: "MD", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/4", Time:"6 pm ", TV:"espn2", Opp:"TTUN", Loc: "Away", OppNH:"Wolverines", OppShort: "M", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/8", Time:"7 pm ", TV:"btn", Opp:"Rutgers", Loc: "Home", OppNH:"Scarlet Nights", OppShort: "RUT", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/11", Time:"4 pm ", TV:"espn", Opp:"Maryland", Loc: "Away", OppNH:"Terapines", OppShort: "MD", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/14", Time:"9 pm ", TV:"espn", Opp:"Mich State", Loc: "Away", OppNH:"Spartans", OppShort: "MSU", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/18-19", Time:"TBA", TV:"", Opp:"Nebraska", Loc: "Home", OppNH:"Corn Huskers", OppShort: "NEB", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/23", Time:"9 pm ", TV:"espn", Opp:"Wisconsin", Loc: "Home", OppNH:"Badgers", OppShort: "WISC", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/28", Time:"8:30 pm ", TV:"btn", Opp:"Penn State", Loc: "Away", OppNH:"Nitney Lions", OppShort: "PSU", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"3/4", Time:"12 pm ", TV:"espn", Opp:"Indiana", Loc: "Home", OppNH:"Gophers", OppShort: "IND", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0}
            ]
    };
  res.json(osubbresp );
});

module.exports = router;