let isDarkMode = true;

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
}

function setAlarm() {
  const alarmTime = document.getElementById('alarmTime').value;
  const [alarmHours, alarmMinutes] = alarmTime.split(':');
  const now = new Date();
  const alarm = new Date(now.getFullYear(), now.getMonth(), now.getDate(), alarmHours, alarmMinutes, 0);

  const timeUntilAlarm = alarm - now;
  if (timeUntilAlarm > 0) {
    setTimeout(() => {
      document.getElementById('alarmSound').play();
      alert('Time is up!');
    }, timeUntilAlarm);
  } else {
    alert('Please select a future time for the alarm.');
  }
}

function toggleMode() {
  const body = document.body;
  if (isDarkMode) {
    body.style.backgroundColor = '#fff';
    document.querySelector('.mode-btn').textContent = 'Dark Mode';
  } else {
    body.style.backgroundColor = '#222';
    document.querySelector('.mode-btn').textContent = 'Light Mode';
  }
  isDarkMode = !isDarkMode;
}

updateTime();
setInterval(updateTime, 1000);