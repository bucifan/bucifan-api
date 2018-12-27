var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  var awayLog = {
        name: "Away Games Log",
        games: [
              {season:"1978", Opp:"Clemson", Bowl:"Gator", OppImage: "ind-sm.png", OppShort: "CLEM", OppScore:0, OSUScore:0, Comments: ""},
              {season:"1989", Opp:"Auburn", Bowl:"Hall of Fame", OppImage: "ind-sm.png", OppShort: "AUB", OppScore:0, OSUScore:0, Comments: ""},
            ]
    };
  res.json(awayLog);
});

module.exports = router;
