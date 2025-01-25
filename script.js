// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
 
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    let valid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Check if all fields are filled
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      valid = false;
    }
  
    if (!valid) {
      e.preventDefault(); 
    }
  });
  
  // 3. Popup Confirmation for Download Button
  function showConfirmation(appName) {
    const confirmation = confirm(`Are you sure you want to download ${appName}?`);
    if (confirmation) {
      alert(`${appName} download initiated.`);
      
    }
  }
  