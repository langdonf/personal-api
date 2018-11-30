var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CharacterSchema = new Schema({
  name: String,
  image: String
});

var Character = mongoose.model('Character', CharacterSchema);
module.exports = Character;