var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('Backend_Post/dashboard.html').status(200);
});


module.exports = router;