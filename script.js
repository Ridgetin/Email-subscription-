const form = document.getElementById('subscribeForm');
const status = document.getElementById('status');

// Replace with your Google Apps Script deployment URL
const SCRIPT_URL = 'YOUR_DEPLOYMENT_URL';

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  
  status.innerHTML = 'Submitting...';
  
  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, timestamp: new Date().toISOString() })
  })
  .then(() => {
    status.innerHTML = 'Thank you for subscribing!';
    status.className = 'success';
    form.reset();
  })
  .catch(error => {
    status.innerHTML = 'Oops! Something went wrong.';
    status.className = 'error';
    console.error('Error:', error);
  });
});
