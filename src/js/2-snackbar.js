// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('number');
const radio = document.querySelector('radio');
const delay = input.value;

// input.addEventListener('number', () => {
//   if (input.value > 0 || radio.value('fulfilled')) {
//     `✅ Fulfilled promise in ${delay}ms`;
//   } else `❌ Rejected promise in ${delay}ms`;
// });

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
      console.log(message);
    })
    .catch(message => {
      console.log(message);
    });
});
