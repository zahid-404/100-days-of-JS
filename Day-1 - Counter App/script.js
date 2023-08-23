// getting all variables
let count = document.querySelector(".count");
const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const reset = document.querySelector(".reset");

// event listners
plus.addEventListener("click", add);
minus.addEventListener("click", subtraction);
reset.addEventListener("click", init);

// intital function
function init() {
  count.innerText = "0";
}

// function for addition
function add() {
  let value = parseInt(count.innerText);
  value++;
  count.innerText = value;
}
// function for subtarction
function subtraction() {
  let value = parseInt(count.innerText);
  value--;
  count.innerText = value;
}
