const durationPic = (duration) => {
    let durations = {'whole':'./images/whole.png','half':'./images/half.png','quarter':'./images/quarter.png','eighth':'./images/eighth.png',
                     'sixteenth':'./images/sixteenth.png','thirty-second':'./images/thirtySecond.png','sixty-fourth':"./images/sixtyFourth.png"}                    
    return durations[duration]
}

const g6Pic = (note) => {
    let result = ""
    let notes = [{'E1':'./images/E1-6S.png'},{'F1':'./images/F1-6S.png'},{'F#1':'./images/FS1-6S.png'},{'G1':'./images/G1-6S.png'},{'G#1':'./images/GS1-6S.png'},{'A2':'./images/A2-6S.png'},{'A#2':'./images/AS2-6S.png'},{'B2':'./images/B2-6S.png'},{'C2':'./images/C2-6S.png'},{'C#2':'./images/CS2-6S.png'},{'D2':'./images/D2-6S.png'},{'D#2':'./images/DS2-6S.png'},
            {'E2':'./images/E2-6S.png'},{'F2':'./images/F2-6S.png'},{'F#2':'./images/FS2-6S.png'},{'G2':'./images/G2-6S.png'},{'G#2':'./images/GS2-6S.png'},{'A3':'./images/A3-6S.png'},{'A#3':'./images/AS3-6S.png'},{'B3':'./images/B3-6S.png'},
            {'C3':'./images/C3-6S.png'},{'C#3':'./images/CS3-6S.png'},{'D3':'./images/D3-6S.png'},{'D#3':'./images/DS3-6S.png'},{'E3':'./images/E3-6S.png'},
            {'F3':'./images/F3-6S.png'},{'F#3':'./images/FS3-6S.png'},{'G3':'./images/G3-6S.png'},{'G#3':'./images/GS3-6S.png'}, 
            {'A4':'./images/A4-6S.png'},{'A#4':'./images/AS4-6S.png'},{'B4':'./images/B4-6S.png'},{'C4':'./images/C4-6S.png'},{'C#4':'./images/CS4-6S.png'},
            {'D4':'./images/D4-6S.png'},{'D#4':'./images/DS4-6S.png'},{'E4':'./images/E4-6S.png'},{'F4':'./images/F4-6S.png'},{'F#4':'./images/FS4-6S.png'},
            {'G4':'./images/G4-6S.png'},{'G#4':'./images/GS4-6S.png'},{'A5':'./images/A5-6S.png'},{'A#5':'./images/AS5-6S.png'},{'B5':'./images/B5-6S.png'}]
    notes.forEach(item => {
        if (item[note] != undefined) result = item[note];
    })
    return result;
}

const toGuitarFraction = (note) => {
    let result = ""
    let notes = [{'E1':'6/0'},{'F1':'6/1'},{'F#1':'6/2'},{'G1':'6/3'},{'G#1':'6/4'},{'A2':'6/5'},{'A#2':'6/6'},{'B2':'6/7'},{'C2':'6/8'},{'C#2':'6/9'},{'D2':'6/10'},{'D#2':'6/11'},
            {'E2':'6/12'},{'F2':'6/13'},{'F#2':'6/14'},{'G2':'6/15'},{'G#2':'6/16'},{'A3':'6/17'},{'A#3':'6/18'},{'B3':'6/19'},
            {'A2':'5/0'},{'A#2':'5/1'},{'B2':'5/2'},{'C2':'5/3'},{'C#2':'5/4'},{'D2':'5/5'},{'D#2':'5/6'},{'E2':'5/7'},{'F2':'5/8'},{'F#2':'5/9'},{'G2':'5/10'},{'G#2':'5/11'},
            {'A3':'5/12'},{'A#3':'5/13'},{'B3':'5/14'},{'C3':'5/15'},{'C#3':'5/16'},{'D3':'5/17'},{'D#3':'5/18'},{'E3':'5/19'},
            {'D2':'4/0'},{'D#2':'4/1'},{'E2':'4/2'},{'F2':'4/3'},{'F#2':'4/4'},{'G2':'4/5'},{'G#2':'4/6'},{'A3':'4/7'},{'A#3':'4/8'},{'B3':'4/9'},{'C3':'4/10'},{'C#3':'4/11'},
            {'D3':'4/12'},{'D#3':'4/13'},{'E3':'4/14'},{'F3':'4/15'},{'F#3':'4/16'},{'G3':'4/17'},{'G#3':'4/18'}, 
            {'G2':'3/0'},{'G#2':'3/1'},{'A3':'3/2'},{'A#3':'3/3'},{'B3':'3/4'},{'C3':'3/5'},{'C#3':'3/6'},{'D3':'3/7'},{'D#3':'3/8'},{'E3':'3/9'},{'F3':'3/10'},{'F#3':'3/11'},
            {'G3':'3/12'},{'G#3':'3/13'},{'A4':'3/14'},{'A#4':'3/15'},{'B4':'3/16'},{'C4':'3/17'},{'C#4':'3/18'},
            {'B3':'2/0'},{'C3':'2/1'},{'C#3':'2/2'},{'D3':'2/3'},{'D#3':'2/4'},{'E3':'2/5'},{'F3':'2/6'},{'F#3':'2/7'},{'G3':'2/8'},{'G#3':'2/9'},{'A4':'2/10'},{'A#4':'2/11'},
            {'B4':'2/12'},{'C4':'2/13'},{'C#4':'2/14'},{'D4':'2/15'},{'D#4':'2/16'},{'E4':'2/17'},{'F4':'2/18'},{'F#4':'2/19'},
            {'E3':'1/0'},{'F3':'1/1'},{'F#3':'1/2'},{'G3':'1/3'},{'G#3':'1/4'},{'A4':'1/5'},{'A#4':'1/6'},{'B4':'1/7'},{'C4':'1/8'},{'C#4':'1/9'},{'D4':'1/10'},{'D#4':'1/11'},
            {'E4':'1/12'},{'F4':'1/13'},{'F#4':'1/14'},{'G4':'1/15'},{'G#4':'1/16'},{'A5':'1/17'},{'A#5':'1/18'},{'B5':'1/19'}]
    notes.forEach(item => {
        if (item[note] != undefined) result = item[note];
    })
    return result;
}
export {durationPic, g6Pic, toGuitarFraction};
