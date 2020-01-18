const router = require('express').Router();
const proj = require('./models/projects_model');
const Validator = require("validator");
const isEmpty = require("is-empty");

router.route('/').get((req,res) => {
    proj.find()
      .then(list => {
          res.status(200).json(list);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


  router.route('/add_project').post((req,res) => {
    
    const name = !isEmpty(req.body.name) ? req.body.name : "";
    const semester = !isEmpty(req.body.semester) ? req.body.name : "";
    const description = req.body.description;
    const tech = req.body.tech;
    const temp = new proj({name,tech,description,semester});
    
    if (Validator.isEmpty(req.body.name) || Validator.isEmpty(req.body.semester))
      return res.status(400).json("did not add project");
 
    temp.save().then(() => res.json(temp).status(200))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;