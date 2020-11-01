//'use strict';

import { addBreak, addNote, songDump } from './helpers.js';
import { durationPic, max5 } from './util.js'
import { addBreakButton, addNoteButton, g6Area, musicArrayArea, printSongButton, removeNote, scrollerArea } from './elements.js'
let songArray = [];
addBreakButton.addEventListener("click", function(){
    songArray = addBreak();
})
addNoteButton.addEventListener("click", function(){
    songArray = addNote();
    let psNotes = max5('note');
    let psDuration = max5('duration');
    let picArray = []
    psNotes.forEach(function(value, i) {
        document.getElementById(`psh-${i+1}`).setValue = value;
        document.getElementById(`psh-${i+1}`).textContent = value;
    })
    psDuration.forEach(function(value, i) {
        picArray[i] = document.createElement('img');
        picArray[i].src=`${durationPic(value)}`;
        picArray[i].width = "30"
        let durationTitle = document.getElementById(`psdur-${i+1}`)
        durationTitle.setValue = value;
         if (durationTitle.firstChild) durationTitle.removeChild(durationTitle.lastChild);
        document.getElementById(`psdur-${i+1}`).appendChild(picArray[i]);
    })
});
printSongButton.addEventListener("click", function(){
    musicArrayArea.setAttribute('style', 'white-space: pre;');
    musicArrayArea.textContent = songDump();
});
removeNote.addEventListener("click", function() {
    let result = songArray.pop();
    if (scrollerArea.firstChild) scrollerArea.removeChild(scrollerArea.lastChild);
    if (g6Area.firstChild) g6Area.removeChild(g6Area.lastChild);
    return result
})

export { songArray };
