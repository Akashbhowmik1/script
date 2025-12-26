// Add WebView detection and compatibility fixes
;(() => {
  // Improved WebView detection
  const isWebView = (() => {
    return (
      /wv|WebView/i.test(navigator.userAgent) ||
      (window.navigator.standalone === true) ||
      window.matchMedia("(display-mode: standalone)").matches
    )
  })()

  // Add WebView class to html for CSS targeting
  if (isWebView) {
    document.documentElement.classList.add("webview")
  }

  // Polyfill for older WebViews
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      let el = this
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

  // Improved requestAnimationFrame polyfill with timestamp
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback) {
      return setTimeout(() => callback(performance.now()), 1000 / 60)
    }
  }

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id)
    }
  }
})()

document.addEventListener("DOMContentLoaded", () => {
  // Elements with null checks
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
      element.addEventListener(event, handler)
    }
  }

  // Theme toggle functionality
  if (themeToggle) {
    safeAddEventListener(themeToggle, "click", () => {
      const html = document.documentElement
      const currentTheme = html.getAttribute("data-theme") || "dark"
      const newTheme = currentTheme === "dark" ? "light" : "dark"

      html.setAttribute("data-theme", newTheme)

      // Update theme toggle icon
      const icon = themeToggle.querySelector("i")
      if (icon) {
        icon.className = newTheme === "dark" ? "fas fa-moon" : "fas fa-sun"
      }

      // Save to localStorage
      try {
        localStorage.setItem("theme", newTheme)
      } catch (e) {
        console.warn("Failed to save theme:", e)
      }
    })
  }

  // Load saved theme
  try {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme && document.documentElement) {
      document.documentElement.setAttribute("data-theme", savedTheme)
      const icon = themeToggle?.querySelector("i")
      if (icon) {
        icon.className = savedTheme === "light" ? "fas fa-sun" : "fas fa-moon"
      }
    }
  } catch (e) {
    console.warn("Failed to load theme:", e)
  }

  // Mobile navigation toggle
  if (navToggle && navMenu) {
    safeAddEventListener(navToggle, "click", () => {
      navMenu.classList.toggle("active")
    })
  }

  // Smooth scrolling for nav links
  navLinks.forEach((link) => {
    safeAddEventListener(link, "click", (e) => {
      const href = link.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target && target.scrollIntoView) {
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }

        // Update active link
        navLinks.forEach((l) => l.classList.remove("active"))
        link.classList.add("active")

        // Close mobile menu
        if (navMenu) {
          navMenu.classList.remove("active")
        }
      }
    })
  })

  // Intersection Observer for active section highlighting
  let observer = null
  if (window.IntersectionObserver) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${id}`)
            })
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-80px 0px -200px 0px",
      }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })
  }

  // Pre-collect executor names for search suggestions
  const executorNames = Array.from(executorCards).map((card) => {
    const h3 = card.querySelector("h3")
    return h3 ? h3.textContent.trim().toLowerCase() : ""
  }).filter(Boolean)

  // Search functionality with debounce
  let searchTimeout
  if (searchInput) {
    safeAddEventListener(searchInput, "input", (e) => {
      clearTimeout(searchTimeout)
      const term = e.target.value.toLowerCase().trim()

      searchTimeout = setTimeout(() => {
        filterExecutors(term)
        showSearchSuggestions(term)
      }, 150)
    })
  }

  function showSearchSuggestions(searchTerm) {
    const suggestionsContainer = document.getElementById("search-suggestions")
    if (!suggestionsContainer || searchTerm.length < 2) {
      if (suggestionsContainer) suggestionsContainer.innerHTML = ""
      return
    }

    const matches = executorNames
      .filter((name) => name.includes(searchTerm) && name !== searchTerm)
      .slice(0, 5)

    suggestionsContainer.innerHTML = ""
    matches.forEach((match) => {
      const div = document.createElement("div")
      div.textContent = match.charAt(0).toUpperCase() + match.slice(1) // Capitalize
      div.className = "suggestion-item"
      safeAddEventListener(div, "click", () => {
        if (searchInput) {
          searchInput.value = match.charAt(0).toUpperCase() + match.slice(1)
          filterExecutors(match)
          suggestionsContainer.innerHTML = ""
        }
      })
      suggestionsContainer.appendChild(div)
    })
  }

  function filterExecutors(searchTerm = "") {
    const activeFilter = document.querySelector(".filter-tag.active")?.getAttribute("data-filter") || "all"

    if (!searchTerm && searchInput) {
      searchTerm = searchInput.value.toLowerCase().trim()
    }

    executorCards.forEach((card) => {
      const section = card.closest("section")
      const sectionId = section?.id || ""
      const h3 = card.querySelector("h3")
      const name = h3 ? h3.textContent.toLowerCase().trim() : ""

      const matchesSearch = !searchTerm || name.includes(searchTerm)
      const matchesFilter = activeFilter === "all" || sectionId === activeFilter

      card.classList.toggle("hidden", !(matchesSearch && matchesFilter))
    })

    // Update section visibility and counts
    sections.forEach((section) => {
      const visibleCards = section.querySelectorAll(".executor-card:not(.hidden)").length
      section.classList.toggle("hidden", visibleCards === 0)

      const badge = section.querySelector(".executor-count")
      if (badge) badge.textContent = visibleCards
    })
  }

  // Filter tag clicks
  filterTags.forEach((tag) => {
    safeAddEventListener(tag, "click", () => {
      filterTags.forEach((t) => t.classList.remove("active"))
      tag.classList.add("active")
      filterExecutors()
    })
  })

  // Parallax effect — only on non-touch devices (desktop/mouse)
  if (!("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    let parallaxTimeout = null
    safeAddEventListener(window, "mousemove", (e) => {
      if (parallaxTimeout) return

      parallaxTimeout = requestAnimationFrame(() => {
        const mouseX = (e.clientX - window.innerWidth / 2) * 0.01
        const mouseY = (e.clientY - window.innerHeight / 2) * 0.01

        document.querySelectorAll(".gradient-orb").forEach((orb, index) => {
          const speed = (index + 1) * 0.5
          orb.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`
        })

        parallaxTimeout = null
      })
    })
  }

  // Scroll-triggered animations for executor cards
  let animationObserver = null
  if (window.IntersectionObserver) {
    animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
            animationObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    executorCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(30px)"
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      animationObserver.observe(card)
    })
  } else {
    // Fallback: show immediately
    executorCards.forEach((card) => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    })
  }

  // Navbar scroll effect using class toggle (cleaner & theme-safe)
  const navbar = document.querySelector(".navbar")
  let lastScrollY = window.scrollY

  if (navbar) {
    safeAddEventListener(window, "scroll", () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        navbar.classList.add("scrolled")
        if (currentScrollY > lastScrollY) {
          navbar.classList.add("hide")
        } else {
          navbar.classList.remove("hide")
        }
      } else {
        navbar.classList.remove("scrolled", "hide")
      }

      lastScrollY = currentScrollY
    })
  }

  // Apply VNG/Vietnam button styling using class (safe, no inline override)
  function applyVNGStyling() {
    const buttons = document.querySelectorAll('.btn, .btn-secondary')
    buttons.forEach((button) => {
      if (button.dataset.vngStyled) return // Prevent duplicates

      const text = button.textContent.trim()
      const href = (button.getAttribute("href") || "").toLowerCase()

      if (
        text.includes("VNG") ||
        href.includes("vng") ||
        href.includes("vietnam")
      ) {
        button.classList.add("vng-button")
        button.dataset.vngStyled = "true"
      }
    })
  }

  applyVNGStyling()

  // Button loading states (download/premium)
  document.querySelectorAll(".btn-download, .btn-premium").forEach((btn) => {
    safeAddEventListener(btn, "click", () => {
      if (btn.classList.contains("disabled")) return

      const originalHTML = btn.innerHTML
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...'
      btn.style.pointerEvents = "none"

      setTimeout(() => {
        btn.innerHTML = originalHTML
        btn.style.pointerEvents = "auto"
      }, 2000)
    })
  })

  // Copy buttons for command/download inputs
  document.querySelectorAll(".download-link-input, .command-input").forEach((input) => {
    const container = document.createElement("div")
    container.className = "download-link-container"
    input.parentNode.insertBefore(container, input)
    container.appendChild(input)

    const copyBtn = document.createElement("button")
    copyBtn.className = "copy-button"
    copyBtn.innerHTML = '<i class="fas fa-copy"></i>'
    copyBtn.setAttribute("aria-label", "Copy")
    container.appendChild(copyBtn)

    safeAddEventListener(copyBtn, "click", async () => {
      try {
        await navigator.clipboard.writeText(input.value || input.textContent)
        copyBtn.innerHTML = '<i class="fas fa-check"></i>'
        copyBtn.classList.add("copied")
      } catch (err) {
        // Fallback (deprecated but still works)
        input.select()
        document.execCommand("copy")
        copyBtn.innerHTML = '<i class="fas fa-check"></i>'
        copyBtn.classList.add("copied")
      }

      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>'
        copyBtn.classList.remove("copied")
      }, 2000)
    })
  })

  // Keyboard shortcuts
  safeAddEventListener(document, "keydown", (e) => {
    // Ctrl/Cmd + K → focus search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault()
      searchInput?.focus()
    }

    // Escape → clear search or close popup
    if (e.key === "Escape") {
      if (document.activeElement === searchInput && searchInput.value) {
        searchInput.value = ""
        filterExecutors()
        searchInput.blur()
      } else if (popup && popup.style.display === "flex") {
        window.closePopup()
      }
    }
  })

  // Initial filter setup
  filterExecutors()
})

