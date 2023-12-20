const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

function validatePassword(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent default form submission
    var inputElement = document.getElementById('passwordInput');
    var errorMessageElement = document.getElementById('errorMessage');
    var successMessageElement = document.getElementById('successMessage');
    var hashedPassword = hashPassword('HireMe2024'); // Use a secure hashing algorithm

    if (inputElement.value === 'HireMe2024') {
      errorMessageElement.textContent = '';
      successMessageElement.textContent = 'Password correct. Page in progress.';
    } else {
      errorMessageElement.textContent = 'Incorrect password. Please try again.';
      successMessageElement.textContent = '';
    }
  }
}

function hashPassword(password) {
  // Use a secure hashing algorithm (e.g., bcrypt) in a real-world scenario
  // This example uses a simple hashing method (for demonstration purposes only)
  var hash = 0;
  for (var i = 0; i < password.length; i++) {
    var char = password.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return hash.toString();
}
