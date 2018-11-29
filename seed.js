const db = require("./models");

var games_list = [
  {
    title: "Fortnite",
    developer: "Epic Games",
    image: "public/images/fortnite.png",
    type: "Battle Royal",
    hoursPlayed: 640,
    stillPlaying: true,
    mainCharacter:{
      name: "Jonesy",
      image: "public/images/jonsey.png"
    }
  },
  {
    title: "Overwatch",
    developer: "Blizzard",
    image: "public/images/overwatch.png",
    type: "Online Multiplayer FPS",
    hoursPlayed: 430,
    stillPlaying: true,
    mainCharacter:{
      name: "Tracer",
      image: "public/images/tracer.png"
    }
  },
  {
    title: "BattleField V",
    developer: "EA Games",
    image: "public/images/bf5.png",
    type: "Online Multiplayer FPS",
    hoursPlayed: 20,
    stillPlaying: true,
    mainCharacter:{
      name: "Battlefield Girl",
      image: "public/images/bf5girl.png"
    } 
  },
  {
    title: "Spiderman",
    developer: "Insomniac Games",
    image: "public/images/spidermanps4.png",
    type: "Action Adventure",
    hoursPlayed: 45,
    stillPlaying: false,
    mainCharacter:{
      name: "Spiderman",
      image: "public/images/spiderman.png"
    } 
  }
]

db.Game.deleteMany({}, function(err, games){
  console.log('removed all games');
  db.Game.create(games_list, function(err, games){
    if (err){
      console.log(err);
      return
    }
    console.log('recreated all games');
    console.log("created", games.length, "games");


  });
});