var express = require('express');
var Sample = require('./../models/sample');
var router = express.Router();


router.get('/', function (req, res) {
    Sample.findOne({}, function (err, docs) {
        if (err) {
            console.log(err);
        }
        res.send(docs?docs:{});
    });
});

module.exports = router;