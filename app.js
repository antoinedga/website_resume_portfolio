var express = require('express');
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
const uri = require("./routes/keys.js").mongoURI;
var api_quotes = require("./routes/data_api");
var api_projects = require("./routes/project_api");


var app = express();
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
  // DB Config


mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } ).
then(() => {
  console.log("MongoDB has successfully connected\n");
}).catch(err => console.log(err));


app.use('thegordonexpereience.herokuapp.com/', indexRouter);
app.use('/lines', api_quotes); 
app.use('/projects', api_projects); 

app.get('*', function(req, res){
  res.status(404).sendFile(__dirname + '/public/404.html');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server Up and Running on Port " + port + "!"));

module.exports = app;