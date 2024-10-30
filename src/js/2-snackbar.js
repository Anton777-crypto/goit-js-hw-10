// // Описаний у документації
// import iziToast from 'izitoast';
// // Додатковий імпорт стилів
// import 'izitoast/dist/css/iziToast.min.css';

// const input = document.querySelector('input[name="delay"]');
// const radio = document.querySelectorAll('input[name="state"]');

// const btn = document.querySelector('.btn');

// function checkPromise() {
//   const selectedState = [...radio].find(radio => radio.checked)?.value;
//   return new Promise((resolve, reject) => {
//     if (input.value > 0 && radio.value('fulfilled')) {
//       setTimeout(
//         () => resolve(`✅ Fulfilled promise in ${input.value}ms`),
//         input.value
//       );
//     } else
//       setTimeout(
//         () => reject(`❌ Rejected promise in ${input.value}ms`),
//         input.value
//       );
//   });
// }

// btn.addEventListener('click', event => {
//   event.preventDefault();
//   if (!document.querySelector('.notification')) {
//     document.body.innerHTML += `<div class="notification"></div>`;
//   }
//   const notification = document.querySelector('.notification');
//   checkPromise()
//     .then(message => {
//       notification.innerHTML = `<div class="success">${message}</div>`;
//     })
//     .catch(message => {
//       notification.innerHTML = `<div class="error">${message}</div>`;
//     });
// });

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const delay = Number(event.target.delay.value); // Отримуємо значення затримки
  const state = event.target.state.value; // Отримуємо значення стану (fulfilled або rejected)

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  // Обробка промісу
  promise
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
