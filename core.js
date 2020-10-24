//'use strict';

import { addNote, songDump } from './helpers.js';
import { addNoteButton, musicArea, printSongButton } from './elements.js'
let songArray = [];
addNoteButton.addEventListener("click", function(){
    songArray = addNote();
    console.log(songArray);
});
printSongButton.addEventListener("click", function(){
    musicArea.setAttribute('style', 'white-space: pre;');
    musicArea.textContent = songDump();
 })
export { songArray };