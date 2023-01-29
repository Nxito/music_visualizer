const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
  
});

app.use('/static', express.static(path.join(__dirname, 'public')))

const trackFolder = './public/tracks/';
const fs = require('fs');

let tracks =[]
fs.readdirSync(trackFolder).forEach(file => {

    let track = fs.statSync(path.join(__dirname,"/public/tracks", file))
    track.path = "/static/tracks/"+ file;
    track.name = file
    console.log("file",track)
    tracks.push(track);

  });
  app.get('/tracks', function(req, res) {
    res.send(JSON.stringify(tracks));
    
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);