// REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./models')
// MIDDLEWARE
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'));

/*
 * HTML Endpoints
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', (req, res) => {
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/langdonf/personal-api/blob/master/README.md", 
    baseUrl: "https://powerful-cove-48058.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "My info"}, 
      {method: "GET", path: "/api/games", description: "Returns all games i've played in the recent past"},
      {method: "POST", path: "/api/games", description: "Adds new game"},
      {method: "GET", path: "/api/games/:id", description: "Returns single game based on ID"},
      {method: "PUT", path: "/api/games/:id", description: "Adjust the hours played"},
      {method: "DELETE", path: "/api/games/:id", description: "Deletes Game"}
    ]
  })
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: "Langdon Froker",
    githubUsername: "langdonf",
    githublink: "https://github.com/langdonf",
    githubProfileImage: "https://avatars2.githubusercontent.com/u/41966906?s=400&v=4",
    personalSiteLink: "https://langdonfroker.carrd.co/",
    currentCity: "Berkeley, CA",
    pets: [
      { name: "Ray", type: "dog", isAlive: false},
      { name: "Colby", type: "dog", isAlive: false},
      { name: "Basil", type: "dog", isAlive: true}
    ]
  });
});

app.get('/api/games', (req, res) => {
  db.Game.find()
    .populate('character')
    .exec(function(err, games){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    } else{
    res.json(games);
  }});
})

app.get('/api/games/:id', (req, res) =>{
  db.Game.findById(req.params.id)
  .exec(function(err, game){
    if(err){
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    console.log(game);
    res.json(game)
  })
})

app.post('/api/games', (req, res)=>{
  var newGame = new db.Game({
    title: req.body.title,
    developer: req.body.developer,
    type: req.body.type,
    hoursPlayed: req.body.hoursPlayed,
    image: req.body.image
  });
  newGame.save(function(err, game){
    if (err) {
      console.log("create error: " + err);
    }
    console.log("created ", game.title);
  });
})

app.put('/api/games/:id', (req,res)=>{
  // grab the param and save it to a variable
  let gameId = req.params.id
  let updateBody = req.body;
  // with that given index access the todo and update it with the given information from req.body
  db.Game.findOneAndUpdate({ _id: gameId }, updateBody, {new:true}) 
    .exec(function(err, updatedGame){ 
      if(err) { return console.log(err) }
    res.json(updatedGame);
    })
})

app.delete('/api/games/:id', (req, res) =>{
  let gameId = req.params.id;
  db.Game.findOneAndDelete({ _id: gameId }, 
    function(err, deletedGame){
        if(err) { return console.log(err) }
        res.json(deletedGame);
  }
)})

// SERVER START
app.listen(process.env.PORT || 3000, () => {
console.log(`HTTP server listening at localhost:3000`);
});



