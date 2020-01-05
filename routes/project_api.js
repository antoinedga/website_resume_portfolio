const router = require('express').Router();
const proj = require('./models/projects_model');

router.route('/').get((req,res) => {
    proj.find()
      .then(list => {
          res.json(list);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


  router.route('/add_project').post((req,res) => {
    
    const name = req.body.name;
    const semester = req.body.semester;
    const description = req.body.description;
    const tech = req.body.tech;
    const temp = new proj({name,tech,description,semester});

    temp.save().then(() => res.json('Project added Successfully!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;