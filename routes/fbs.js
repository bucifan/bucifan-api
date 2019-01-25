var express = require('express');
var router = express.Router();
router.get('/:syear', function(req, res, next) {
  var rtnJSON =req.params;
  switch(req.params.syear){ 
    case "2018":
      rtnJSON = {
        games: [
              {season:"1978", Opp:"Clemson", Bowl:"Gator", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, Comments: ""},
              {season:"1989", Opp:"Auburn", Bowl:"Hall of Fame", OppImage: "ind-sm.png", OppShort: "AUB", OppScore:0, OSUScore:0, Comments: ""},
            ]
        };
      break;
    case "2017":
      rtnJSON = {
        games: [
              {season:"1978", Opp:"Clemson", Bowl:"Gator", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, Comments: ""},
              {season:"1989", Opp:"Auburn", Bowl:"Hall of Fame", OppImage: "ind-sm.png", OppShort: "AUB", OppScore:0, OSUScore:0, Comments: ""},
            ]
        };
      break;
  }    
  res.json(rtnJSON);
});

module.exports = router;
