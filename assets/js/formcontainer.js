document.addEventListener("DOMContentLoaded", function () {
  // Get references to all buttons with the class "show-form-button"
  var buttons = document.querySelectorAll(".show-form-button");
  var formContainer = document.getElementById("formContainer");
  var closeButton = document.getElementById("closeButton");

  // Initially hide the form container
  formContainer.style.display = "none";

  // Add click event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Prevent default link behavior
      event.preventDefault();
      // Show the form container
      formContainer.style.display = "block";
    });
  });

  // Add click event listener to the close button
  closeButton.addEventListener("click", function () {
    // Hide the form container
    formContainer.style.display = "none";
  });

  // Functionality for submit button enable/disable
  var nameInput = document.getElementById("nameInput");
  var emailInput = document.getElementById("emailInput");
  var submitButton = document.getElementById("submitButton");
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");

  function toggleSubmitButton() {
    submitButton.disabled =
      nameInput.value.trim() === "" || emailInput.value.trim() === "";
  }

  nameInput.addEventListener("input", function () {
    nameError.style.display = nameInput.value.trim() === "" ? "block" : "none";
    toggleSubmitButton();
  });

  emailInput.addEventListener("input", function () {
    emailError.style.display =
      emailInput.value.trim() === "" ? "block" : "none";
    toggleSubmitButton();
  });

  // Validate form on submit
  var inquiryForm = document.getElementById("inquiryForm");
  inquiryForm.addEventListener("submit", function (event) {
    var valid = true;

    if (nameInput.value.trim() === "") {
      nameError.style.display = "block";
      valid = false;
    }

    if (emailInput.value.trim() === "") {
      emailError.style.display = "block";
      valid = false;
    }

    if (!valid) {
      event.preventDefault();
    }
  });

  // Open Google Form in a new tab
  var orderFormButton = document.getElementById("orderFormButton");
  orderFormButton.addEventListener("click", function () {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSd94t7fZWR_74r-dQAdMtXTab0EgOyv__W1Pep7-OOJuaNFpg/viewform",
      "_blank"
    );
  });
});
