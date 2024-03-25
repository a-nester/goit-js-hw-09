const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const textareaMessage = form.elements['message'];

const localStorageKey = 'feedback-form-state';
const container = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

emailInput.value = container.input ?? '';
textareaMessage.value = container.message ?? '';

form.addEventListener('input', event => {
  const input = event.currentTarget[0].value;
  const message = event.currentTarget[1].value;
  container.input = input.trim();
  container.message = message.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(container));
});
// Submit and remove data from storage after submit
form.addEventListener('submit', event => {
  if (!container.input || !container.message) {
    return alert('You must fill all form fields!');
  }
  event.preventDefault();
  console.log(container);
  form.reset();
  delete container;
  localStorage.removeItem(localStorageKey);
});
