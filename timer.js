const cooldownSeconds = 15;
const cooldownKey = "lastCooldownEnd";
const startKey = "cooldownStartTime";
const overlay = document.getElementById("cooldownOverlay");
const timerDisplay = document.getElementById("cooldownTimer");

const now = Date.now();
let startedAt = parseInt(localStorage.getItem(startKey));

if (!startedAt) {
  // First visit or no previous start — set start time now
  startedAt = now;
  localStorage.setItem(startKey, startedAt.toString());
}

let elapsed = Math.floor((now - startedAt) / 1000);
let remaining = Math.max(0, cooldownSeconds - elapsed);

if (remaining > 0) {
  // Delay cooldown by 3 seconds
  setTimeout(() => {
    startCooldown(remaining);
  }, 5000);
} else {
  // Already finished cooldown
  overlay.style.display = "none";
  localStorage.setItem(cooldownKey, now.toString());
  localStorage.removeItem(startKey); // Reset for next visit
}

function startCooldown(seconds) {
  overlay.style.display = "flex";
  document.body.classList.add("disable-clicks");

  let timeLeft = seconds;
  timerDisplay.textContent = timeLeft;

  const interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    // Save the current time for refresh recovery
    localStorage.setItem(startKey, Date.now().toString());

    if (timeLeft <= 0) {
      clearInterval(interval);
      overlay.style.display = "none";
      document.body.classList.remove("disable-clicks");
      localStorage.setItem(cooldownKey, Date.now().toString());
      localStorage.removeItem(startKey); // Reset for next visit
    }
  }, 1000);
}
