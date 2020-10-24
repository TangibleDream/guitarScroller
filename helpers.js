'use strict';
import { songArray } from './core.js'
import { noteSelect } from './elements.js'
import { durationSelect } from './elements.js' 
const addNote = () => {
    let result = songArray.concat([{ 'note' : noteSelect.options[noteSelect.selectedIndex].value, 'duration' : durationSelect.options[durationSelect.selectedIndex].value }]);
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

export { addNote, songDump }
