const form = document.querySelector(".contact-form");
const message = document.querySelector(".form-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const msg = form.querySelector("textarea").value.trim();

  // Email format check regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || msg === "") {
    message.textContent = "Please fill all fields!";
    message.style.color = "red";
    return;
  }

  if (!email.match(emailPattern)) {
    message.textContent = "Please enter a valid email address!";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "lime";
  form.reset();
});