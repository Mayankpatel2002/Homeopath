const form = document.getElementById('signup-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Form validation (replace with your own logic)
    if (username === '' || password === '') {
        alert('Please fill out all fields');
        return;
    }

    // Send form data to server (replace with your own logic)
    console.log(`Username: ${username}, Password: ${password}`);

    // Clear form after successful submission
    form.reset();
});
