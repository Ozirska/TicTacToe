let board = document.querySelector(".board");
let message = document.querySelector(".message");
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.id = i.toString();
  board.appendChild(cell);
}

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let click = 0;
let xPlayer = [];
let oPlayer = [];

const checkWinner = () => {
  let Xsucsess = false;
  let Osucsess = false;

  winCombinations.forEach((arr) => {
    if (arr.every((el) => xPlayer.includes(el))) {
      message.innerText = "X is winner!";
      Xsucsess = true;
    }
  });
  winCombinations.forEach((arr) => {
    if (arr.every((el) => oPlayer.includes(el))) {
      Osucsess = true;
      message.innerText = "O is winner!";
    }
  });
  if (click >= 9 && Xsucsess == false && Osucsess == false) {
    message.innerText = "Finish";

    return;
  }
  if (Xsucsess || Osucsess) {
    return true;
  }
  return false;
};

const game = (event) => {
  if (click % 2 == 0) {
    event.target.innerText = "x";
    xPlayer.push(Number(event.target.id));
  } else {
    event.target.innerText = "o";
    oPlayer.push(Number(event.target.id));
  }
  click++;
  if (checkWinner()) {
    document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.removeEventListener("click", game));
  }

  event.target.removeEventListener("click", game);
};

let cells = document.querySelectorAll(".cell");
cells.forEach((cell) => cell.addEventListener("click", game));

const restart = () => {
  location.reload();
};
document.querySelector(".restart").addEventListener("click", restart);
