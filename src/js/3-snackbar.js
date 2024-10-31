// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[name="delay"]');
const radio = document.querySelectorAll('input[name="state"]');

const btn = document.querySelector('.btn');

function checkPromise() {
  return new Promise((resolve, reject) => {
    if (input.value > 0 && radio.value('fulfilled')) {
      setTimeout(
        () => resolve(`✅ Fulfilled promise in ${input.value}ms`),
        input.value
      );
    } else
      setTimeout(
        () => reject(`❌ Rejected promise in ${input.value}ms`),
        input.value
      );
  });
}

btn.addEventListener('click', event => {
  event.preventDefault();
  if (!document.querySelector('.notification')) {
    document.body.innerHTML += `<div class="notification"></div>`;
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

// const radioButtons = document.querySelectorAll('.input_radio');
//     const submitButton = document.getElementById('submitBtn');

//     submitButton.addEventListener('click', function() {
//         let selectedState;
//         radioButtons.forEach(radio => {
//             if (radio.checked) {
//                 selectedState = radio.value;
//             }
//         });

//         if (selectedState) {
//             // Выбрано значение selectedState, выполните необходимые действия здесь
//             console.log('Выбрано значение:', selectedState);
//         } else {
//             // Ни один из радио-кнопок не выбран
//             console.log('Пожалуйста, выберите один из вариантов');
//         }
//     });
// </script>
