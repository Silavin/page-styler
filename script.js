const A1 = document.querySelector(".smaller");
const A2 = document.querySelector(".normal");
const A3 = document.querySelector(".bigger");
const h1 = document.querySelector("h1");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const body = document.querySelector("body");

A1.addEventListener("click", function() {
  const currentFontSize = window
    .getComputedStyle(h1, null)
    .getPropertyValue("font-size");
  minusFontSize = parseInt(currentFontSize) - 1;
  h1.style.fontSize = minusFontSize.toString() + "px";
});
A2.addEventListener("click", function() {
  h1.style.fontSize = "large";
});
A3.addEventListener("click", function() {
  const currentFontSize = window
    .getComputedStyle(h1, null)
    .getPropertyValue("font-size");
  plusFontSize = parseInt(currentFontSize) + 1;
  h1.style.fontSize = plusFontSize.toString() + "px";
});
red.addEventListener("click", function() {
  body.style.backgroundColor = "red";
});
green.addEventListener("click", function() {
  body.style.backgroundColor = "green";
});
blue.addEventListener("click", function() {
  body.style.backgroundColor = "blue";
});
