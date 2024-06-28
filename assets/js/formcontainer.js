document.addEventListener("DOMContentLoaded", function () {
  // Get references to all buttons with the class "show-form-button"
  var buttons = document.querySelectorAll(".show-form-button");
  var formContainer = document.getElementById("formContainer");
  var closeButton = document.getElementById("closeButton");
  var orderFormButton = document.getElementById("orderFormButton");

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

  // Add click event listener to the "Order Form" button
  orderFormButton.addEventListener("click", function (event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get the form action URL from the button attribute
    var formAction = orderFormButton.getAttribute("formaction");

    // Open the Google Form in a new tab
    window.open(formAction, "_blank");
  });
});
