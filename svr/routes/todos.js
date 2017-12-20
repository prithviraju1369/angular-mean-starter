var express = require('express');
var Todo = require('./../models/todos');
var router = express.Router();


router.get('/', function (req, res) {
    Todo.find({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        res.send((docs && docs.length>0)?docs:{});
    });
});

router.post('/', function (req, res) {
    var todo = new Todo({
        text: req.body.title
    });
    todo.save(function (err, saved) {
        if (err) {
            console.log(err);
        } else {
            res.send(saved);
        }
    });
});

module.exports = router;