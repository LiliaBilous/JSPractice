const imageCollection = document.querySelectorAll(".image-to-show");
const imageCollectionLength = imageCollection.length;
let currentIndex = 1;
let intervalID;
let timerTime = 10;
let isRunning = false;
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

function changePhoto() {
  imageCollection.forEach((image, index) => {
    if (index === currentIndex) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
  currentIndex = (currentIndex + 1) % imageCollectionLength;
}

function updateTimer() {
  minutes.textContent = Math.floor(timerTime / 60)
    .toString()
    .padStart(2, "0");
  seconds.textContent = (timerTime % 60).toString().padStart(2, "0");
}

function stopShow() {
  clearInterval(intervalID);
  isRunning = false;
  // intervalID = null;
}
function startShow() {
  intervalID = setInterval(() => {
    if (!isRunning) {
      changePhoto();
      timerTime = 10;
      updateTimer();
    }
  }, 10000);
}

function restartShow() {
  isRunning = false;
  startShow();
}

document.querySelector(".stop-show").addEventListener("click", () => {
  stopShow();
  isRunning = true;
});
document.querySelector(".start-show").addEventListener("click", restartShow);

startShow();

setInterval(() => {
  if (timerTime > 0 && !isRunning) {
    timerTime--;
    updateTimer();
  }
}, 1000);
