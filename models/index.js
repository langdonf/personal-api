const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/personal-api' );

module.exports.Game = require("./game.js")
module.exports.Character = require("./character.js")