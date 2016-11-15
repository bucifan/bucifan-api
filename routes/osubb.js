var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  var osubbresp = {
        name: "OSU BasketBall Data",
        games: [
              {date:"11/11", Time:"", TV:"", Opp:"Navy", Loc: "Away", OppNH:"Midshipmen", BTG:0, OppScore:68, OSUScore:78, OppRank:0, OSURank:0},
              {date:"11/14", Time:"", TV:"", Opp:"North Carolina Central", Loc: "Home", OppNH:"Eagles", BTG:0, OppScore:63, OSUScore:69, OppRank:0, OSURank:0},
              {date:"11/17", Time:"", TV:"", Opp:"Providence", Loc: "Home", OppNH:"Fryers", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/21", Time:"", TV:"", Opp:"Western Carolina", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/23", Time:"", TV:"", Opp:"Jackson State", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/25", Time:"", TV:"", Opp:"Marshall", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"11/30", Time:"", TV:"", Opp:"Virginia", Loc: "Away", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/3", Time:"", TV:"", Opp:"Fairly Dickinson", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/6", Time:"", TV:"", Opp:"Florida Atlanic", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/10", Time:"", TV:"", Opp:"UConn", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/20", Time:"", TV:"", Opp:"Youngstown State", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"12/22", Time:"", TV:"", Opp:"UNC Asheville", Loc: "Home", OppNH:"", BTG:0, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/1", Time:"", TV:"", Opp:"Illinios", Loc: "Away", OppNH:"Illini", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/5", Time:"", TV:"", Opp:"Purdue", Loc: "Home", OppNH:"Boilermakers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/8", Time:"", TV:"", Opp:"Minnesota", Loc: "Away", OppNH:"Gophers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/12", Time:"", TV:"", Opp:"Wisconsin", Loc: "Away", OppNH:"Badgers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/15", Time:"", TV:"", Opp:"Mich State", Loc: "Home", OppNH:"Spartans", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/18", Time:"", TV:"", Opp:"Nebraska", Loc: "Away", OppNH:"Corn Huskers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/22", Time:"", TV:"", Opp:"Northwestern", Loc: "Home", OppNH:"Wildcats", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/25", Time:"", TV:"", Opp:"Minnesota", Loc: "Home", OppNH:"Gophers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/28", Time:"", TV:"", Opp:"Iowa", Loc: "Away", OppNH:"Hawkeyes", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"1/31", Time:"", TV:"", Opp:"Maryland", Loc: "Home", OppNH:"Terapines", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/4", Time:"", TV:"", Opp:"TTUN", Loc: "Away", OppNH:"Wolverines", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/8", Time:"", TV:"", Opp:"Rutgers", Loc: "Home", OppNH:"Scarlet Nights", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/11", Time:"", TV:"", Opp:"Maryland", Loc: "Away", OppNH:"Terapines", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/15", Time:"", TV:"", Opp:"Mich State", Loc: "Away", OppNH:"Spartans", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/18-19", Time:"", TV:"", Opp:"Nebraska", Loc: "Home", OppNH:"Corn Huskers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/23", Time:"", TV:"", Opp:"Wisconsin", Loc: "Home", OppNH:"Badgers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"2/28", Time:"", TV:"", Opp:"Penn State", Loc: "Away", OppNH:"Nitney Lions", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0},
              {date:"3/4", Time:"", TV:"", Opp:"Indiana", Loc: "Home", OppNH:"Gophers", BTG:1, OppScore:0, OSUScore:0, OppRank:0, OSURank:0}
            ]
    };
  res.json(osubbresp );
});

module.exports = router;