const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const passVal = password.value.trim();
  const repeatPassVal = repeatPassword.value.trim();

  if (usernameVal === "") {
    setError(username, "Podaj nazwę użytkownika");
  } else {
    setSuccess(username);
  }

  if (emailVal === "") {
    setError(email, "Podaj adres e-mail");
  } else if (!checkEmail(emailVal)) {
    setError(email, "Podany adres e-mail jest niepoprawny");
  } else {
    setSuccess(email);
  }

  if (passVal === "") {
    setError(password, "Podaj hasło");
  } else {
    setSuccess(password);
  }

  if (repeatPassVal === "") {
    setError(repeatPassword, "Powtórz hasło");
  } else if (passVal !== repeatPassVal) {
    setError(repeatPassword, "Powtórzone hasła nie jest identyczne");
  } else {
    setSuccess(repeatPassword);
  }
}

function setError(input, message) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");

  small.innerText = message;
  formGroup.className = "form-group mt-3 error";
}

function setSuccess(input) {
  const formGroup = input.parentElement;
  const small = formGroup.querySelector("small");
  small.innerText = "";
  formGroup.className = "form-group mt-3 success";
}

function checkEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
