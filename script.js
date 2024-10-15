document.getElementById('actionButton').addEventListener('click', () => {
    // Example of adding interactivity: change the background color of the animated box
    document.querySelector('.animated-box').style.backgroundColor = 'red';
    alert('Button clicked! Done.');
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from submitting to the server
    alert('Form submitted! Successful.');
});
