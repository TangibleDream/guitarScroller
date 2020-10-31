//'use strict';

import { addBreak, addNote, songDump } from './helpers.js';
import { addBreakButton, addNoteButton, g6Area, musicArrayArea, printSongButton, removeNote, scrollerArea } from './elements.js'
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
});
removeNote.addEventListener("click", function() {
    let result = songArray.pop();
    scrollerArea.removeChild(scrollerArea.lastChild);
    g6Area.removeChild(g6Area.lastChild);
    return result
})

export { songArray };
