const db = require("./models");

var games_list = [
  {
    title: "Fortnite",
    developer: "Epic Games",
    image: "/images/fortnite.png",
    type: "Battle Royal",
    hoursPlayed: 240,
    stillPlaying: true,
  },
  {
    title: "Overwatch",
    developer: "Blizzard",
    image: "/images/overwatch.png",
    type: "Online Multiplayer FPS",
    hoursPlayed: 230,
    stillPlaying: true,
  },
  {
    title: "Battlefield V",
    developer: "EA Games",
    image: "/images/bf5.png",
    type: "Online Multiplayer FPS",
    hoursPlayed: 20,
    stillPlaying: true,
  },
  {
    title: "Spiderman",
    developer: "Insomniac Games",
    image: "/images/spidermanps4.png",
    type: "Action Adventure",
    hoursPlayed: 45,
    stillPlaying: false,
  }
]
/* var characters_list = [
  {
    name: "Spiderman",
    image: "public/images/spiderman.png"
  },
  {
    name: "Battlefield Girl",
    image: "public/images/bf5girl.png"
  },
  {
    name: "Tracer",
    image: "public/images/tracer.png"
  },
  {
    name: "Jonesy",
    image: "public/images/jonsey.png"
  }
] */
/* db.Character.deleteMany({}, function(err, characters){
  db.Character.create(characters_list, function(err, characters){
    if(err){
      console.log(err);
      return
    }
    console.log('recreated all characters');
    console.log("created", characters.length, "characters"); */
    
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
    })
/*   })
}) */