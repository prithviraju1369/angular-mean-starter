var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var compression = require('compression');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/mean');

var todos = require('./svr/routes/todos.js');

app.use(compression());

app.use(express.static(path.join(__dirname, './dist')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/meanapi/todo', todos);


/// app runs in port
app.listen(process.env.PORT || 3000, function () {
    console.log('listening at 3000');
});