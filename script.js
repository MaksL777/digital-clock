const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const ampm = document.getElementById('ampm');

function updateClock() {
  // Using JS Date() object avaScript creates a new "snapshot" of the current date and time.
  // It pulls this information directly from your computer’s system clock.
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let period = 'AM';

  if (h > 12) {
    h = h - 12;
    period = 'PM';
  }

  // Displaying 0 if h is less than 2 digit number
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hour.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.textContent = period;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
