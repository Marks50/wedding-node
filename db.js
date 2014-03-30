var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Guest = new Schema({
    name: String,
    code: Number,
    completed: {type: Boolean, default: false},
    attending_ceremony: {type: Boolean, default: false},
    attending_reception: {type: Boolean, default: false},
    dietary_restriction: {type: String, default: ''},
    updated_at: {type: Date, default: Date.now}
});

mongoose.model('Guest', Guest);
mongoose.connect('mongodb://localhost/guests');