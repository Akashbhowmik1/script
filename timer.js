const cooldownSeconds = 30;
const cooldownKey = "lastCooldownEnd";
const startKey = "cooldownStartTime";
const overlay = document.getElementById("cooldownOverlay");
const timerDisplay = document.getElementById("cooldownTimer");

const now = Date.now();
const lastEnd = parseInt(localStorage.getItem(cooldownKey)) || 0;
const startedAt = parseInt(localStorage.getItem(startKey)) || now;
const timeSinceEnd = now - lastEnd;

const oneMinute = 1 * 60 * 1000; // ⏱️ Cooldown only if user comes after 1 minute

let remaining;

if (timeSinceEnd < oneMinute && lastEnd !== 0) {
  // ✅ User came back within 1 min → no cooldown
  overlay.style.display = "none";
} else {
  // ⏳ User came after 1 min → check remaining time
  const elapsed = Math.floor((now - startedAt) / 1000);
  remaining = Math.max(0, cooldownSeconds - elapsed);

  if (remaining > 0) {
    // ⏱️ Delay cooldown appearance by 3 seconds
    setTimeout(() => {
      startCooldown(remaining);
    }, 3000);
  } else {
    // ✅ Already waited before refresh — mark as finished
    localStorage.setItem(cooldownKey, now.toString());
  }
}

function startCooldown(seconds) {
  overlay.style.display = "flex";
  document.body.classList.add("disable-clicks");

  let timeLeft = seconds;
  timerDisplay.textContent = timeLeft;

  const interval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    localStorage.setItem(startKey, Date.now().toString());

    if (timeLeft <= 0) {
      clearInterval(interval);
      overlay.style.display = "none";
      document.body.classList.remove("disable-clicks");
      localStorage.setItem(cooldownKey, Date.now().toString());
    }
  }, 1000);
}
