const router = require('express').Router();
const quo = require('./models/quotes_model.js');
var cors = require('cors');

router.route('/').get(cors(), (req,res) => {
  quo.find()
    .then(list => {
        res.json(list).status(200);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;