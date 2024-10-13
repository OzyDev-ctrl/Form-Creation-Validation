document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission

      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      let isValid = true;
      const messages = [];

      // Username validation
      if (username.length < 3) {
          isValid = false;
          messages.push('Username must be at least 3 characters long.');
      }

      // Email validation
      if (!email.includes('@') || !email.includes('.')) {
          isValid = false;
          messages.push('Email must include "@" and "." characters.');
      }

      // Password validation
      if (password.length < 8) {
          isValid = false;
          messages.push('Password must be at least 8 characters long.');
      }

      // Feedback display
      feedbackDiv.style.display = 'block'; // Make feedback visible
      if (isValid) {
          feedbackDiv.textContent = 'Registration successful!';
          feedbackDiv.style.color = '#28a745';
      } else {
          feedbackDiv.innerHTML = messages.join('<br>'); // Use innerHTML to format multiple messages
          feedbackDiv.style.color = '#dc3545';
      }
  });
});
