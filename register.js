document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = 'profile.html';
});
const storedUsername = localStorage.getItem('username');
const storedEmail = localStorage.getItem('email');
const storedPassword = localStorage.getItem('password');
document.getElementById('usernameDisplay').textContent = storedUsername;
document.getElementById('emailDisplay').textContent = storedEmail;
