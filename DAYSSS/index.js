function playSound(e) {
  const audio = document.querySelector(`audio[data__key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data__key="${e.keyCode}"]`);
  if (!audio) return; //stop de function from running
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("play-sound");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if not transform
  this.classList.remove("play-sound");
}

function playSoundClick(e) {
  const key = e.currentTarget;
  const dataKey = key.getAttribute("data__key");
  const audio = document.querySelector(`audio[data__key="${dataKey}"]`);
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add("play-sound");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("click", playSoundClick));
