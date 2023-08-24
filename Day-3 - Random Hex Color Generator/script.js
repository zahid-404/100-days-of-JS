// variables
let hexValue = "0123456789ABCDEF";
let color = "";
let randomColor = document.querySelector("#randomColor");

// function for generating random color
function generate() {
  color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValue[Math.floor(Math.random() * 16)];
  }

  // display value of random color
  randomColor.innerText = color;

  // chnage background to random color
  document.body.style.backgroundColor = color;
}
