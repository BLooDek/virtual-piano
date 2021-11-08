document.addEventListener('keypress', e => {
    playNote(e.key.toUpperCase());

});

function playNote(note) {
    const str = `static/audio/${note}.mp3`;
    const audio = new Audio(str);
    audio.play();
}

