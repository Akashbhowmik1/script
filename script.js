// Add WebView detection and compatibility fixes
;(() => {
  // WebView detection
  const isWebView = (() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    return (
      /wv|WebView|Android.*Version\/\d+\.\d+/i.test(userAgent) ||
      /iPhone.*AppleWebKit(?!.*Safari)/i.test(userAgent) ||
      window.navigator.standalone === true
    )
  })()

  // Add WebView class to body for CSS targeting
  if (isWebView) {
    document.documentElement.classList.add("webview")
  }

  // Polyfill for older WebViews
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this
      do {
        if (el.matches(s)) return el
        el = el.parentElement || el.parentNode
      } while (el !== null && el.nodeType === 1)
      return null
    }
  }

  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector
  }

  // Polyfill for requestAnimationFrame
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (callback) => setTimeout(callback, 1000 / 60)
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (id) => {
      clearTimeout(id)
    }
  }
})()

document.addEventListener("DOMContentLoaded", () => {
  // Elements with error handling
  const searchInput = document.getElementById("executor-search")
  const filterTags = document.querySelectorAll(".filter-tag")
  const sections = document.querySelectorAll(".platform-section")
  const executorCards = document.querySelectorAll(".executor-card")
  const themeToggle = document.getElementById("theme-toggle")
  const navLinks = document.querySelectorAll(".nav-link")
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")
  const popup = document.getElementById("popup")

  // Safe event listener addition
  function safeAddEventListener(element, event, handler) {
    if (element && typeof element.addEventListener === "function") {
      try {
        element.addEventListener(event, handler)
      } catch (e) {
        console.warn("Failed to add event listener:", e)
      }
    }
  }

  // Theme toggle functionality with error handling
  if (themeToggle) {
    safeAddEventListener(themeToggle, "click", () => {
      try {
        const html = document.documentElement
        const currentTheme = html.getAttribute("data-theme") || "dark"
        const newTheme = currentTheme === "dark" ? "light" : "dark"

        html.setAttribute("data-theme", newTheme)

        // Update theme toggle icon
        const icon = themeToggle.querySelector("i")
        if (icon) {
          if (newTheme === "dark") {
            icon.className = "fas fa-moon"
          } else {
            icon.className = "fas fa-sun"
          }
        }

        // Save theme preference to localStorage with error handling
        try {
          localStorage.setItem("theme", newTheme)
        } catch (e) {
          console.warn("Failed to save theme preference:", e)
        }
      } catch (e) {
        console.error("Theme toggle error:", e)
      }
    })
  }

  // Load saved theme preference with error handling
  try {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme && document.documentElement) {
      document.documentElement.setAttribute("data-theme", savedTheme)
      const icon = themeToggle?.querySelector("i")
      if (icon) {
        if (savedTheme === "light") {
          icon.className = "fas fa-sun"
        } else {
          icon.className = "fas fa-moon"
        }
      }
    }
  } catch (e) {
    console.warn("Failed to load saved theme:", e)
  }

  // Mobile navigation toggle with error handling
  if (navToggle && navMenu) {
    safeAddEventListener(navToggle, "click", () => {
      try {
        navMenu.classList.toggle("active")
      } catch (e) {
        console.error("Navigation toggle error:", e)
      }
    })
  }

  // Smooth scrolling for navigation links with error handling
  navLinks.forEach((link) => {
    safeAddEventListener(link, "click", (e) => {
      try {
        const href = link.getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const target = document.querySelector(href)
          if (target) {
            // Use fallback for older browsers
            if (target.scrollIntoView) {
              try {
                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              } catch (scrollError) {
                // Fallback for browsers that don't support smooth scrolling
                target.scrollIntoView()
              }
            }
          }

          // Update active nav link
          navLinks.forEach((l) => l.classList.remove("active"))
          link.classList.add("active")

          // Close mobile menu
          if (navMenu) {
            navMenu.classList.remove("active")
          }
        }
      } catch (e) {
        console.error("Navigation link error:", e)
      }
    })
  })

  // Intersection Observer with fallback for older browsers
  let observer = null
  if (window.IntersectionObserver) {
    try {
      const observerOptions = {
        threshold: 0.3,
        rootMargin: "-80px 0px -50% 0px",
      }

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            navLinks.forEach((link) => {
              link.classList.remove("active")
              if (link.getAttribute("href") === `#${id}`) {
                link.classList.add("active")
              }
            })
          }
        })
      }, observerOptions)

      // Observe sections for navigation highlighting
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.observe(section)
      })
    } catch (e) {
      console.warn("IntersectionObserver not supported or failed:", e)
    }
  }

  // Search functionality with error handling
  const executorNames = Array.from(executorCards)
    .map((card) => {
      try {
        const h3 = card.querySelector("h3")
        return h3 ? h3.textContent.toLowerCase() : ""
      } catch (e) {
        return ""
      }
    })
    .filter((name) => name.length > 0)

  // Debounce search for better performance
  let searchTimeout
  if (searchInput) {
    safeAddEventListener(searchInput, "input", (e) => {
      try {
        const searchTerm = e.target.value.toLowerCase()

        // Clear previous timeout
        clearTimeout(searchTimeout)

        // Debounce the search to avoid excessive filtering
        searchTimeout = setTimeout(() => {
          filterExecutors(searchTerm)
          showSearchSuggestions(searchTerm)
        }, 150)
      } catch (e) {
        console.error("Search input error:", e)
      }
    })
  }

  function showSearchSuggestions(searchTerm) {
    try {
      const suggestionsContainer = document.getElementById("search-suggestions")
      if (!suggestionsContainer) return

      if (searchTerm.length < 2) {
        suggestionsContainer.innerHTML = ""
        return
      }

      const matches = executorNames.filter((name) => name.includes(searchTerm) && name !== searchTerm).slice(0, 5)

      if (matches.length > 0) {
        suggestionsContainer.innerHTML = matches.map((match) => `<div class="suggestion-item">${match}</div>`).join("")

        // Add click handlers to suggestions
        suggestionsContainer.querySelectorAll(".suggestion-item").forEach((item) => {
          safeAddEventListener(item, "click", () => {
            try {
              if (searchInput) {
                searchInput.value = item.textContent
                filterExecutors(item.textContent.toLowerCase())
                suggestionsContainer.innerHTML = ""
              }
            } catch (e) {
              console.error("Suggestion click error:", e)
            }
          })
        })
      } else {
        suggestionsContainer.innerHTML = ""
      }
    } catch (e) {
      console.error("Search suggestions error:", e)
    }
  }

  // Filter functionality with error handling
  function filterExecutors(searchTerm = "") {
    try {
      const activeFilter = document.querySelector(".filter-tag.active")?.getAttribute("data-filter") || "all"

      if (!searchTerm && searchInput) {
        searchTerm = searchInput.value.toLowerCase()
      }

      executorCards.forEach((card) => {
        try {
          const section = card.closest("section")
          const sectionId = section ? section.id : ""
          const h3 = card.querySelector("h3")
          const executorName = h3 ? h3.textContent.toLowerCase() : ""

          const matchesSearch = !searchTerm || executorName.includes(searchTerm)
          const matchesFilter = activeFilter === "all" || sectionId === activeFilter

          card.classList.toggle("hidden", !(matchesSearch && matchesFilter))
        } catch (e) {
          console.warn("Error filtering card:", e)
        }
      })

      // Show/hide sections based on visible cards
      sections.forEach((section) => {
        try {
          const hasVisibleCards = section.querySelectorAll(".executor-card:not(.hidden)").length > 0
          section.classList.toggle("hidden", !hasVisibleCards)

          // Update executor count in section badge
          const badge = section.querySelector(".executor-count")
          if (badge) {
            const visibleCount = section.querySelectorAll(".executor-card:not(.hidden)").length
            badge.textContent = visibleCount
          }
        } catch (e) {
          console.warn("Error updating section:", e)
        }
      })
    } catch (e) {
      console.error("Filter executors error:", e)
    }
  }

  // Platform filter functionality with error handling
  filterTags.forEach((tag) => {
    safeAddEventListener(tag, "click", () => {
      try {
        filterTags.forEach((t) => t.classList.remove("active"))
        tag.classList.add("active")
        filterExecutors()
      } catch (e) {
        console.error("Filter tag error:", e)
      }
    })
  })

  // Parallax effect with performance optimization and error handling
  let parallaxTimeout
  let isParallaxSupported = true

  try {
    // Test if transform is supported
    const testEl = document.createElement("div")
    testEl.style.transform = "translateX(1px)"
    isParallaxSupported = testEl.style.transform !== ""
  } catch (e) {
    isParallaxSupported = false
  }

  if (isParallaxSupported) {
    safeAddEventListener(window, "mousemove", (e) => {
      if (parallaxTimeout) return

      parallaxTimeout = requestAnimationFrame(() => {
        try {
          const mouseX = (e.clientX - window.innerWidth / 2) * 0.01
          const mouseY = (e.clientY - window.innerHeight / 2) * 0.01

          document.querySelectorAll(".gradient-orb").forEach((orb, index) => {
            try {
              const speed = (index + 1) * 0.5
              orb.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`
            } catch (orbError) {
              console.warn("Parallax orb error:", orbError)
            }
          })
        } catch (e) {
          console.warn("Parallax effect error:", e)
        }

        parallaxTimeout = null
      })
    })
  }

  // Scroll-triggered animations with error handling
  let animationObserver = null
  if (window.IntersectionObserver) {
    try {
      animationObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              try {
                // Use requestAnimationFrame for smoother animations
                requestAnimationFrame(() => {
                  entry.target.style.opacity = "1"
                  entry.target.style.transform = "translateY(0)"
                })
                // Stop observing once animated
                animationObserver.unobserve(entry.target)
              } catch (e) {
                console.warn("Animation error:", e)
              }
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      // Observe cards for animation
      executorCards.forEach((card) => {
        try {
          card.style.opacity = "0"
          card.style.transform = "translateY(30px)"
          card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
          animationObserver.observe(card)
        } catch (e) {
          console.warn("Card animation setup error:", e)
          // Fallback: show card immediately
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        }
      })
    } catch (e) {
      console.warn("Animation observer error:", e)
      // Fallback: show all cards immediately
      executorCards.forEach((card) => {
        card.style.opacity = "1"
        card.style.transform = "translateY(0)"
      })
    }
  } else {
    // Fallback for browsers without IntersectionObserver
    executorCards.forEach((card) => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    })
  }

  // Navbar scroll effect with error handling
  let lastScrollY = window.scrollY
  safeAddEventListener(window, "scroll", () => {
    try {
      const navbar = document.querySelector(".navbar")
      if (!navbar) return

      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        navbar.style.background = "rgba(15, 15, 35, 0.95)"
        if (navbar.style.backdropFilter !== undefined) {
          navbar.style.backdropFilter = "blur(20px)"
        }
      } else {
        navbar.style.background = "rgba(15, 15, 35, 0.8)"
        if (navbar.style.backdropFilter !== undefined) {
          navbar.style.backdropFilter = "blur(20px)"
        }
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)"
      } else {
        navbar.style.transform = "translateY(0)"
      }

      lastScrollY = currentScrollY
    } catch (e) {
      console.warn("Scroll effect error:", e)
    }
  })

  // Initialize filters
  try {
    filterExecutors()
  } catch (e) {
    console.error("Initial filter error:", e)
  }

  // Add loading states for buttons with error handling
  document.querySelectorAll(".btn-download, .btn-premium").forEach((btn) => {
    safeAddEventListener(btn, "click", (e) => {
      try {
        if (!btn.classList.contains("disabled")) {
          const originalText = btn.innerHTML
          btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'
          btn.style.pointerEvents = "none"

          setTimeout(() => {
            try {
              btn.innerHTML = originalText
              btn.style.pointerEvents = "auto"
            } catch (restoreError) {
              console.warn("Button restore error:", restoreError)
            }
          }, 2000)
        }
      } catch (e) {
        console.error("Button loading state error:", e)
      }
    })
  })

  // Add copy functionality for command inputs
  document.querySelectorAll(".download-link-input").forEach((input) => {
    const container = document.createElement("div")
    container.className = "download-link-container"
    input.parentNode.insertBefore(container, input)
    container.appendChild(input)

    const copyButton = document.createElement("button")
    copyButton.className = "copy-button"
    copyButton.innerHTML = '<i class="fas fa-copy"></i>'
    container.appendChild(copyButton)

    copyButton.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(input.value)
          copyButton.innerHTML = '<i class="fas fa-check"></i>'
          copyButton.classList.add("copied")
          setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>'
            copyButton.classList.remove("copied")
          }, 2000)
        } else {
          // Fallback for older browsers
          input.select()
          document.execCommand("copy")
          copyButton.innerHTML = '<i class="fas fa-check"></i>'
          copyButton.classList.add("copied")
          setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>'
            copyButton.classList.remove("copied")
          }, 2000)
        }
      } catch (err) {
        console.warn("Copy failed, trying fallback method:", err)
        try {
          input.select()
          document.execCommand("copy")
          copyButton.innerHTML = '<i class="fas fa-check"></i>'
          copyButton.classList.add("copied")
          setTimeout(() => {
            copyButton.innerHTML = '<i class="fas fa-copy"></i>'
            copyButton.classList.remove("copied")
          }, 2000)
        } catch (fallbackErr) {
          console.error("All copy methods failed:", fallbackErr)
        }
      }
    })
  })

  // Add keyboard shortcuts with error handling
  safeAddEventListener(document, "keydown", (e) => {
    try {
      // Ctrl/Cmd + K to focus search
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        if (searchInput && searchInput.focus) {
          searchInput.focus()
        }
      }

      // Escape to clear search
      if (e.key === "Escape" && document.activeElement === searchInput) {
        if (searchInput) {
          searchInput.value = ""
          filterExecutors()
          if (searchInput.blur) {
            searchInput.blur()
          }
        }
      }
    } catch (e) {
      console.warn("Keyboard shortcut error:", e)
    }
  })

  // Add status indicators animation
  document.querySelectorAll(".status-online::before").forEach((indicator) => {
    indicator.style.animation = "pulse 2s infinite"
  })

  // Add CSS for pulse animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .copy-button.copied {
      background: var(--success) !important;
    }
    
    .download-link-container {
      position: relative;
      margin-bottom: 1rem;
    }
    
    .download-link-input {
      width: 100%;
      padding: 1rem 3rem 1rem 1rem;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-radius: 10px;
      color: var(--text-primary);
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.875rem;
    }
    
    .copy-button {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      background: var(--primary);
      color: white;
      border: none;
      border-radius: 6px;
      width: 32px;
      height: 32px;
      cursor: pointer;
      font-size: 0.875rem;
      transition: var(--transition);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .copy-button:hover {
      background: var(--primary-dark);
      transform: translateY(-50%) scale(1.05);
    }
    
    .search-suggestions {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--bg-card);
      border: 1px solid var(--border-primary);
      border-top: none;
      border-radius: 0 0 12px 12px;
      max-height: 200px;
      overflow-y: auto;
      z-index: 10;
    }
    
    .suggestion-item {
      padding: 0.75rem 1rem;
      cursor: pointer;
      transition: var(--transition);
      text-transform: capitalize;
    }
    
    .suggestion-item:hover {
      background: var(--bg-card-hover);
    }
    
    @media (max-width: 768px) {
      .nav-menu.active {
        display: flex;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--bg-secondary);
        border: 1px solid var(--border-primary);
        border-top: none;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
      }
    }
  `
  document.head.appendChild(style)
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
    },
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

// Global functions with error handling
window.copyToClipboard = (button) => {
  try {
    const input = button.parentElement.querySelector(".download-link-input")
    if (!input) return

    input.select()
    input.setSelectionRange(0, 99999)

    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(input.value)
        .then(() => {
          const originalIcon = button.innerHTML
          button.innerHTML = '<i class="fas fa-check"></i>'
          setTimeout(() => {
            button.innerHTML = originalIcon
          }, 2000)
        })
        .catch(() => {
          // Fallback to execCommand
          try {
            document.execCommand("copy")
            const originalIcon = button.innerHTML
            button.innerHTML = '<i class="fas fa-check"></i>'
            setTimeout(() => {
              button.innerHTML = originalIcon
            }, 2000)
          } catch (e) {
            console.warn("Copy failed:", e)
          }
        })
    } else {
      // Fallback for older browsers
      try {
        document.execCommand("copy")
        const originalIcon = button.innerHTML
        button.innerHTML = '<i class="fas fa-check"></i>'
        setTimeout(() => {
          button.innerHTML = originalIcon
        }, 2000)
      } catch (e) {
        console.warn("Copy fallback failed:", e)
      }
    }
  } catch (e) {
    console.error("Copy to clipboard error:", e)
  }
}

// Error handling for uncaught errors
window.addEventListener("error", (e) => {
  console.warn("Uncaught error:", e.error)
})

window.addEventListener("unhandledrejection", (e) => {
  console.warn("Unhandled promise rejection:", e.reason)
})




// Ad links to rotate through
const adLinks = [
  "https://otieu.com/4/9558019",
  "https://mediocrecliffschangeless.com/nxtpva0b?key=6a516ed055d3c69ba578557cab77d4e8",
  "https://mediocrecliffschangeless.com/ysgt1brp6y?key=afa3ebe412e568c35961207f14db42a0"
];

let adIndex = 0;
let clickCount = 0;
let timerStarted = false;

function openPopunder() {
  const url = adLinks[adIndex];
  adIndex = (adIndex + 1) % adLinks.length;

  const pop = window.open(url, '_blank');
  if (pop) {
    pop.blur();
    window.focus();
  }
}

// First 2 ads on user clicks
document.addEventListener('click', () => {
  if (clickCount < 2) {
    openPopunder();
    clickCount++;
  }

  // Start 8-second timer after 2nd click
  if (clickCount === 2 && !timerStarted) {
    timerStarted = true;
    setInterval(openPopunder, 8000); // every 8 sec
  }
});
