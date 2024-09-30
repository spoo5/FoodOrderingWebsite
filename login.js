document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the form from submitting
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulated credentials (you can replace this later with real authentication)
  const validUsername = 'Sanidhya';
  const validPassword = '1210';

  if (username === validUsername && password === validPassword) {
      window.location.href = 'main.html';  // Redirect to dashboard or homepage
  } else {
      document.getElementById('error-message').style.display = 'block';
  }
});
