var express = require('express');
var router = express.Router();

/* GET OSU Schedule listing. */
router.get('/osusched', function(req, res, next) {
    var responseJSON = {
        name: "OSU Schedule",
        y2016: [
              {date:"09/03", Opp:"Bowling Green", OppShort: "BG"},
              {date:"09/10", Opp:"Tulsa", OppShort: "Tulsa"},
              {date:"09/17", Opp:"Oklahoma", OppShort: "Okl"}
            ]
    }
  res.json(responseJSON);
  
});

module.exports = router;