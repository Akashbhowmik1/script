// script.js

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('SAMRAT Executors Hub JavaScript Loaded Successfully');

    // Navigation Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            // Accessibility: Update aria-expanded
            navToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
        });

        // Close mobile menu on nav link click
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
            // Accessibility: Announce theme change
            announceThemeChange(newTheme);
            // Track theme change event
            trackEvent('theme_toggle', { theme: newTheme });
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    // Update Theme Icon
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.classList.remove(theme === 'dark' ? 'fa-sun' : 'fa-moon');
            icon.classList.add(theme === 'dark' ? 'fa-moon' : 'fa-sun');
        }
    }

    // Accessibility: Announce Theme Change
    function announceThemeChange(theme) {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('role', 'status');
        liveRegion.style.position = 'absolute';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        liveRegion.textContent = `Theme changed to ${theme} mode`;
        document.body.appendChild(liveRegion);
        setTimeout(() => liveRegion.remove(), 1000);
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Update URL without page reload
                history.pushState(null, null, `#${targetId}`);
                // Track navigation
                trackEvent('section_navigate', { section: targetId });
            }
        });
    });

    // Search Functionality
    const searchInput = document.getElementById('executor-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const executorCards = document.querySelectorAll('.executor-card');

    if (searchInput && searchSuggestions) {
        searchInput.addEventListener('input', debounce(() => {
            const query = searchInput.value.toLowerCase().trim();
            searchSuggestions.innerHTML = '';
            filterExecutorsBySearch(query);

            if (query.length === 0) {
                executorCards.forEach(card => card.classList.remove('hidden'));
                return;
            }

            const suggestions = [];
            executorCards.forEach(card => {
                const executorName = card.querySelector('.executor-info h3').textContent.toLowerCase();
                if (executorName.includes(query)) {
                    suggestions.push(executorName);
                }
            });

            // Display suggestions (limit to 5)
            suggestions.slice(0, 5).forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = suggestion;
                suggestionItem.setAttribute('tabindex', '0');
                suggestionItem.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    searchSuggestions.innerHTML = '';
                    filterExecutorsBySearch(suggestion);
                    searchInput.focus();
                    trackEvent('search_suggestion_selected', { suggestion });
                });
                suggestionItem.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        suggestionItem.click();
                    }
                });
                searchSuggestions.appendChild(suggestionItem);
            });

            // Track search
            if (query) {
                trackEvent('search_performed', { query });
            }
        }, 300));

        // Clear suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchSuggestions.contains(e.target) && e.target !== searchInput) {
                searchSuggestions.innerHTML = '';
            }
        });
    }

    // Filter Executors by Search
    function filterExecutorsBySearch(query) {
        executorCards.forEach(card => {
            const executorName = card.querySelector('.executor-info h3').textContent.toLowerCase();
            card.classList.toggle('hidden', !executorName.includes(query));
        });
    }

    // Filter by Platform
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            tag.focus();

            const filter = tag.getAttribute('data-filter');
            const platformSections = document.querySelectorAll('.platform-section');

            platformSections.forEach(section => {
                section.classList.toggle('hidden', filter !== 'all' && section.id !== filter);
            });

            // Show all cards within visible sections
            executorCards.forEach(card => {
                const section = card.closest('.platform-section');
                card.classList.toggle('hidden', section.classList.contains('hidden'));
            });

            // Track filter
            trackEvent('platform_filter', { filter });
        });

        // Keyboard Accessibility for Filters
        tag.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tag.click();
            }
        });
    });

    // Initialize Default Filter
    const allFilter = document.querySelector('.filter-tag[data-filter="all"]');
    if (allFilter) {
        allFilter.click();
    }

    // Highlight Active Navigation Link on Scroll
    window.addEventListener('scroll', debounce(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }, 100));

    // Copy to Clipboard
    function copyToClipboard(button) {
        const input = button.parentElement.querySelector('.command-input');
        if (input) {
            input.select();
            input.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(input.value).then(() => {
                const originalIcon = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.disabled = true;
                setTimeout(() => {
                    button.innerHTML = originalIcon;
                    button.disabled = false;
                }, 2000);
                // Accessibility: Announce copy success
                announceCopySuccess();
                // Track copy event
                trackEvent('copy_command', { command: input.value });
            }).catch(err => {
                console.error('Failed to copy: ', err);
                alert('Failed to copy command. Please try again.');
            });
        }
    }

    // Expose copyToClipboard globally (for HTML onclick)
    window.copyToClipboard = copyToClipboard;

    // Accessibility: Announce Copy Success
    function announceCopySuccess() {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('role', 'status');
        liveRegion.style.position = 'absolute';
        liveRegion.style.width = '1px';
        liveRegion.style.height = '1px';
        liveRegion.style.overflow = 'hidden';
        liveRegion.textContent = 'Command copied to clipboard';
        document.body.appendChild(liveRegion);
        setTimeout(() => liveRegion.remove(), 1000);
    }

    // Lazy Loading Images
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, { rootMargin: '100px' });

    images.forEach(img => observer.observe(img));

    // Set data-src for executor logos
    document.querySelectorAll('.executor-logo').forEach(img => {
        if (!img.hasAttribute('data-src')) {
            img.setAttribute('data-src', img.src);
            img.src = '';
        }
    });

    // Handle Disabled Buttons
    document.querySelectorAll('.btn.disabled').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This executor is currently offline and cannot be downloaded.');
            trackEvent('disabled_button_click', { button: button.textContent });
        });
    });

    // Dynamic Executor Card Loading (Mock API)
    async function loadExecutors() {
        try {
            // Mock API call (replace with real API endpoint)
            const response = await fetch('/api/executors', { method: 'GET' });
            const executors = await response.json();
            renderExecutors(executors);
        } catch (error) {
            console.error('Failed to load executors:', error);
            // Fallback: Show offline message
            const container = document.querySelector('.executors-main');
            if (container) {
                container.innerHTML = '<p class="error-message">Failed to load executors. Please try again later.</p>';
            }
        }
    }

    // Render Executors (Mock)
    function renderExecutors(executors) {
        const container = document.querySelector('.executors-main');
        if (!container) return;

        executors.forEach(executor => {
            const section = document.getElementById(executor.platform);
            if (section) {
                const card = document.createElement('div');
                card.className = 'executor-card';
                if (executor.featured) card.classList.add('featured');
                if (executor.premium) card.classList.add('premium');
                card.innerHTML = `
                    <div class="card-header">
                        <img class="executor-logo" data-src="${executor.logo}" alt="${executor.name} logo">
                        <div class="executor-info">
                            <h3>${executor.name}</h3>
                            <div class="executor-rating">
                                <div class="stars">${'<i class="fas fa-star"></i>'.repeat(executor.rating)}</div>
                                <span class="rating-text">${executor.rating}/5</span>
                            </div>
                        </div>
                        ${executor.featured || executor.premium ? `<span class="card-badge ${executor.premium ? 'premium-badge' : 'premium-badge'}">${executor.featured ? 'Featured' : 'Premium'}</span>` : ''}
                    </div>
                    <div class="card-details">
                        <div class="detail-item"><span class="detail-label">Version</span><span class="detail-value">${executor.version}</span></div>
                        <div class="detail-item"><span class="detail-label">Last Updated</span><span class="detail-value">${executor.lastUpdated}</span></div>
                        <div class="detail-item"><span class="detail-label">Status</span><span class="status status-${executor.status.toLowerCase()}">${executor.status}</span></div>
                    </div>
                    <div class="install-command">
                        <input type="text" class="command-input" value="${executor.installCommand}" readonly>
                        <button class="copy-btn" onclick="copyToClipboard(this)"><i class="fas fa-copy"></i></button>
                    </div>
                    <div class="card-actions">
                        <a href="${executor.downloadLink}" class="btn btn-download ${executor.status === 'Offline' ? 'disabled' : ''}">Download</a>
                        <a href="${executor.supportLink}" class="btn btn-icon"><i class="fab fa-discord"></i></a>
                        ${executor.premium ? `<a href="${executor.premiumLink}" class="btn btn-premium">Get Premium</a>` : ''}
                    </div>
                `;
                section.querySelector('.executors-grid').appendChild(card);
            }
        });
    }

    // Debounce Utility
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Analytics Tracking (Mock)
    function trackEvent(eventName, properties = {}) {
        console.log(`Tracking event: ${eventName}`, properties);
        // Implement actual analytics (e.g., Google Analytics, Mixpanel)
        // Example: gtag('event', eventName, properties);
    }

    // Save User Preferences
    function savePreferences() {
        const preferences = {
            theme: localStorage.getItem('theme') || 'dark',
            lastFilter: document.querySelector('.filter-tag.active')?.getAttribute('data-filter') || 'all',
            lastSearch: searchInput?.value || ''
        };
        localStorage.setItem('userPreferences', JSON.stringify(preferences));
    }

    // Load User Preferences
    function loadPreferences() {
        const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
        if (preferences.lastFilter) {
            const filterTag = document.querySelector(`.filter-tag[data-filter="${preferences.lastFilter}"]`);
            if (filterTag) filterTag.click();
        }
        if (preferences.lastSearch && searchInput) {
            searchInput.value = preferences.lastSearch;
            filterExecutorsBySearch(preferences.lastSearch);
        }
    }

    // Save preferences on filter and search changes
    filterTags.forEach(tag => tag.addEventListener('click', savePreferences));
    if (searchInput) searchInput.addEventListener('input', savePreferences);

    // Load preferences on page load
    loadPreferences();

    // Back to Top Button 
   // const backToTop = document.createElement('button');
    backToTop.className = 'btn back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '2rem';
    backToTop.style.right = '2rem';
    backToTop.style.display = 'none';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        trackEvent('back_to_top');
    });

    window.addEventListener('scroll', debounce(() => {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    }, 100));

    // Keyboard Navigation Enhancements
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (searchSuggestions.innerHTML) {
                searchSuggestions.innerHTML = '';
                searchInput.focus();
            }
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    // Dynamic Executor Count
    function updateExecutorCounts() {
        const sections = document.querySelectorAll('.platform-section');
        sections.forEach(section => {
            const count = section.querySelectorAll('.executor-card:not(.hidden)').length;
            const badge = section.querySelector('.executor-count');
            if (badge) badge.textContent = count;
        });
    }

    // Update counts on filter and search
    filterTags.forEach(tag => tag.addEventListener('click', updateExecutorCounts));
    if (searchInput) searchInput.addEventListener('input', updateExecutorCounts);

    // Initial count update
    updateExecutorCounts();

    // Handle External Links
    document.querySelectorAll('.btn-download, .btn-secondary, .btn-premium, .btn-icon').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('disabled')) {
                e.preventDefault();
                alert('This executor is currently offline and cannot be downloaded.');
                return;
            }
            trackEvent('external_link_click', { url: link.href, text: link.textContent });
        });
    });

    // Handle VNG Buttons (Special Styling)
    document.querySelectorAll('.btn-secondary[href*="vng"], .btn-secondary[href*="VNG"], .btn[href*="vng"], .btn[href*="VNG"]').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('vng_button_click', { url: btn.href });
        });
    });

    // Prevent Form Submission (Future-proof)
    document.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submission prevented. Add form handling logic if needed.');
        trackEvent('form_submission_attempt');
    });

    // Error Boundary for Executor Cards
    function wrapExecutorCard(card) {
        try {
            // Ensure card elements are valid
            if (!card.querySelector('.executor-info h3')) {
                throw new Error('Invalid executor card structure');
            }
        } catch (error) {
            console.error('Error in executor card:', error);
            card.style.display = 'none';
            card.insertAdjacentHTML('afterend', '<p class="error-message">Error loading executor card.</p>');
        }
    }

    executorCards.forEach(wrapExecutorCard);

    // Intersection Observer for Animations
    const animatedElements = document.querySelectorAll('.platform-section, .executor-card, .feature-card');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUpUp');
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => animationObserver.observe(el));

    // Add animation class (requires Animate.css CDN)
    const styleSheet = document.createElement('link');
    styleSheet.rel = 'stylesheet';
    styleSheet.href = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
    document.head.appendChild(styleSheet);

    // Local Storage for Recently Viewed Executors
    function saveRecentlyViewed(executorName) {
        let recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        recent = [executorName, ...recent.filter(name => name !== executorName)].slice(0, 5);
        localStorage.setItem('recentlyViewed', JSON.stringify(recent));
        updateRecentlyViewed();
    }

    function updateRecentlyViewed() {
        const recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        const container = document.querySelector('.recently-viewed');
        if (container) {
            container.innerHTML = '<h3>Recently Viewed</h3>';
            recent.forEach(name => {
                const item = document.createElement('div');
                item.textContent = name;
                item.className = 'recent-item';
                item.addEventListener('click', () => {
                    searchInput.value = name;
                    filterExecutorsBySearch(name);
                    trackEvent('recent_viewed_click', { executor: name });
                });
                container.appendChild(item);
            });
        }
    }

    // Track executor card clicks
    executorCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.executor-info h3').textContent;
            saveRecentlyViewed(name);
        });
    });

    // Initialize recently viewed
    updateRecentlyViewed();

    // Handle Window Resize
    window.addEventListener('resize', debounce(() => {
        updateExecutorCounts();
        trackEvent('window_resize', { width: window.innerWidth, height: window.innerHeight });
    }, 300));

    // Offline Detection
    window.addEventListener('offline', () => {
        alert('You are offline. Some features may not work.');
        trackEvent('offline_detected');
    });

    window.addEventListener('online', () => {
        alert('You are back online!');
        trackEvent('online_restored');
    });

    // Keyboard Shortcut for Search
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            searchInput.focus();
            trackEvent('search_shortcut');
        }
    });

    // Handle External Link Previews
    document.querySelectorAll('.btn-icon[href*="discord"], .btn-icon[href*="youtube"]').forEach(link => {
        link.addEventListener('mouseenter', () => {
            const preview = document.createElement('div');
            preview.className = 'link-preview';
            preview.textContent = `Visit ${link.href.includes('discord') ? 'Discord' : 'YouTube'} for support`;
            preview.style.position = 'absolute';
            preview.style.background = 'var(--bg-card)';
            preview.style.padding = '0.5rem';
            preview.style.borderRadius = '8px';
            preview.style.border = '1px solid var(--border-primary)';
            preview.style.top = `${link.getBoundingClientRect().bottom + 5}px`;
            preview.style.left = `${link.getBoundingClientRect().left}px`;
            document.body.appendChild(preview);
        });

        link.addEventListener('mouseleave', () => {
            document.querySelectorAll('.link-preview').forEach(p => p.remove());
        });
    });

    // Initialize Mock API Call (Uncomment to enable)
    // loadExecutors();
});

