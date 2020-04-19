const router = require('express').Router();
const quo = require('./models/quotes_model.js');


router.route('/').get((req,res) => {
  quo.find()
    .then(list => {
   return res.json({data: list}).status(200);
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;