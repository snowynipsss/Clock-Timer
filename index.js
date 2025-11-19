// Digital Clock
function updateClock() {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeString = now.toLocaleTimeString();
    document.getElementById('clock').innerHTML =
        `<span class="date">${dateString}</span>${timeString}`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

// Countdown Timer
let countdownInterval;
let endTime;

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
   
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds <= 0) return;
   
    endTime = Date.now() + totalSeconds * 1000;
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = Date.now();
    const remaining = Math.max(0, endTime - now);
   
    if (remaining <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('timer').textContent = "Time's up!";
        return;
    }
   
    const hours = Math.floor(remaining / 3600000);
    const minutes = Math.floor((remaining % 3600000) / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
   
    document.getElementById('timer').textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(countdownInterval);
    document.getElementById('timer').textContent = "00:00:00";
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}
