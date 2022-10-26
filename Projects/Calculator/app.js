const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".buttons");
const numbers = document.querySelectorAll(".numbers");

let actualNumber,
  previousNumber = 0;

let mathOption;

screen.innerText = 0;

buttons.forEach((button) => {
  button.onclick = () => {
    if (button.id == "C") {
      screen.innerText = 0;
      previousNumber = 0;
    } else if (button.id == "back") {
      let string = screen.innerText.toString();
      screen.innerText = string.substr(0, string.length - 1);
    } else if (
      button.id == "0" ||
      button.id == "1" ||
      button.id == "2" ||
      button.id == "3" ||
      button.id == "4" ||
      button.id == "5" ||
      button.id == "6" ||
      button.id == "7" ||
      button.id == "8" ||
      button.id == "9"
    ) {
      if (screen.innerText == "0" || screen.innerText == "") {
        screen.innerText = button.id;
      } else {
        screen.innerText += button.id;
      }
    } else if (button.id == "+") {
      if (screen.innerText != "") {
        previousNumber += parseFloat(screen.innerText);
        screen.innerText = "";
      }
      mathOption = "+";
    } else if (button.id == "-") {
      if (screen.innerText !== "") {
        if (previousNumber == 0) {
          previousNumber += parseFloat(screen.innerText);
        } else {
          previousNumber -= parseFloat(screen.innerText);
        }
        screen.innerText = "";
      }
      mathOption = "-";
    } else if (button.id == "*") {
      if (screen.innerText != "") {
        if (previousNumber == 0) {
          previousNumber += parseFloat(screen.innerText);
        } else {
          previousNumber *= parseFloat(screen.innerText);
        }
        screen.innerText = "";
      }
      mathOption = "*";
    } else if (button.id == "/") {
      if (screen.innerText != "") {
        if (previousNumber == 0) {
          previousNumber += parseFloat(screen.innerText);
        } else {
          previousNumber /= parseFloat(screen.innerText);
        }
        screen.innerText = "";
      }
      mathOption = "/";
    } else if (button.id == "&radic") {
      if (previousNumber == 0 || previousNumber == "") {
        previousNumber += parseFloat(screen.innerText);
      }
      previousNumber = Math.sqrt(previousNumber);
      screen.innerText = previousNumber;
    } else if (button.id == "x^2") {
      if (previousNumber == 0 || previousNumber == "") {
        previousNumber += parseFloat(screen.innerText);
      }
      previousNumber = Math.pow(previousNumber, 2);
      screen.innerText = previousNumber;
    } else if (button.id == "2^") {
      if (previousNumber == 0 || previousNumber == "") {
        previousNumber += parseFloat(screen.innerText);
      }
      previousNumber = Math.pow(2, previousNumber);
      screen.innerText = previousNumber;
    } else if (button.id == "+/-") {
      screen.innerText *= -1;
    } else if (button.id == ".") {
      screen.innerText += ".";
    } else if (button.id == "=") {
      if (!screen.innerText == "") {
        actualNumber = parseFloat(screen.innerText);
        let result;
        switch (mathOption) {
          case "+":
            result = parseFloat(actualNumber) + parseFloat(previousNumber);
            break;
          case "-":
            result = parseFloat(previousNumber) - parseFloat(actualNumber);
            break;
          case "*":
            result = parseFloat(previousNumber) * parseFloat(actualNumber);
            break;
          case "/":
            result = parseFloat(previousNumber) / parseFloat(actualNumber);
            break;
          default:
            result = 0;
            break;
        }

        screen.innerText = result;
        previousNumber = 0;
        actualNumber = 0;
      }
    }
  };
});
