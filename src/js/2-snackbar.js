// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[typr="number"]');
const radio = document.querySelector('input[typr="radio"]');
const delay = 1000;
const btn = document.querySelector('.btn');

function checkPromise() {
  return new Promise((resolve, reject) => {
    if (input.value > 0 && radio.value('fulfilled')) {
      setTimeout(() => resolve(`✅ Fulfilled promise in ${delay}ms`), delay);
    } else setTimeout(() => reject(`❌ Rejected promise in ${delay}ms`), delay);
  });
}

btn.addEventListener('click', event => {
  event.preventDefault();
  if (!document.querySelector('.notification')) {
    document.body.innerHTML = `<div class="notification"></div>`;
  }
  const notification = document.querySelector('.notification');
  checkPromise()
    .then(message => {
      notification.innerHTML = `<div class="success">${message}</div>`;
    })
    .catch(message => {
      notification.innerHTML = `<div class="error">${message}</div>`;
    });
});
