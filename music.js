var fs = require('fs');
var midiConverter = require('midi-converter');
// import {create} from "midi-player";
var midiSong = fs.readFileSync('s1.mid', 'binary');
var jsonSong = midiConverter.midiToJson(midiSong);
let timeTotal = 0;
let tracks = jsonSong.tracks[0];
let len = tracks.length;
for(let i = 0; i < len; i++) {
    let item = tracks[i];
    if(item.subtype === "noteOff" || item.subtype === "noteOn") {
        console.log("间隔是：",item.deltaTime,"微秒");
        timeTotal += item.deltaTime;
    }
}
console.log("timeTotal is ",timeTotal,"微秒");
fs.writeFileSync('s1.json', JSON.stringify(jsonSong));