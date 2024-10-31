// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const value_input = Number(event.target.value_input.value);
  const select_input = event.target.select_input.value;
  const btn = document;
  const selectPromis = new Promis((resolve, reject) => {
    if (select_input === 'fulfilled') {
      resolve(`✅ Fulfilled promise in ${value_input}ms`);
    } else {
      reject(`❌ Rejected promise in ${value_input}ms`);
    }
  }, value_input);

  selectPromis
    .then(value_input => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'center',
        color: 'yelow',
      });
    })
    .capth(value_input => {
      iziToast.error({
        title: 'error',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'center',
        color: 'blue',
      });
    });
});
