const gameBoard = document.getElementById("board");
const timerDisplay = document.getElementById("timer");
const moveHistoryTable = document.getElementById("historyBody");

let tileValues = [];
let emptyTileIndex = 11;
let elapsedTime = 0;
let timerInterval = null;
let isGameRunning = false;

// function startGame() {
//   initializeTiles();
//   shuffleTiles(tileValues);
//   renderGameBoard();
//   startTimer();
//   moveHistoryTable.innerHTML = "";
// }
function toggleGame() {
  const startBtn = document.getElementById("startBtn");
  
  if (!isGameRunning) {
    // Bắt đầu game
    isGameRunning = true;
    document.getElementById("winMessage").textContent = "";

    startBtn.textContent = "Kết Thúc";
    startBtn.classList.add('end-btn'); 
    // Hiển thị lại game board
    gameBoard.style.display = "grid"; 

    initializeTiles();
    shuffleTiles(tileValues);
    // tileValues = [1,2,3,4,5,6,7,8,9,10,11,null];
    renderGameBoard();
    moveHistoryTable.innerHTML = "";
    
    elapsedTime = 0;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      elapsedTime++;
      const minutes = String(Math.floor(elapsedTime / 60)).padStart(2, '0');
      const seconds = String(elapsedTime % 60).padStart(2, '0');
      timerDisplay.textContent = `${minutes}:${seconds}`;
    }, 1000);

  } else {
    // Dừng game
    isGameRunning = false;
    startBtn.textContent = "Bắt đầu";
    startBtn.classList.remove('end-btn');
    
    tileValues = [];
    emptyTileIndex = 11;
    renderGameBoard();

    moveHistoryTable.innerHTML = "";
    
    clearInterval(timerInterval);
    timerDisplay.textContent = "00:00";
    gameBoard.style.display = "grid";
  }
}
document.getElementById("startBtn").addEventListener("click", toggleGame);

function initializeTiles() {
  tileValues = [...Array(11).keys()].map(i => i + 1);
  tileValues.push(null);
}

function shuffleTiles(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  emptyTileIndex = array.indexOf(null);
}

function renderGameBoard() {
  gameBoard.innerHTML = "";
  tileValues.forEach((value, index) => {
    const tileElement = document.createElement("div");
    tileElement.classList.add("tile");
    if (value === null) {
      tileElement.classList.add("empty");
    } else {
      tileElement.textContent = value;
      tileElement.style.backgroundColor = getTileColor(value);
    }
    gameBoard.appendChild(tileElement);
  });
  // checkWinCondition();
}

function getTileColor(tileNumber) {
  const tileColors = [
    "#d1fae5", "#fee2e2", "#dbeafe", "#ede9fe", "#fce7f3",
    "#fef9c3", "#e0e7ff", "#f3f4f6", "#d1fae5", "#fef3c7", "#ecfccb"
  ];
  return tileColors[tileNumber - 1];
}


function checkWinCondition() {
  const correctOrder = [...Array(11).keys()].map(i => i + 1).concat(null);
  const isWin = tileValues.every((val, i) => val === correctOrder[i]);

  if (isWin) {
    clearInterval(timerInterval);
    document.getElementById("winMessage").textContent = ` You win!`;
    isGameRunning = false;
    document.getElementById("startBtn").textContent = "Bắt đầu";
    document.getElementById("startBtn").classList.remove("end-btn");
  }
}

function formatElapsedTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

// document.getElementById("startBtn").addEventListener("click", startGame);

document.addEventListener("keydown", (event) => {
  const movementMap = {
    ArrowUp: -4, ArrowDown: 4, ArrowLeft: -1, ArrowRight: 1,
    w: -4, s: 4, a: -1, d: 1
  };
  const moveOffset = movementMap[event.key];
  if (moveOffset !== undefined) {
    const targetIndex = emptyTileIndex + moveOffset;
    if (isMoveValid(emptyTileIndex, targetIndex)) {
      [tileValues[emptyTileIndex], tileValues[targetIndex]] = [tileValues[targetIndex], tileValues[emptyTileIndex]];
      emptyTileIndex = targetIndex;
      renderGameBoard();
      logMove(event.key.toUpperCase());
      checkWinCondition();
    }
  }
});

function isMoveValid(currentIndex, targetIndex) {
  if (targetIndex < 0 || targetIndex >= tileValues.length) return false;
  if (currentIndex % 4 === 0 && targetIndex === currentIndex - 1) return false;
  if ((currentIndex + 1) % 4 === 0 && targetIndex === currentIndex + 1) return false;
  return true;
}

function logMove(key) {
  const historyRow = document.createElement("tr");
historyRow.innerHTML = `<td>${moveHistoryTable.children.length + 1}</td><td>${key}</td><td>${timerDisplay.textContent}</td>`;
  moveHistoryTable.appendChild(historyRow);
}
