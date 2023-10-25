/**
* PHP Email Form Validation - v3.6
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
function validateEmail() {
  var emailInput = document.getElementById("email");
  var emailValue = emailInput.value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
  }
  return true;
}
