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
const addNote = (n=null, d=null) => {
    let selNote = noteSelect.options[noteSelect.selectedIndex].value;
    let selDuration = durationSelect.options[durationSelect.selectedIndex].value;
    if (n != null){
        selNote = n
        selDuration = d    
    }
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

const addPreset = (id) => {
    let presetNote = document.getElementById(`psh-${id.charAt(7)}`).textContent;
    let presetDuration = document.getElementById(`psdur-${id.charAt(9)}`).getElementsByTagName('img')[0].src;
    presetDuration = presetDuration.substring(30).slice(0, -4);;
    songArray = addNote(presetNote, presetDuration);
    return songArray;
};

const presetVisibility = (nl,dl) => {
    for(let x = 1;x < 5+1; x++){
        for(let y = 1; y < 5+1; y++){
            document.getElementById(`preset-${x}-${y}`).style.visibility = 'hidden';
        } 
    }
    for(let x = 1;x < nl+1; x++){
        for(let y = 1; y < dl+1; y++){
            document.getElementById(`preset-${x}-${y}`).style.visibility = 'visible';
        } 
    }
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

export { addBreak, addNote, addPreset, presetVisibility, songDump }
