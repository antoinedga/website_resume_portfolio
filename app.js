var express = require('express');
var path = require('path');
const helmet = require('helmet');
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require("body-parser");
const favicon = require('serve-favicon');
var indexRouter = require('./routes/index');
const uri = require("./routes/keys.js").mongoURI;
var api_quotes = require("./routes/data_api");
var api_projects = require("./routes/project_api");


var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public/media_content', 'logo1.png')));

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true } ).
then(() => {
  console.log("MongoDB has successfully connected\n");
}).catch(err => console.log(err));


app.use('/', indexRouter);
app.use('/lines', api_quotes); 
app.use('/projects', api_projects); 


app.get('*', function(req, res){
  res.status(404).sendFile(__dirname + '/public/404.html');
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log("Server Up and Running on Port " + port + "!"));

module.exports = app;