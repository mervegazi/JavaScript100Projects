/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
//const skipButtons = player.querySelector('.[data-skip]');
const ranges = player.querySelector('.player__slider');

/* Build out functions */
function tooglePlay(){
    const method = video.paused ? 'play' : 'pause';
    video[method]();

    /* if (video.paused){
        video.play();
    } else {
        video.pause();
    } */
}

function updateButton() {
    const icon = this.paused ? '\u23F5' : '\u23F8'; //these symbols are play and pause and use Unicode for show in js
    toggle.textContent = icon;
    console.log('update the button');
}

/* Hook up the event listners */
video.addEventListener('click', tooglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', tooglePlay);
