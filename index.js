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

clearDisplay.addEventListener("click", () => (display.value = ""));

deleteNumber.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
});

operators.forEach((operator) =>
  operator.addEventListener("click", () => {
    let result = ''
    let x = display.value


    if (operator.value == "π") {
      let pi = Math.PI;
      result = x * pi
      display.value = result;
    } else if (operator.value == "√") {
      display.value =  Math.sqrt(x);
    } else {
      display.value += operator.value;
    }
  })
);

evalBtn.addEventListener("click", () => {
  display.value = eval(display.value);
});
