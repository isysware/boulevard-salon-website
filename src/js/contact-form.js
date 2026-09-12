export function initContactForm() {
  const form = document.getElementById('appointmentForm') || document.querySelector('form');
  const successMsg = document.getElementById('successMsg');
  if (form && successMsg) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      successMsg.style.display = 'block';
      successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
}
