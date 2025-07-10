const mouse = document.getElementById("mouse");
const scoreDisplay = document.getElementById("score");
const clickSound = document.getElementById("clickSound");
let score = 0;

function moveMouse() {
  const gameArea = document.getElementById("game-area");
  const maxX = gameArea.clientWidth - mouse.clientWidth;
  const maxY = gameArea.clientHeight - mouse.clientHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  mouse.style.left = `${randomX}px`;
  mouse.style.top = `${randomY}px`;
}

// Ban đầu hiển thị chuột ngẫu nhiên
moveMouse();

// Di chuyển chuột mỗi giây
setInterval(moveMouse, 1000);

// Bắt chuột
mouse.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  clickSound.play();
  moveMouse();
});
