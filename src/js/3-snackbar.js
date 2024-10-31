// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[name="delay"]');
const radio = document.querySelectorAll('input[name="state"]');
const form = document.querySelector('.form');
const btn = document.querySelector('.btn');

form.addEventListener('submit', event => {
  event.preventDefault();

  const value_input = Number(event.target.dalay.value);
  const select_input = event.target.state.value;

  const selectPromis = new Promis((resolve, reject) => {
    if (select_input === 'fulfilled') {
      resolve(`✅ Fulfilled promise in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise in ${delay}ms`);
    }
  }, value_input);
});
selectPromis().then(value_input => {
  iziToast.success({
    title: 'Success',
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
  iziToast.error({
    title: 'error',
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight',
  });
});
