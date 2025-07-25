const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-action");

    if (value === "clear") {
      currentInput = "";
      display.textContent = "0";
    } else if (value === "delete") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultShown = true;
      } catch (err) {
        display.textContent = "Error";
        currentInput = "";
      }
    } else {
      if (resultShown && !isNaN(value)) {
        currentInput = value;
        resultShown = false;
      } else {
        currentInput += value;
      }
      display.textContent = currentInput;
    }
  });
});
