import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('#data-start');
const data_days = document.querySelector('#data-days');
const data_hours = document.querySelector('#data-hours');
const data_minutes = document.querySelector('#data-minutes');
const data_seconds = document.querySelector('#data-seconds');
let userSelectedDate = null;
let timerId = null;

btn.disabled = true; // Кнопка неактивна при загрузке

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      btn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      btn.disabled = false;
    }
  },
});

btn.addEventListener('click', () => {
  if (timerId) return; // Избегаем повторного запуска таймера

  input.disabled = true;
  btn.disabled = true;

  timerId = setInterval(() => {
    const now = new Date();
    const timeLeft = userSelectedDate - now;

    if (timeLeft <= 0) {
      clearInterval(timerId);
      timerId = null;
      input.disabled = false;
      updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    const time = convertMs(timeLeft);
    updateTimerDisplay(time);
  }, 1000);
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
  data_days.textContent = addLeadingZero(days);
  data_hours.textContent = addLeadingZero(hours);
  data_minutes.textContent = addLeadingZero(minutes);
  data_seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
