const main = document.querySelector("main");
const reset = document.querySelector("button");
const counter = document.querySelector(".counter");
const leftBlock = document.querySelector(".left-block");
const rightBlock = document.querySelector(".right-block");

let blockA = 0;
let blockB = 100;
let percentColor = 0;

main.addEventListener("click", addCount);
reset.addEventListener("click", resetCount);
document.addEventListener("keypress", function (whichKey) {
  if (whichKey.key === " " || whichKey.key === "Enter") {
    addCount();
  }
});

function addCount() {
  percentColor++;
  blockA++;
  blockB--;
  counter.innerText = percentColor;
  leftBlock.style.width = `${blockA}%`;
  rightBlock.style.width = `${blockB}%`;
  if (percentColor === 101) {
    return resetCount();
  }
}

function resetCount() {
  percentColor = 0;
  blockA = 0;
  blockB = 100;
  counter.innerText = percentColor;
  leftBlock.style.blockA = `${blockA}%`;
  rightBlock.style.blockB = `${blockB}%`;
}
