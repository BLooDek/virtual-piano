/*document.addEventListener('keypress', e => {
    if (e.key === 'A' || e.key === 'S' || e.key === 'D' || e.key === 'F' || e.key === 'G' || e.key === 'H' || e.key === 'J' ||
        e.key === 'a' || e.key === 's' || e.key === 'd' || e.key === 'f' || e.key === 'g' || e.key === 'h' || e.key === 'j') {
        let str = `The \'${e.key}\' key is pressed.`;
        console.log(str)
        //alert(str)
    } else {
        console.log('alert');
    }
})
    */

    document.addEventListener('keypress', e => {
        playNote(e.key.toUpperCase());

    });

    function playNote(note) {
        const str = `static/audio/${note}.mp3`;
        const audio = new Audio(str);
        audio.play();
    }

