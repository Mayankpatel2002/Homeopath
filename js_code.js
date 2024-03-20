// This script is just for basic form validation, you can extend it further

const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const licenseNumber = document.getElementById('license-number').value;

  // Add validation checks here
  // For example, you can check if email is
