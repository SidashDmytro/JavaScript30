window.addEventListener('keydown', function (event) {
    playBtn(event);
});

function playBtn(event) {
    console.log(event.keyCode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const button = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    button.classList.add('active');
    setTimeout(() => {
        button.classList.remove('active')
    }, 200)
}