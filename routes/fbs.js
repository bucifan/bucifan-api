var express = require('express');
var router = express.Router();
router.get('/:syear', function(req, res, next) {
  var rtnJSON ={"summary":"year not matched :" + req.params.syear};
  switch(req.params.syear){ 
    case "2018":
      rtnJSON = {
        games: [
          {GameDate: "9/1/2018", Loc:"H", Opp:"Oregon State", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""}, 
          {GameDate: "9/8/2018", Loc:"H", Opp:"Rutgers", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},	 
          {GameDate: "9/15/2018", Loc:"Dallas TX", Opp:"Texas Christian", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},	 
          {GameDate: "9/22/2018", Loc:"H", Opp:"Tulane", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},	 
          {GameDate: "9/29/2018", Loc:"A", Opp:"Penn State", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},	 
          {GameDate: "10/6/2018", Loc:"H", Opp:"Indiana", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},	 
          {GameDate: "10/13/2018", Loc:"H", Opp:"Minnesota", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""}, 
          {GameDate: "10/20/2018", Loc:"A", Opp:"Purdue",  OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""}, 
          {GameDate: "11/3/2018", Loc:"H", Opp:"Nebraska", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},	 
          {GameDate: "11/10/2018", Loc:"A", Opp:"Michigan State", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "11/17/2018", Loc:"A", Opp:"Maryland",  OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},	 
          {GameDate: "11/24/2018", Loc:"H", Opp:"TTUN",  OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, comments:""},
          ]
        };
      break;
    case "2017":
      rtnJSON = {
        games: [
          {GameDate: "8/31/2017", Loc:"H", Rank:"2", Opp:"Indiana", OppImage: "ind-sm.png", OppShort: "IND", OppScore:49, OSUScore:21, comments:""},	 
          {GameDate: "9/9/2017", Loc:"H", Rank:"2", OppRank:"5", Opp:"Oklahoma", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:31, OSUScore:16, comments:""},	 
          {GameDate: "9/16/2017", Loc:"H", Rank:"8", Opp:"Army", OppImage: "ind-sm.png", OppShort: "Army", OppScore:7, OSUScore:38, comments:""},
          {GameDate: "9/23/2017", Loc:"H", Rank:"10", Opp:"Nevada-Las Vegas", OppImage: "ind-sm.png", OppShort: "UNLV", OppScore:21, OSUScore:54, comments:""},	 
          {GameDate: "9/30/2017", Loc:"A", Rank:"11", Opp:"Rutgers", OppImage: "ind-sm.png", OppShort: "RUT", OppScore:0, OSUScore:56, comments:""},	 
          {GameDate: "10/7/2017", Loc:"H", Rank:"10", Opp:"Maryland", OppImage: "ind-sm.png", OppShort: "MAR", OppScore:14, OSUScore:62, comments:""},	 
          {GameDate: "10/14/2017", Loc:"A", Rank:"9", Opp:"Nebraska", OppImage: "ind-sm.png", OppShort: "NEB", OppScore:14, OSUScore:56, comments:" went to game "},
          {GameDate: "10/28/2017", Loc:"H", Rank:"6", OppRank:"2", Opp:"Penn State", OppImage: "ind-sm.png", OppShort: "PSU", OppScore:38, OSUScore:39, comments:""},	 
          {GameDate: "11/4/2017", Loc:"A", Rank:"3", Opp:"Iowa", OppImage: "ind-sm.png", OppShort: "IOWA", OppScore:55, OSUScore:24, comments:""},
          {GameDate: "11/11/2017", Loc:"H", Rank:"11", OppRank:"13", Opp:"Michigan State", OppImage: "ind-sm.png", OppShort: "MSU", OppScore:3, OSUScore:48, comments:""},	 
          {GameDate: "11/18/2017", Loc:"H", Rank:"11", Opp:"Illinois", OppImage: "ind-sm.png", OppShort: "Ill", OppScore:14, OSUScore:52, comments:""}, 
          {GameDate: "11/25/2017", Loc:"A", Rank:"8", Opp:"TTUN", OppImage: "ind-sm.png", OppShort: "TTUN", OppScore:20, OSUScore:31, comments:""}, 
          {GameDate: "12/2/2017", Loc:"Indianapolois", Rank:"8", OppRank:"5", Opp:" Wisconsin", OppImage: "ind-sm.png", OppShort: "WISC", OppScore:21, OSUScore:27, comments:"Big Ten championship"},
          {GameDate: "12/29/2017", Loc:"Dallas", Rank:"5", OppRank:"8", Opp:"Sothern Cal", OppImage: "ind-sm.png", OppShort: "USC", OppScore:7, OSUScore:24, comments:"Cotton Bowl"}
        ]
        };
      break;
    case "2016":
      rtnJSON = {
        games: [
          {GameDate: "9/3/2016",Loc:"H", Rank:"6", Opp:"Bowling Green", OppImage: "ind-sm.png", OppShort: "BGSU", OppScore:10, OSUScore:77, comments:""},	 
          {GameDate: "9/10/2016",Loc:"H", Rank:"6", Opp:"Tulsa", OppImage: "ind-sm.png", OppShort: "Tulsa", OppScore:3, OSUScore:48, comments:""},	 
          {GameDate: "9/17/2016",Loc:"A", Rank:"3", OppRan:"14", Opp:"Oklahoma", OppImage: "ind-sm.png", OppShort: "OK", OppScore:24, OSUScore:45, comments:"went to game"},	 
          {GameDate: "10/1/2016",Loc:"H", Rank:"2", Opp:"Rutgers", OppImage: "ind-sm.png", OppShort: "RUT", OppScore:0, OSUScore:58, comments:""}, 
          {GameDate: "10/8/2016",Loc:"H", Rank:"2", Opp:"Indiana", OppImage: "ind-sm.png", OppShort: "IND", OppScore:17, OSUScore:38, comments:""}, 
          {GameDate: "10/15/2016",Loc:"A", Rank:"2", OppRank:"8", Opp:"Wisconsin", OppImage: "ind-sm.png", OppShort: "WISC", OppScore:23, OSUScore:30, comments:"OT"}, 
          {GameDate: "10/22/2016",Loc:"A", Rank:"2", Opp:"Penn State", OppImage: "ind-sm.png", OppShort: "PSU", OppScore:24, OSUScore:21, comments:""}, 
          {GameDate: "10/29/2016",Loc:"H", Rank:"6", Opp:"Northwestern", OppImage: "ind-sm.png", OppShort: "NW", OppScore:20, OSUScore:24, comments:""}, 
          {GameDate: "11/5/2016",Loc:"H", Rank:"6", Opp:"Nebraska", OppImage: "ind-sm.png", OppShort: "NEB", OppScore:3, OSUScore:62, comments:"went to game"}, 
          {GameDate: "11/12/2016",Loc:"A", Rank:"6", Opp:"Maryland", OppImage: "ind-sm.png", OppShort: "MD", OppScore:3, OSUScore:62, comments:""}, 
          {GameDate: "11/19/2016",Loc:"A", Rank:"2", Opp:"Michigan State", OppImage: "ind-sm.png", OppShort: "MSU", OppScore:16, OSUScore:17, comments:""}, 
          {GameDate: "11/26/2016",Loc:"H", Rank:"2", OppRank:"3", Opp:"TTUN", OppImage: "ind-sm.png", OppShort: "TTUN", OppScore:27, OSUScore:30, comments:" 2 Overtimes"},	 
          {GameDate: "12/31/2016",Loc:"Glendale Arizona", Rank:"3", OppRank:"2", Opp:"Clemson", OppImage: "ind-sm.png", OppShort: "IND", OppScore:31, OSUScore:0, comments:"Playoff Game"}
        ]
        };
      break;
    case "2015":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;
  case "2014":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;
    case "2013":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;
    case "2012":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;
    case "2011":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;  
    case "2010":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;  
    case "2009":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break; 
    case "2008":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;  
    case "2007":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;
    case "2006":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break; 
    case "2005":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break; 
    case "2004":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break; 
    case "2003":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break; 
    case "2002":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;
    case "2001":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break; 
    case "2000":
      rtnJSON = {
        games: [
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
          {GameDate: "",Loc:"H", Rank:"", Opp:"", OppImage: "", OppShort: "", OppScore:0, OSUScore:0, comments:""},
        ]
        };
      break;   
  }    
  res.json(rtnJSON);
});

module.exports = router;
