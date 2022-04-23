/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
// Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var songList = [
  [4, 4, 6, 6, 2, 2, 4, 4, 5, 5, 7, 7, 1, 1], // Heart & Soul
  [4, 4, 5, 3, 4, 5, 6, 6, 7, 6, 5, 4, 5, 4, 3, 4], // My Country Tis of Thee
  [1, 1, 4, 5, 6, 4, 3, 2, 7, 7, 6, 7, 8, 4, 4, 3, 4, 5], // Home on the Range
]; // Don't hard-code this

var pattern;
// console.log(songList.length)
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var numLives;

// Determine what song we're playing
pattern = songList[Math.floor(Math.random() * songList.length)];

function changeImage() {
  if (
    document.getElementById("imgClickAndChange").src ==
    "http://www.userinterfaceicons.com/80x80/minimize.png"
  ) {
    document.getElementById("imgClickAndChange").src =
      "https://cdn.glitch.global/634e7dec-89bb-48f7-9fb2-ae86f0d357d6/goose1.png?v=1650682594464";
  } else {
    document.getElementById("imgClickAndChange").src =
      "https://cdn.glitch.global/634e7dec-89bb-48f7-9fb2-ae86f0d357d6/goose2.png?v=1650682594400";
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  numLives = 2;

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();

  // Determine what song we're playing
  pattern = songList[Math.floor(Math.random() * songList.length)];
}

function stopGame() {
  // swap the Start and Stop buttons
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 196, // G
  2: 220, // A
  3: 246.9, // B
  4: 261.6, // Middle C
  5: 293.7, // D
  6: 329.6, // E
  7: 349.23, // F
  8: 392, // G
  9: 440, // A
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
    document.getElementById("imgClickAndChange").src =
      "https://cdn.glitch.global/634e7dec-89bb-48f7-9fb2-ae86f0d357d6/goose2.png?v=1650682594400";
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
  document.getElementById("imgClickAndChange").src =
    "https://cdn.glitch.global/634e7dec-89bb-48f7-9fb2-ae86f0d357d6/goose1.png?v=1650682594464";
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  clueHoldTime -= 50;
  // Set the pattern to be randomly chosen from my list of songs
  console.log(Math.floor(Math.random() * songList.length));

  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

// Doesn't quite work yet :'(
// function playSong() {
//   o.frequency.value = freqMap[1];
//   g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
//   context.resume();
//   tonePlaying = true;
//   setTimeout(function () {
//     stopTone();
//   }, 0.5);
// }

function loseGame() {
  stopGame();
  alert(
    "Game Over, man. GAAAMEEE OVEEEERRRR. You lost. You get nothing- NOTHING"
  );
}

function winGame() {
  stopGame();
  alert(
    "Game Over. You crazy sonofa gun... you actually did it... You W O N!!!! (POG.jpg)"
  );
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        //GAME OVER: WIN!
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect

    numLives -= 1;
    if (numLives != 0) {
      window.alert(`Oops, try again! (You have ${numLives} lives left.)`);
    }
    //GAME OVER: LOSE!
    if (numLives == 0) {
      loseGame();
    }
  }
}
console.log(
  "Hello, world! (I'm keeping this console.log as an easter egg! Heart and Soul!)"
);
