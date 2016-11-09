var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  var smbbresp = {
        name: "St. Matthew 8 Grade BasketBall Data",
        games: [
              {date:"11/1", Opp:"Bowling Green", Loc:"Home", OppScore:0, SMScore:0, 
                MikeyStat:{
                  points:0,
                  rebounds:0,
                  steals:0,
                  notes:""
                }
              },
              {date:"11/2", Opp:"Bowling Green", Loc:"Home", OppScore:0, SMScore:0, 
                MikeyStat:{
                  points:0,
                  rebounds:0,
                  steals:0,
                  notes:""
                }
              },
              {date:"11/3", Opp:"Bowling Green", Loc:"Home", OppScore:0, SMScore:0, 
                MikeyStat:{
                  points:0,
                  rebounds:0,
                  steals:0,
                  notes:""
                }
              }
            ]
    };
  res.json(smbbresp );
});

module.exports = router;