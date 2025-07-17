function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();
  const errorEl = document.getElementById("formError");

  if (!name || !email || !phone || !subject || !message) {
    errorEl.textContent = "Please fill in all fields.";
    return false;
  }

  errorEl.textContent = "";
  return true;
}
function greetUser() {
    alert("Welcome to My Python Project Website!");
}// Dark Mode Toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
}

toggle?.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

