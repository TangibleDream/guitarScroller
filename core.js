//'use strict';

import { addBreak, addNote, songDump } from './helpers.js';
import { addBreakButton, addNoteButton, musicArrayArea, printSongButton } from './elements.js'
let songArray = [];
addBreakButton.addEventListener("click", function(){
    songArray = addBreak();
})
addNoteButton.addEventListener("click", function(){
    songArray = addNote();
});
printSongButton.addEventListener("click", function(){
    musicArrayArea.setAttribute('style', 'white-space: pre;');
    musicArrayArea.textContent = songDump();
})

export { songArray };
