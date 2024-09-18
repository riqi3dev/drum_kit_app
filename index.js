let allButtons = document.querySelectorAll(".kit").length;
let sfx = [
  "assets/sounds/kick.mp3",
  "assets/sounds/tom-1.mp3",
  "assets/sounds/snare.mp3",
  "assets/sounds/crash-2.mp3",
  "assets/sounds/tom-2.mp3",
  "assets/sounds/crash-1.mp3",
]; 

for (let i = 0; i < allButtons; i++) {
  let sound = new Audio(sfx[i]);
  document
    .querySelectorAll(".container>.wrapper>button")
    [i].addEventListener("click", function () {
      sound.play();
    });
}

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(event) {
  let kick = new Audio(sfx[0]);
  let tom1 = new Audio(sfx[1]);
  let snare = new Audio(sfx[2]);
  let crash2 = new Audio(sfx[3]);
  let tom2 = new Audio(sfx[4]);
  let crash1 = new Audio(sfx[5]);
  switch (event) {
    case "s":
        document.getElementById('drum-kit').src="assets/images/0bass.png";
      kick.play();
      break;
    case "w":
      tom1.play();
      break;
    case "a":
      snare.play();
      break;
    case "k":
      crash2.play();
      break;
    case "d":
      tom2.play();
      break;
    case "j":
      crash1.play();
      break; 
    default:
      console.log(event);
      break;
      
  } 
}
