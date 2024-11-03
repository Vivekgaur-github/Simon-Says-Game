let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let highScore = localStorage.getItem("highScore") || 0; // Retrieve high score from local storage or set to 0
let color = ["yellow", "red", "blue", "green"];
let h3 = document.querySelector("h3");
let gameOverMessage = document.getElementById("game-over-message"); // Get the game-over message div

// Game start
document.addEventListener("keypress", function () {
  if (start === false) {
    start = true;
    levelUp();
    gameOverMessage.innerHTML = ""; // Clear message when the game starts
  }
});

// Leveling Up
function levelUp() {
  userSeq = [];
  level++;

  h3.innerText = `Level ${level}`;

  let randIndex = Math.floor(Math.random() * 4); // fixed the range to 4 to cover all colors
  let randColor = color[randIndex];
  let randBox = document.querySelector(`.${randColor}`);

  gameSeq.push(randColor);
  btn_flash(randBox);
}

// Button flash by game
function btn_flash(btn_box) {
  btn_box.classList.add("flash");
  setTimeout(function () {
    btn_box.classList.remove("flash");
  }, 250);
}

// Button click by user
function user_flash(btn_box) {
  btn_box.classList.add("userflash");
  setTimeout(function () {
    btn_box.classList.remove("userflash");
  }, 250);
}

// Check user sequence
function checkSeq(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > highScore) {
      highScore = level;
      localStorage.setItem("highScore", highScore); // Update high score in local storage
    }

    h3.innerText = "Game Over!";
    gameOverMessage.innerHTML = `<b>Your score is <b>${level}</b><br>High Score: <b>${highScore}</b><br>Press any key to start again.</b>`;
    document.body.style.backgroundColor = "red";

    setTimeout(function () {
      document.body.style.backgroundColor = "white";
    }, 150);

    reset();
  }
}

// Handle color button press by user
function btnPress() {
  const btnBox = this;
  user_flash(btnBox);

  const userColor = btnBox.getAttribute("id");
  userSeq.push(userColor);
  checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn_box");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

// Reset game state
function reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
