const bgmusic = document.getElementById("bg-music");

function playMusic() {
  // 1. Added the missing parentheses here
  bgmusic.play().then(() => {
    // Once it plays, stop listening for clicks so it doesn't restart on every click
    document.removeEventListener("click", playMusic);
  }).catch(err => {
    console.log("Autoplay blocked, waiting for interaction.");
  });
}

document.addEventListener("DOMContentLoaded", () => {


  document.addEventListener("click", playMusic);
});