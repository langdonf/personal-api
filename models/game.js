var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  title: String,
  developer: String,
  image: String,
  type: String,
  hoursPlayed: Number,
  stillPlaying: Boolean,
  mainCharacter:{
    name: String,
    image: String
  }
});


var Game= mongoose.model('Game', GameSchema);
module.exports = Game;