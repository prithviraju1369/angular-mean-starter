var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SampleSchema = new Schema({
    text: String
});
module.exports = mongoose.model('Sample', SampleSchema);