// Project
// DigitalClock
setInterval(() => {
  document.getElementById("clockData").textContent =
    new Date().toLocaleTimeString();
}, 1000);
