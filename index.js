let counter = Number(document.getElementById("num-value"));
console.log(counter);
function inc() {
  counter = counter + 1;
  num.innerText = counter;
  counter_color();
}
function dec() {
  counter = counter - 1;
  num.innerText = counter;
  counter_color();
}
function reset() {
  num.innerText = 0;
  counter = 0;
  counter_color();
}
function counter_color() {
  if (counter > 0) {
    num.style.color = "green";
  } else if (counter < 0) {
    num.style.color = "red";
  } else {
    num.style.color = "black";
  }
}
