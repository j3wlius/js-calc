const numbers = document.querySelectorAll(".num");
const display = document.querySelector(".display input");
const clearDisplay = document.querySelector(".clear");
const deleteNumber = document.querySelector(".delete");
const evalBtn = document.querySelector(".equal");
const operators = document.querySelectorAll(".math");

numbers.forEach((num) =>
  num.addEventListener("click", () => {
    display.value += num.value;
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", () => {
    display.value += operator.value;
  })
);

clearDisplay.addEventListener("click", () => (display.value = ""));

deleteNumber.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});

evalBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});
