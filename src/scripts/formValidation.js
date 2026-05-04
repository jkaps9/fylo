const form = document.querySelector(".sign-up__form");
const email = document.getElementById("email");

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
    email.setCustomValidity("You need to enter an email address");
  } else if (email.validity.typeMismatch) {
    email.setCustomValidity("Entered value needs to be an email address.");
  } else if (!email.validity.valid) {
    email.setCustomValidity(
      "You need to enter a proper email address such as example@email.com",
    );
  }
  email.classList.add("error");
}
