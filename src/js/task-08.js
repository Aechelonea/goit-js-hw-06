const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Proszę uzupełnić wszystkie pola.");
  }

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });

  event.currentTarget.reset();
}
