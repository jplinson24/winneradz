document.addEventListener("DOMContentLoaded", function () {
  var buttons = document.querySelectorAll(".show-form-button");
  var formContainer = document.getElementById("formContainer");
  var closeButton = document.getElementById("closeButton");

  // Initially hide the form container
  formContainer.style.display = "none";

  // Add click event listener to each button
  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      formContainer.style.display = "block";
    });
  });

  // Add click event listener to the close button
  closeButton.addEventListener("click", function () {
    formContainer.style.display = "none";
  });

  // Add click event listener to the document
  document.addEventListener("click", function (event) {
    // Check if the clicked element is outside the form container and not the show-form-button
    if (
      !formContainer.contains(event.target) &&
      !event.target.classList.contains("show-form-button")
    ) {
      formContainer.style.display = "none";
    }
  });

  // Prevent event propagation when clicking inside the form container
  formContainer.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  // Add scroll event listener to the window
  window.addEventListener("scroll", function () {
    formContainer.style.display = "none";
  });

  // Add keydown event listener for the Escape key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      formContainer.style.display = "none";
    }
  });
});
