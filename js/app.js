// start pin-matcher
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
// generate pin

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

// pin-matcher key-pad
document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

//  matcher combinations

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typeNumbers = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typeNumbers) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    successMessage.style.display = "none";
    failError.style.display = "block";
  }
}
