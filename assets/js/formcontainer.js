document.addEventListener("DOMContentLoaded", function() {
  // Get references to the button, form container, and close button
  var getStartedButton = document.getElementById("getStartedButton");
  var formContainer = document.getElementById("formContainer");
  var closeButton = document.getElementById("closeButton");

  // Initially hide the form container
  formContainer.style.display = "none";

  // Add click event listener to the button
  getStartedButton.addEventListener("click", function(event) {
      // Prevent default link behavior
      event.preventDefault();
      // Show the form container
      formContainer.style.display = "block";
  });

  // Add click event listener to the close button
  closeButton.addEventListener('click', function() {
      // Hide the form container
      formContainer.style.display = 'none';
  });
});
