const gameForm = document.querySelector("#gameForm");
const resultMsg = document.querySelector("#resultMsg");
const inputNum = document.querySelector("#gameForm #inputNum");
const choseNum = document.querySelector("#gameForm #choseNum");

function play(event) {
  event.preventDefault();
  const randomNum = makeNumber(inputNum.value);

  resultMsg.classList.remove("hidden");

  let result = `You Chose ${choseNum.value}, the machine chose : ${randomNum}`;
  if (choseNum.value >= randomNum) {
    result += "\n You won!";
  } else {
    result += "\n You lost!";
  }
  resultMsg.innerText = result;
}

function makeNumber(data) {
  return Math.ceil(Math.random() * data);
}

function convertPositive(event) {
  let targetValue = event.target.value;
  if (targetValue < 0) {
    event.target.value = Math.abs(targetValue);
  }
}
gameForm.addEventListener("submit", play);
inputNum.addEventListener("blur", convertPositive);
choseNum.addEventListener("blur", convertPositive);
