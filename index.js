// count all of the total buttons that has the class name of kit
// insert all of the sound effects inside of the array named sfx
// insert all of the names of the id per instrument
let allButtons = document.querySelectorAll(".kit").length;
let sfx = [
  "assets/sounds/kick.mp3",
  "assets/sounds/tom-1.mp3",
  "assets/sounds/snare.mp3",
  "assets/sounds/crash-1.mp3",
  "assets/sounds/tom-2.mp3",
  "assets/sounds/crash-2.mp3",
];
let sfxName = ["0bass", "1tom1", "2snare",  "5cymbal1","4tom2", "3cymbal2",];


// count and loop through all of the buttons and assign each 
// sound based from the index of i
// 
// every time a button is pressed, it checks what specific
// index was it pressed on and play the sound and effect accordingly
for (let i = 0; i < allButtons; i++) {
  let sound = new Audio(sfx[i]);
  document
    .querySelectorAll(".container>.wrapper>button")
    [i].addEventListener("click", function () { 
      sound.play();
      onPressed(sfxName[i]);
    });
}


// event name of keypress and ontouchstart checks the whole document
// if the a keystroke or touch screen is press then
// makeSound(event.key) is executed  
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

document.addEventListener("ontouchstart", function (event) {
    makeSound(event.key);
  });


// it checks what keystroke was pressed then executed a sound to play
function makeSound(event) {
  let kick = new Audio(sfx[0]);
  let tom1 = new Audio(sfx[1]);
  let snare = new Audio(sfx[2]);
  let crash2 = new Audio(sfx[3]);
  let tom2 = new Audio(sfx[4]);
  let crash1 = new Audio(sfx[5]);

  switch (event) {
    case "s":
      kick.play();
      onPressed(sfxName[0]);
      break;
    case "w":
      tom1.play();
      onPressed(sfxName[1]);
      break;
    case "a":
      snare.play();
      onPressed(sfxName[2]);
      break;
    case "j":
        crash2.play();
        onPressed(sfxName[3]);
      break;
    case "d":
      tom2.play();
      onPressed(sfxName[4]);
      break;
    case "k":
      crash1.play();
      onPressed(sfxName[5]);
      break;
    default:
      console.log(event);
      break;
  }
}


// everytime a button is pressed, the image of id named drum-kit changes
// to the coressponding asset name, then changes back to the original
// asset after executed by 1 millisecond
function onPressed(name) {
  document.getElementById("drum-kit").src = `assets/images/${name}.png`;
  setTimeout(function () {
    document.getElementById("drum-kit").src = "assets/images/drum-kit.png";
  }, 100);
}
