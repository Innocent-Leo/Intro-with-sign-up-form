const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("emailAddress");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputFields();
});

const checkInputFields = () => {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    errorMsg(firstName, "First Name cannot be empty");
  } else {
    success(firstName);
  }

  if (lastNameValue === "") {
    errorMsg(lastName, "LastName cannot be empty");
  } else {
    success(lastName);
  }

  if (emailValue === "") {
    errorMsg(email, "Email Address cannot be empty");
  } else if (!validEmail(emailValue)) {
    errorMsg(email, "looks like this is not an email");
  } else {
    success(email);
  }

  if (passwordValue === "") {
    errorMsg(password, "Password cannot be empty");
  } else if (!firstNameValue && !lastNameValue && !emailValue) {
    errorMsg(password, "Please fill out other fields");
  } else if (passwordValue.length < 8) {
    errorMsg(password, "Password must at least 8 characters");
  } else {
    success(password);
  }
};

const errorMsg = (e, message) => {
  const formControl = e.parentElement;
  const small = formControl.querySelector(".error-message");

  small.textContent = message;

  formControl.className = "form-control error";
};

const success = (e) => {
  const formControl = e.parentElement;
  formControl.className = "form-control success";
};

const validEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const inputs = form.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const formControl = e.target.parentElement;
    formControl.classList.remove("error");
  });
});
