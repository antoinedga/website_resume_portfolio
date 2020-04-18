var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index').status(200);
});

router.get('/resume', function(req, res, next) {
  res.sendFile(path.join(__dirname,'..','public','resume.pdf'));
});


module.exports = router;