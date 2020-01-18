var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index').status(200);
});
router.get('/admin/', function(req, res, next) {
  res.render('Backemd_Post/dashboard').status(200);
});

module.exports = router;
