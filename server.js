// REQUIREMENTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
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

// SERVER START
app.listen(3000, () => {
console.log(`HTTP server listening at localhost:3000`);
});



