var mongoose = require('mongoose');
var Guest = mongoose.model('Guest');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', {});
};
