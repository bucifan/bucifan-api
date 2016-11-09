var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
var smbbresp = {
        name: "St. Matthew 8 Grade BasketBall Data",
        players:[
            {id:"Mikey", name:"Mikey Roach", num:23, height:"5.10", pic: "", pos:"G", mom:"Eileen", dad: "Rob"},
            {id:"WillH", name:"Will Hast", num:23, height:"6.0", pic: "", pos:"F/C", mom:"Megan", dad: "Jeff"},
            {id:"WillM", name:"Will Miller", num:23, height:"6.1", pic: "", po:"G/F/C", mom:"", dad: "Jeff"},
            {id:"Corey", name:"Corey Moriarty", num:23, height:"5.11", pic: "", pos:"G", mom:"Jody", dad: "Patrick"},
            {id:"Ako", name:"Akaolisa Nwokolo", num:23, height:"5.11", pic: "", pos:"F", mom:"", dad: ""},
            {id:"John", name:"John Sands", num:23, height:"5.11", pic: "", pos:"F", mom:"", dad: ""},
            {id:"JackT", name:"Jack Tomlinson", num:23, height:"5.11", pic: "", pos:"G/F", mom:"", dad: ""},
            {id:"JackL", name:"Jack Lindeman", num:23, height:"5.11", pic: "", pos:"F/C", mom:"", dad: "Tim"}
          ],
        games: [
              {date:"11/1", Opp:"Bowling Green", Loc:"Home", OppScore:0, SMScore:0, 
                Stats:{
                  Mikey: {pld: "N", pts: 0, rbs: 0, stls:0},
                  WillH: {pld: "N", pts: 0, rbs: 0, stls:0},
                  WillM: {pld: "N", pts: 0, rbs: 0, stls:0},
                  Corey: {pld: "N", pts: 0, rbs: 0, stls:0},
                  Ako: {pld: "N", pts: 0, rbs: 0, stls:0},
                  John: {pld: "N", pts: 0, rbs: 0, stls:0},
                  JackT: {pld: "N", pts: 0, rbs: 0, stls:0},
                  JackL: {pld: "N", pts: 0, rbs: 0, stls:0}
                 
                }
              },
              {date:"11/2", Opp:"Bowling Green", Loc:"Home", OppScore:0, SMScore:0, 
                Stats:{
                  Mikey: {pld: "N", pts: 0, rbs: 0, stls:0},
                  WillH: {pld: "N", pts: 0, rbs: 0, stls:0},
                  WillM: {pld: "N", pts: 0, rbs: 0, stls:0},
                  Corey: {pld: "N", pts: 0, rbs: 0, stls:0},
                  Ako: {pld: "N", pts: 0, rbs: 0, stls:0},
                  John: {pld: "N", pts: 0, rbs: 0, stls:0},
                  JackT: {pld: "N", pts: 0, rbs: 0, stls:0},
                  JackL: {pld: "N", pts: 0, rbs: 0, stls:0}
                 
                }
              },
              {date:"11/3", Opp:"Bowling Green", Loc:"Home", OppScore:0, SMScore:0, 
                Stats:{
                  Mikey: {pld: "N", pts: 0, rbs: 0, stls:0},
                  WillH: {pld: "N", pts: 0, rbs: 0, stls:0},
                  WillM: {pld: "N", pts: 0, rbs: 0, stls:0},
                  Corey: {pld: "N", pts: 0, rbs: 0, stls:0},
                  Ako: {pld: "N", pts: 0, rbs: 0, stls:0},
                  John: {pld: "N", pts: 0, rbs: 0, stls:0},
                  JackT: {pld: "N", pts: 0, rbs: 0, stls:0},
                  JackL: {pld: "N", pts: 0, rbs: 0, stls:0}
                 
                }
              }
            ]
    };
  res.json(smbbresp );
});

module.exports = router;