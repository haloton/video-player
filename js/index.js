const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    document.querySelector('.player-blur').style.opacity = 1;
    console.log('ya jalo el play');
}

function handlePause() {
    $video.pause();
    $play.hidden = false;
    $pause.hidden = true;
    document.querySelector('.player-blur').style.opacity = 0;
    console.log('y la pausa tambor');
}


function handleBackward() {
    console.log('pa tras' , $video.currentTime)
    $video.currentTime = $video.currentTime - 10
}

function handleForward() {
    console.log('pa lante' , $video.currentTime)
    $video.currentTime = $video.currentTime + 10
}

function handleLoaded() {
    console.log('ya cargo la wea', $video.duration)
    $progress.max = $video.duration
}

function handleTimeUpdate() {
    console.log('aja', $video.currentTime)
    $progress.value = $video.currentTime
}

function handleInput() {
    console.log('tas moviendo la barra vea', $progress.value)
    $video.currentTime = $progress.value
}