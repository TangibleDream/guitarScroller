'use strict';
import { songArray } from './core.js'
import { noteSelect, durationSelect, g6Area, scrollerArea } from './elements.js'
import { durationPic, g6Pic, toGuitarFraction } from './util.js'

const addBreak = () => {
    let result = songArray.concat([{ 'note' : 'Bar', 'duration' : null }]);
    let newBreak = document.createElement('td');
    let newBreakG6 = document.createElement('img');
    newBreakG6.src = './images/break-6S.png'
    newBreakG6.width = "32"
    newBreak.innerText  = '.|.....\r\n.|.....\r\n.|.....';
    scrollerArea.appendChild(newBreak);
    g6Area.appendChild(newBreakG6);
    return result;
}
const addNote = () => {
    let selNote = noteSelect.options[noteSelect.selectedIndex].value;
    let selDuration = durationSelect.options[durationSelect.selectedIndex].value;
    let result = songArray.concat([{ 'note' : selNote, 'duration' : selDuration }]);
    let newNote = document.createElement('td');
    let newDuration = document.createElement("img");
    let newG6 = document.createElement("img");
    newG6.src = g6Pic(selNote);
    newG6.width = "32"
    newDuration.src = durationPic(selDuration);
    newDuration.width = "30"
    newNote.innerText = `${selNote}\r\n${toGuitarFraction(selNote)}\r\n`;
    scrollerArea.appendChild(newNote);
    newNote.appendChild(newDuration)
    g6Area.appendChild(newG6);
    return result
}
const songDump = () => {
    let result = 'export default [\r\n';
    songArray.forEach( item => {
        result += `    {\r\n        "note":"${item["note"]}",\r\n        "duration":"${item["duration"]}"\r\n    },\r\n`
    })
    result = result.slice(0, -3);
    result += "\r\n]"
    return result;
}

export { addBreak, addNote, songDump }
