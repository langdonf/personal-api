var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var GameSchema = new Schema({
  title: String,
  developer: String,
  image: String,
  type: String,
  hoursPlayed: Number,
  stillPlaying: Boolean,
  character: {
    type: Schema.Types.ObjectId,
    ref: 'Character'
  },
});


var Game = mongoose.model('Game', GameSchema);
module.exports = Game;