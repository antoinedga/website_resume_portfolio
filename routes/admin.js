var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin/:pass', function(req, res) {
if(req.params.pass == "maria")
  res.render("404");
else
  res.render('Backend_Post/dashboard').status(200);
});


module.exports = router;
