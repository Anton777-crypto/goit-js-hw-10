// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('number');
const radio = document.querySelector('radio');
const delay = input.value;

const btn = document.querySelector('submit');
function checkPromise() {
  return new Promise((resolve, reject) => {
    if (input.value > 0 && radio.value('fulfilled')) {
      setTimeout(() => resolve(`✅ Fulfilled promise in ${delay}ms`), delay);
    } else setTimeout(() => reject(`❌ Rejected promise in ${delay}ms`), delay);
  });
}

btn.addEventListener('click', event => {
  event.preventDefault();

  checkPromise()
    .then(message => {
      notification.innerHTML = `<div class="success">${message}</div>`;
    })
    .catch(message => {
      notification.innerHTML = `<div class="error">${message}</div>`;
    });
});
