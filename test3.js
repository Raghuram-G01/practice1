function validateForm() {
  let isValid = true;

  // Get form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Get error message elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  // Validate name
  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else if (name.length < 3) {
    nameError.textContent = "Name must be at least 3 characters long.";
    isValid = false;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  // Validate password
  if (password === "") {
    passwordError.textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters long.";
    isValid = false;
  }

  return isValid; // Prevent form submission if validation fails
}
