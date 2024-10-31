// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.delay.value); // Отримуємо значення затримки

  const state = event.target.state.value;
  const btn = document;
  const selectPromis = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      resolve(delay);
    } else {
      reject(delay);
    }
  }, delay);

  selectPromis
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'error',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    });
  form.reset();
});
