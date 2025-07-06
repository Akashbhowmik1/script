document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const searchInput = document.getElementById("executor-search")
  const filterTags = document.querySelectorAll(".filter-tag")
  const sections = document.querySelectorAll(".glass-card")
  const executorCards = document.querySelectorAll(".executor-card")
  const themeToggle = document.getElementById("theme-toggle")
  const popup = document.getElementById("popup")

  // Theme toggle functionality
  themeToggle.addEventListener("click", () => {
    const html = document.documentElement
    const currentTheme = html.getAttribute("data-theme")
    const newTheme = currentTheme === "dark" ? "light" : "dark"
    
    html.setAttribute("data-theme", newTheme)
    
    // Update theme toggle button text and icon
    if (newTheme === "dark") {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode'
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'
    }
    
    // Save theme preference to localStorage
    localStorage.setItem("theme", newTheme)
  })

  // Load saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme)
    
    // Update theme toggle button text and icon based on saved theme
    if (savedTheme === "light") {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode'
    } else {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode'
    }
  }

  // Intersection Observer for reveal animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal")
        }
      })
    },
    { threshold: 0.1 },
  )

  sections.forEach((section) => observer.observe(section))

  // Filter functionality
  function filterExecutors() {
    const searchTerm = searchInput.value.toLowerCase()
    const activeFilter = document.querySelector(".filter-tag.active")?.getAttribute("data-filter") || "all"

    executorCards.forEach((card) => {
      const sectionId = card.closest("section").id
      const executorName = card.querySelector("h3").textContent.toLowerCase()

      const matchesSearch = !searchTerm || executorName.includes(searchTerm)
      const matchesFilter = activeFilter === "all" || sectionId === activeFilter

      card.classList.toggle("hidden", !(matchesSearch && matchesFilter))
    })

    // Show/hide sections based on visible cards
    sections.forEach((section) => {
      const hasVisibleCards = section.querySelectorAll(".executor-card:not(.hidden)").length > 0
      section.classList.toggle("hidden", !hasVisibleCards)
    })
  }

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", filterExecutors)
  }

  // Platform filter functionality
  filterTags.forEach((tag) => {
    tag.addEventListener("click", () => {
      filterTags.forEach((t) => t.classList.remove("active"))
      tag.classList.add("active")
      filterExecutors()
    })
  })

  // Blob animation
  window.addEventListener("mousemove", (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01

    document.querySelectorAll(".blob").forEach((blob) => {
      const speed = Number.parseInt(blob.classList[0].replace("blob", "")) * 0.5
      blob.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`
    })
  })

  // Copy functionality for download links
  document.querySelectorAll('.download-link-input').forEach(input => {
    const container = document.createElement('div');
    container.className = 'download-link-container';
    input.parentNode.insertBefore(container, input);
    container.appendChild(input);
    
    const copyButton = document.createElement('button');
    copyButton.className = 'copy-button';
    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
    container.appendChild(copyButton);

    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(input.value);
        copyButton.innerHTML = '<i class="fas fa-check"></i>';
        copyButton.classList.add('copied');
        setTimeout(() => {
          copyButton.innerHTML = '<i class="fas fa-copy"></i>';
          copyButton.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  });

  // Initialize filters
  filterExecutors()
})

// Define global functions for popup
window.showDownloadPopup = (executor) => {
  console.log("Opening popup for:", executor)
  const popup = document.getElementById("popup")
  if (!popup) {
    console.error("Popup element not found")
    return
  }

  const bit64Link = document.getElementById("bit64")
  const bit32Link = document.getElementById("bit32")
  const popupTitle = popup.querySelector("h3")
  const popupMessage = popup.querySelector("p")

  if (!bit64Link || !bit32Link || !popupTitle || !popupMessage) {
    console.error("Popup elements not found")
    return
  }

  // Update popup title and message with executor name
  popupTitle.textContent = `Download ${executor}`
  popupMessage.textContent = `Choose the appropriate version of ${executor} for your device:`

  // Set download links based on executor
  const downloadPaths = {
    ifk: {
      "64bit": "",
      "32bit": "",
    }
  }

  if (downloadPaths[executor]) {
    bit64Link.href = downloadPaths[executor]["64bit"]
    bit32Link.href = downloadPaths[executor]["32bit"]
  } else {
    console.warn(`No download paths defined for ${executor}`)
    bit64Link.href = "#"
    bit32Link.href = "#"
  }

  // Show the popup
  popup.style.display = "flex"
  document.body.style.overflow = "hidden" // Prevent scrolling
}

window.closePopup = () => {
  console.log("Closing popup")
  const popup = document.getElementById("popup")
  if (!popup) return

  // Hide the popup
  popup.style.display = "none"

  // Re-enable scrolling
  document.body.style.overflow = ""
}

// Add these event listeners outside of the DOMContentLoaded event
document.addEventListener("click", (e) => {
  const popup = document.getElementById("popup")
  if (popup && popup.style.display === "flex") {
    const popupContent = popup.querySelector(".popup-content")
    // If click is outside the popup content
    if (
      popupContent &&
      !popupContent.contains(e.target) &&
      e.target.id !== "bit64" &&
      e.target.id !== "bit32" &&
      !e.target.classList.contains("btn-download") &&
      e.target.tagName !== "I"
    ) {
      window.closePopup()
    }
  }
})

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    window.closePopup()
  }
})

/* ads system */

let lastOpened = 0;
const cooldown = 10000; // 20 seconds

// Your two ad links
const adLinks = [
    "https://mediocrecliffschangeless.com/nxtpva0b?key=6a516ed055d3c69ba578557cab77d4e8",  // Replace with your first link
    "https://mediocrecliffschangeless.com/nxtpva0b?key=6a516ed055d3c69ba578557cab77d4e8"   // Replace with your second link
];

// Function to pick a random link
function getRandomAdLink() {
    return adLinks[Math.floor(Math.random() * adLinks.length)];
}

// Open ad if cooldown is passed
function openAdWithCooldown() {
    const now = Date.now();
    if (now - lastOpened >= cooldown) {
        const randomAd = getRandomAdLink();
        window.open(randomAd, "_blank");
        lastOpened = now;
    }
}

// Trigger on any click
document.addEventListener("click", function () {
    openAdWithCooldown();
});