// Error Handling Wrapper
window.addEventListener('error', (e) => {
    console.error('Global error:', e.message, e.filename, e.lineno);
    trackEvent('javascript_error', { message: e.message, file: e.filename, line: e.lineno });
});

// Unhandled Promise Rejection
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    trackEvent('promise_rejection', { reason: e.reason });
});

// Merged Obfuscated Functionality (Simplified and Integrated)
(function() {
    // Simplified anti-debugging and console protection from obfuscated code
    const consoleMethods = ['log', 'warn', 'error', 'info', 'debug', 'table', 'trace'];
    const originalConsole = console;
    console = {};
    consoleMethods.forEach(method => {
        console[method] = function(...args) {
            originalConsole[method](...args);
        };
    });

    // Prevent developer tools detection
    Object.defineProperty(navigator, 'userAgent', {
        get: function() {
            return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
        }
    });

    // Mock regex tests for obfuscation checks
    const regex = /((client|webworker|node).*(index|loader).js)|^anonymous$/;
    if (regex.test(new Error().stack)) {
        console.log('Developer tools detected, but proceeding anyway.');
    }

    // Additional DOM ready checks
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => console.log('DOM fully loaded'));
    } else {
        console.log('DOM already loaded');
    }
})();

// Ensure Mobile Responsiveness (JS Adjustments)
function handleMobileResponsive() {
    if (window.innerWidth <= 768) {
        // Collapse sections on mobile if needed
        document.querySelectorAll('.platform-section').forEach(section => {
            section.classList.add('mobile-collapsed');
        });
        // Add touch events for swipes if necessary
        document.addEventListener('touchstart', () => console.log('Touch detected - mobile device'));
    }
}

// Call responsive handler on load and resize
handleMobileResponsive();
window.addEventListener('resize', handleMobileResponsive);
