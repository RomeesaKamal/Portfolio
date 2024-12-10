document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#formID");
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");
  const textArea = document.querySelector("#message");
  const successMessage = document.querySelector(".sucessMessage");
  const firstNameError = document.querySelector(".firstNameError");
  const lastNameError = document.querySelector(".lastNameError");
  const emailError = document.querySelector(".emailError");
  const textAreaError = document.querySelector(".textAreaError");

  // Load data from local storage
  const savedData = JSON.parse(localStorage.getItem("formData"));
  if (savedData) {
    firstName.value = savedData.firstName || "";
    lastName.value = savedData.lastName || "";
    email.value = savedData.email || "";
    textArea.value = savedData.message || "";
  }

  // Function to hide error when user starts typing
  function removeErrorOnInput(inputField, errorElement) {
    inputField.addEventListener("input", () => {
      if (inputField.value.trim() !== "") {
        errorElement.textContent = ""; // Clear error message
      }
    });
  }

  // Attach listeners to inputs
  removeErrorOnInput(firstName, firstNameError);
  removeErrorOnInput(lastName, lastNameError);
  removeErrorOnInput(email, emailError);
  removeErrorOnInput(textArea, textAreaError);

  function errorMessage() {
    let hasError = false;

    if (firstName.value.trim() === "") {
      firstNameError.textContent = "This field is required";
      firstNameError.style.color = "red";
      hasError = true;
    } else if (firstName.value.length < 3) {
      firstNameError.textContent = "First Name should at least 3 characters long";
      firstNameError.style.color = "red";
      hasError = true;
    } else {
      firstNameError.textContent = "";
    }

    if (lastName.value.trim() === "") {
      lastNameError.textContent = "This field is required";
      lastNameError.style.color = 'red';
      hasError = true;
    } else {
      lastNameError.textContent = "";
    }

    if (email.value.trim() === "") {
      emailError.textContent = "This field is required";
      emailError.style.color = 'red';
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email.value.trim())) {
      emailError.textContent = "Invalid email address";
      emailError.style.color = 'red';
      hasError = true;
    } else {
      emailError.textContent = "";
    }

    if (textArea.value.trim() === "") {
      textAreaError.textContent = "This field is required";
      textAreaError.style.color = 'red';
      hasError = true;
    } else {
      textAreaError.textContent = "";
    }

    return hasError;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const hasError = errorMessage();

    if (!hasError) {
      const formData = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        message: textArea.value.trim(),
      };

      // Save data to local storage
      localStorage.setItem("formData", JSON.stringify(formData));

      // Display success message
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.color = "green";

      // Clear input fields
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      textArea.value = "";
    } else {
      successMessage.textContent = "";
    }
    setTimeout(() => {
      successMessage.textContent = "";
      // Auto-hide after 2seconds
    }, 2000);

  
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".nav-bar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

