let results = document.querySelector(".resultShow");
let input = document.getElementById("value");
let numbers = document.querySelectorAll(".number");

let added = document.querySelectorAll(".add");

let currentValue = "";
let operator = "";
let firstNumber = "";

numbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.textContent.trim();

    if (value === ".") {
      if (!input.value.includes(".")) {
        input.value += input.value === "" ? "0." : ".";
      }
    } else {
      input.value += value;
    }
  });
});


added.forEach((btn) => {
  btn.addEventListener("click", () => {
    let symbol = btn.textContent.trim();

    if (symbol === "AC") {
      
      input.value = "";
      currentValue = "";
      operator = "";
      firstNumber = "";
    } else if (symbol === "=") {
      let secondNumber = input.value;
      let result;

      switch (operator) {
        case "+":
          result = Number(firstNumber) + Number(secondNumber);
          break;
        case "×":
        case "x":
        case "X":
          result = Number(firstNumber) * Number(secondNumber);

          break;
        case "÷":
        case "/":
          result = Number(firstNumber) / Number(secondNumber);
          break;
        case "%":
          result = Number(firstNumber) % Number(secondNumber);
          break;
      }
      input.value = result;
      currentValue = result;
       results.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    } else {
      operator = symbol;
      firstNumber = input.value;
      input.value = "";
    }
  });
});

console.log("operator:", JSON.stringify(operator), "length:", operator.length);
