var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'bower_components')));

// define routes
app.use(require('./routes/todos.js'));

app.listen(8080, function() {
  console.log('on 8080');
});