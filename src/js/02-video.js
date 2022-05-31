import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import {save,load} from'./storage'

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);
let currentTime = load(LOCALSTORAGE_KEY);


player.on('timeupdate', throttle(data => saveTime(data), 1000));


player.setCurrentTime(currentTime).then(setTime).catch(errorSetTime);

function saveTime(data) {
    const seconds = data.seconds;
    save(LOCALSTORAGE_KEY, seconds);   
}



function setTime (seconds) {
    // seconds = the actual time that the player seeked to
    console.log(seconds);
}
function errorSetTime (error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
}
