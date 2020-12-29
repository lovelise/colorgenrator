var displayColor = document.querySelector("h3");
var colorOne = document.querySelector(".color1");
var colorTwo = document.querySelector(".color2");
var body = document.getElementById("colors");

function gradientBackground() {
  body.style.background =
    "linear-gradient(to right," + colorOne.value + "," + colorTwo.value + ")";
  displayColor.textContent = body.style.background;
}
//random num
function randomNum() {
  var randomNum = Math.floor(Math.random() * 255);
  return randomNum;
}
//create random color
function randomColors() {
  body.style.background =
    "linear-gradient(to right, rgb(" +
    randomNum() +
    ", " +
    randomNum() +
    ", " +
    randomNum() +
    "), " +
    "rgb(" +
    randomNum() +
    ", " +
    randomNum() +
    ", " +
    randomNum() +
    ")" +
    ")";
  displayColor.textContent = body.style.background;
}
//add a button to HTML content
function cretatBTN() {
  var btn = document.createElement("button");
  var btnContent = document.createTextNode("Random Colors");
  btn.append(btnContent);
  body.append(btn);

  btn.addEventListener("click", randomColors);
}

gradientBackground();
cretatBTN();
colorOne.addEventListener("input", gradientBackground);
colorTwo.addEventListener("input", gradientBackground);
