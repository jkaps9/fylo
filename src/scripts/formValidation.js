const form = document.querySelector(".sign-up__form");
const email = document.getElementById("email");
const errorMessage = document.querySelector("#email + .error-message > p");

if (form) {
  form.addEventListener("submit", (e) => {
    if (!email.validity.valid) {
      showError();
      e.preventDefault();
    }
  });

  if (email) {
    (email.addEventListener("input"),
      () => {
        if (email.validity.valid) {
          email.classList.remove("error");
        } else {
          showError();
        }
      });
  }
}

function showError() {
  if (email.validity.valueMissing) {
    errorMessage.textContent = "You need to enter an email address";
  } else if (email.validity.typeMismatch) {
    errorMessage.textContent = "Entered value needs to be an email address.";
  } else if (!email.validity.valid) {
    errorMessage.textContent = "Error, please check your email";
  }
  email.classList.add("error");
}
