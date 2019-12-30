const router = require('express').Router();
const proj = require('./models/projects_model');

router.route('/').get((req,res) => {
    proj.find()
      .then(list => {
          res.json(list)
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  module.exports = router;