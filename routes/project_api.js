const router = require('express').Router();
const proj = require('./models/projects_model');
var cors = require('cors');

router.route('/').get((req,res) => {
    proj.find()
      .then(list => {
          res.status(200).json(list);
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
  


  router.route('/add_project').post((req,res) => {
    
    const name = req.body.name || null;
    const semester = req.body.semester || null;
    const description = req.body.description
    const tech = req.body.tech;
    const temp = new proj({name,tech,description,semester});
  

    if (temp.name == "" || tech.length == 0 || description == 0 || semester == "")
      return res.status(400).json('error in adding');
    
    temp.save().then(() => res.json(temp).status(200))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  module.exports = router;