import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const LOCALSTORAGE_KEY = "videoplayer-current-time";
const player = new Player(iframe);
let currentTime = load(LOCALSTORAGE_KEY);


player.on('timeupdate', saveTime);


player.setCurrentTime(currentTime).then(setTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});;

function saveTime(data) {
    const seconds = data.seconds;
    save(LOCALSTORAGE_KEY, seconds);   
}

function save (key, value){
    try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

function load (key){
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

function setTime (seconds) {
    // seconds = the actual time that the player seeked to
    console.log(seconds);
}
