//'use strict';

import { addBreak, addNote, songDump } from './helpers.js';
import { addBreakButton, addNoteButton, musicArea, printSongButton } from './elements.js'
let songArray = [];
addBreakButton.addEventListener("click", function(){
    songArray = addBreak();
})
addNoteButton.addEventListener("click", function(){
    songArray = addNote();
});
printSongButton.addEventListener("click", function(){
    musicArea.setAttribute('style', 'white-space: pre;');
    musicArea.textContent = songDump();
})
export { songArray };
