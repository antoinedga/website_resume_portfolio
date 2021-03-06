const router = require('express').Router();
const proj = require('./models/projects_model');
const Validator = require("validator");
const isEmpty = require("is-empty");
const path = require('path');

router.route('/').get((req,res) => {
    proj.find()
      .then(list => {
          res.status(200).json(list);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/add_project/:id').get((req,res) => {
      
      res.status(200).sendFile(
        path.resolve(__dirname, '../public/dashboard.html'));
  });
  
  
  router.route('/add_project/:id').post((req,res) => {
    
    if(req.body.password != "1164")
      res.status(400).json({error: "not allowed"});

    let name = !isEmpty(req.body.name) ? req.body.name : "";
    let semester = !isEmpty(req.body.semester) ? req.body.semester : "";
    let description;
    let tech;
    let temp;

    
    if (Validator.isEmpty(req.body.name) || Validator.isEmpty(req.body.semester))
      return res.status(400).json("did not add project");
    else {
      description = req.body.description.split(". ");
      tech = req.body.tech.split(". ");
    }
    temp = new proj({name,tech,description,semester});
    temp.save().then(() => res.json({message: "Added Project Succesfully" }).status(200))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;