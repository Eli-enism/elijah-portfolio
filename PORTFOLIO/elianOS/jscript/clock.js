// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the time as HH:MM:SS
    const timeString = `${hours}:${minutes}`;

    // Display the time in the clock div
    document.getElementById('clock').textContent = timeString;
  }

  // Update the clock every second
  setInterval(updateClock, 1000);

  // Initial call to display the time immediately
  updateClock();