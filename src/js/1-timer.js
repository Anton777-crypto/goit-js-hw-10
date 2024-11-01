import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const data_days = document.querySelector('[data-days]');
const data_hours = document.querySelector('[data-hours]');
const data_minutes = document.querySelector('[data-minutes]');
const data_seconds = document.querySelector('[data-seconds]');

let userSelectedDate = null;

btn.disabled = true;

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
        title: 'Ошибка',
        message: 'Please choose a date in the future',
        position: 'topRight',
      });
      btn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      btn.disabled = false;
    }
  },
});

btn.addEventListener('click', () => {
  if (userSelectedDate) {
    startCountdown();
    btn.disabled = true;
    input.disabled = true;
  }
});

function startCountdown() {
  const intervalId = setInterval(() => {
    const now = new Date();
    const msLeft = userSelectedDate - now;

    if (msLeft <= 0) {
      clearInterval(intervalId);
      updateDisplay(0, 0, 0, 0);
      input.disabled = false;
    } else {
      const { days, hours, minutes, seconds } = convertMs(msLeft);
      updateDisplay(days, hours, minutes, seconds);
    }
  }, 1000);
}

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

function updateDisplay(days, hours, minutes, seconds) {
  data_days.textContent = addLeadingZero(days);
  data_hours.textContent = addLeadingZero(hours);
  data_minutes.textContent = addLeadingZero(minutes);
  data_seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
