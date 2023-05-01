const form = document.getElementById('email-form');
const emailInput = document.getElementById('email-el');
const errorMessage = document.getElementById('error-message');
const thankYouContainer = document.getElementById('thank-you-container');
const errorIcon = document.querySelector('.error-icon');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page

    const email = emailInput.value;

    // Check if the email address is not empty and is formatted correctly
    if (email === '' || !isValidEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        emailInput.style.border = "2px solid #F96464";

        // Show the error icon only if the screen width is at least 1050px
        if (window.innerWidth >= 1050) {
            errorIcon.style.display = "block";
        }
    } else {
        // Do something with the email address
        console.log(email);
        errorMessage.textContent = ''; // Clear the error message if the email address is valid

        // Hide the form and display the thank you container
        form.style.display = 'none';
        thankYouContainer.style.display = 'block';
    }
});

// Function to validate the email address using a regular expression
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
