const generateButton = document.querySelector("#generateButton");
const randomNumber = document.querySelector("#randomNumber");

// function for generate random number
function generate() {
  let number = Math.floor(Math.random() * 1000);
  randomNumber.innerText = number;
}