// Global popup functions
window.showDownloadPopup = (executor) => {
  const popup = document.getElementById("popup")
  if (!popup) {
    console.warn("Popup element not found")
    return
  }

  const bit64Link = document.getElementById("bit64")
  const bit32Link = document.getElementById("bit32")
  const popupTitle = popup.querySelector("h3")
  const popupMessage = popup.querySelector("p")

  if (!bit64Link || !bit32Link || !popupTitle || !popupMessage) {
    console.warn("Popup inner elements missing")
    return
  }

  popupTitle.textContent = `Download ${executor}`
  popupMessage.textContent = `Choose the appropriate version of ${executor} for your device:`

  // Example download paths — extend as needed
  const downloadPaths = {
    ifk: { "64bit": "https://example.com/ifk-64bit.apk", "32bit": "https://example.com/ifk-32bit.apk" },
    // Add more executors here
  }

  const paths = downloadPaths[executor.toLowerCase()] || { "64bit": "#", "32bit": "#" }
  bit64Link.href = paths["64bit"]
  bit32Link.href = paths["32bit"]

  popup.style.display = "flex"
  document.body.style.overflow = "hidden"
}

window.closePopup = () => {
  const popup = document.getElementById("popup")
  if (!popup) return

  popup.style.display = "none"
  document.body.style.overflow = ""
}

// Close popup when clicking outside content
document.addEventListener("click", (e) => {
  const popup = document.getElementById("popup")
  if (popup && popup.style.display === "flex") {
    const popupContent = popup.querySelector(".popup-content")
    if (popupContent && !popupContent.contains(e.target)) {
      window.closePopup()
    }
  }
})

// Global error handling
window.addEventListener("error", (e) => {
  console.warn("Uncaught error:", e.error)
})

window.addEventListener("unhandledrejection", (e) => {
  console.warn("Unhandled promise rejection:", e.reason)
})
