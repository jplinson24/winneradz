document.addEventListener("DOMContentLoaded", function() {
    // Get references to the button and form container
    var getStartedButton = document.getElementById("getStartedButton");
    var formContainer = document.getElementById("formContainer");
  
    // Add click event listener to the button
    getStartedButton.addEventListener("click", function(event) {
      // Prevent default link behavior
      event.preventDefault();
      // Show the form container
      formContainer.style.display = "block";
    });
  });