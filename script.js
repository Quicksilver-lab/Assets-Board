function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'QuickSilver' && password === 'Quickly@base') {
      window.location.href = 'Quicksilveristheonewhocreatedthiasiteonlyforeducationalpurposes.html'; // Redirect to the main website
    } else {
      alert('Invalid username or password');
    }
  }
  