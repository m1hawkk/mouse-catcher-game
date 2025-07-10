const mouse = document.getElementById("mouse");
const scoreDisplay = document.getElementById("score");
let score = 0;

function moveMouseRandomly() {
  const gameArea = document.getElementById("game-area");
  const maxX = gameArea.clientWidth - mouse.clientWidth;
  const maxY = gameArea.clientHeight - mouse.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  mouse.style.left = randomX + "px";
  mouse.style.top = randomY + "px";
}

// Di chuyển mỗi 1 giây
setInterval(moveMouseRandomly, 1000);

mouse.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveMouseRandomly();
});
