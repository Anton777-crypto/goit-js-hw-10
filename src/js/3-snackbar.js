// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(event.target.delay.value); // Отримуємо значення затримки

  //   const input = Number(event.target.input.value);
  const state = event.target.state.value;
  const btn = document;
  const selectPromis = new Promis((resolve, reject) => {
    if (state === 'fulfilled') {
      resolve(`✅ Fulfilled promise in ${input}ms`);
    } else {
      reject(`❌ Rejected promise in ${input}ms`);
    }
  }, input);

  selectPromis
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'center',
        color: 'yelow',
      });
    })
    .capth(delay => {
      iziToast.error({
        title: 'error',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'center',
        color: 'blue',
      });
    });
  form.reset();
});
