const router = require('express').Router();
const quo = require('./models/quotes_model.js');

router.route('/').get((req,res) => {
  quo.find()
    .then(list => {
        res.json(list)
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;