const { log } = require('console');
const fs = require('fs');
const path = require('path');
fs.readdirSync("./public/tracks").forEach(file => {
 console.log(file);
 
    let track = fs.statSync(path.join(__dirname,"./public/tracks", file))
    track.path = "/tracks/"+ file;
    track.name = file
    console.log("file",track)
    tracks.push(track);

  });z