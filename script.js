// Modernized SAMRAT Executors Hub JavaScript
// Using ES Modules and improved accessibility

// Utility Functions
const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

const trackEvent = (eventName, properties = {}) => {
    console.log(`Tracking event: ${eventName}`, properties);
    // Implement analytics (e.g., gtag('event', eventName, properties));
};

const announceLiveRegion = (message, duration = 1000) => {
    const liveRegion = document.createElement('div');
    Object.assign(liveRegion, {
        'aria-live': 'polite',
        role: 'status',
        style: 'position: absolute; width: 1px; height: 1px; overflow: hidden;'
    });
    liveRegion.textContent = message;
    document.body.appendChild(liveRegion);
    setTimeout(() => liveRegion.remove(), duration);
};

// Theme Management
const manageTheme = () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;

    const updateThemeIcon = (theme) => {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.classList.replace(
                theme === 'dark' ? 'fa-sun' : 'fa-moon',
                theme === 'dark' ? 'fa-moon' : 'fa-sun'
            );
        }
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        announceLiveRegion(`Theme changed to ${newTheme} mode`);
        trackEvent('theme_toggle', { theme: newTheme });
    });
};

// Navigation Management
const manageNavigation = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isActive);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
};

// Smooth Scrolling
const setupSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.pushState(null, null, `#${targetId}`);
                trackEvent('section_navigate', { section: targetId });
            }
        });
    });

    window.addEventListener('scroll', debounce(() => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let currentSection = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href').substring(1) === currentSection);
        });
    }, 100));
};

// Search Functionality
const setupSearch = () => {
    const searchInput = document.getElementById('executor-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const executorCards = document.querySelectorAll('.executor-card');
    if (!searchInput || !searchSuggestions) return;

    const filterExecutorsBySearch = (query) => {
        executorCards.forEach(card => {
            const executorName = card.querySelector('.executor-info h3')?.textContent.toLowerCase() || '';
            card.classList.toggle('hidden', !executorName.includes(query));
        });
        updateExecutorCounts();
    };

    searchInput.addEventListener('input', debounce(() => {
        const query = searchInput.value.toLowerCase().trim();
        searchSuggestions.innerHTML = '';
        filterExecutorsBySearch(query);

        if (query.length === 0) {
            executorCards.forEach(card => card.classList.remove('hidden'));
            updateExecutorCounts();
            return;
        }

        const suggestions = Array.from(executorCards)
            .map(card => card.querySelector('.executor-info h3')?.textContent.toLowerCase() || '')
            .filter(name => name.includes(query))
            .slice(0, 5);

        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            Object.assign(suggestionItem, {
                className: 'suggestion-item',
                textContent: suggestion,
                tabindex: '0'
            });
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

        if (query) trackEvent('search_performed', { query });
    }, 300));

    document.addEventListener('click', (e) => {
        if (!searchSuggestions.contains(e.target) && e.target !== searchInput) {
            searchSuggestions.innerHTML = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === '/') {
            e.preventDefault();
            searchInput.focus();
            trackEvent('search_shortcut');
        }
    });
};

// Platform Filtering
const setupPlatformFilters = () => {
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

            document.querySelectorAll('.executor-card').forEach(card => {
                const section = card.closest('.platform-section');
                card.classList.toggle('hidden', section.classList.contains('hidden'));
            });

            updateExecutorCounts();
            trackEvent('platform_filter', { filter });
        });

        tag.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tag.click();
            }
        });
    });

    const allFilter = document.querySelector('.filter-tag[data-filter="all"]');
    if (allFilter) allFilter.click();
};

// Executor Counts
const updateExecutorCounts = () => {
    document.querySelectorAll('.platform-section').forEach(section => {
        const count = section.querySelectorAll('.executor-card:not(.hidden)').length;
        const badge = section.querySelector('.executor-count');
        if (badge) badge.textContent = count;
    });
};

// Copy to Clipboard
const setupCopyToClipboard = () => {
    window.copyToClipboard = (button) => {
        const input = button.parentElement.querySelector('.command-input');
        if (!input) return;

        input.select();
        navigator.clipboard.writeText(input.value)
            .then(() => {
                const originalIcon = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.disabled = true;
                setTimeout(() => {
                    button.innerHTML = originalIcon;
                    button.disabled = false;
                }, 2000);
                announceLiveRegion('Command copied to clipboard');
                trackEvent('copy_command', { command: input.value });
            })
            .catch(err => {
                console.error('Failed to copy:', err);
                alert('Failed to copy command. Please try again.');
            });
    };

    document.querySelectorAll('.btn.disabled').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This executor is currently offline and cannot be downloaded.');
            trackEvent('disabled_button_click', { button: button.textContent });
        });
    });
};

// Back to Top Button


// Animation Setup
const setupAnimations = () => {
    const animatedElements = document.querySelectorAll('.platform-section, .executor-card, .feature-card');
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__fadeInUp');
                animationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => animationObserver.observe(el));

    const styleSheet = document.createElement('link');
    Object.assign(styleSheet, {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    });
    document.head.appendChild(styleSheet);
};

// User Preferences
const managePreferences = () => {
    const searchInput = document.getElementById('executor-search');
    const savePreferences = () => {
        localStorage.setItem('userPreferences', JSON.stringify({
            theme: localStorage.getItem('theme') || 'dark',
            lastFilter: document.querySelector('.filter-tag.active')?.getAttribute('data-filter') || 'all',
            lastSearch: searchInput?.value || ''
        }));
    };

    const loadPreferences = () => {
        const preferences = JSON.parse(localStorage.getItem('userPreferences') || '{}');
        if (preferences.lastFilter) {
            const filterTag = document.querySelector(`.filter-tag[data-filter="${preferences.lastFilter}"]`);
            if (filterTag) filterTag.click();
        }
        if (preferences.lastSearch && searchInput) {
            searchInput.value = preferences.lastSearch;
            setupSearch().filterExecutorsBySearch(preferences.lastSearch);
        }
    };

    document.querySelectorAll('.filter-tag').forEach(tag => tag.addEventListener('click', savePreferences));
    if (searchInput) searchInput.addEventListener('input', savePreferences);
    loadPreferences();
};

// Recently Viewed
const manageRecentlyViewed = () => {
    const executorCards = document.querySelectorAll('.executor-card');
    const updateRecentlyViewed = () => {
        const recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
        const container = document.querySelector('.recently-viewed');
        if (container) {
            container.innerHTML = '<h3>Recently Viewed</h3>';
            recent.forEach(name => {
                const item = document.createElement('div');
                Object.assign(item, {
                    textContent: name,
                    className: 'recent-item'
                });
                item.addEventListener('click', () => {
                    document.getElementById('executor-search').value = name;
                    setupSearch().filterExecutorsBySearch(name);
                    trackEvent('recent_viewed_click', { executor: name });
                });
                container.appendChild(item);
            });
        }
    };

    executorCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.querySelector('.executor-info h3')?.textContent;
            if (name) {
                let recent = JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
                recent = [name, ...recent.filter(n => n !== name)].slice(0, 5);
                localStorage.setItem('recentlyViewed', JSON.stringify(recent));
                updateRecentlyViewed();
            }
        });
    });

    updateRecentlyViewed();
};

// External Links and Previews
const setupExternalLinks = () => {
    document.querySelectorAll('.btn-download, .btn-secondary, .btn-premium, .btn-icon').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.classList.contains('disabled')) {
                e.preventDefault();
                alert('This executor is currently offline and cannot be downloaded.');
                return;
            }
            trackEvent('external_link_click', { url: link.href, text: link.textContent });
        });

        if (link.href.includes('discord') || link.href.includes('youtube')) {
            link.addEventListener('mouseenter', () => {
                const preview = document.createElement('div');
                Object.assign(preview, {
                    className: 'link-preview',
                    textContent: `Visit ${link.href.includes('discord') ? 'Discord' : 'YouTube'} for support`,
                    style: `
                        position: absolute;
                        background: var(--bg-card);
                        padding: 0.5rem;
                        border-radius: 8px;
                        border: 1px solid var(--border-primary);
                        top: ${link.getBoundingClientRect().bottom + 5}px;
                        left: ${link.getBoundingClientRect().left}px;
                    `
                });
                document.body.appendChild(preview);
            });

            link.addEventListener('mouseleave', () => {
                document.querySelectorAll('.link-preview').forEach(p => p.remove());
            });
        }
    });

    document.querySelectorAll('.btn-secondary[href*="vng"], .btn-secondary[href*="VNG"], .btn[href*="vng"], .btn[href*="VNG"]').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('vng_button_click', { url: btn.href });
        });
    });
};

// Mobile Responsiveness
const handleMobileResponsive = () => {
    const isMobile = window.innerWidth <= 768;
    document.querySelectorAll('.platform-section').forEach(section => {
        section.classList.toggle('mobile-collapsed', isMobile);
    });
    if (isMobile) {
        document.addEventListener('touchstart', () => console.log('Touch detected - mobile device'), { once: true });
    }
};

// Error Handling
const setupErrorHandling = () => {
    window.addEventListener('error', (e) => {
        console.error('Global error:', e.message, e.filename, e.lineno);
        trackEvent('javascript_error', { message: e.message, file: e.filename, line: e.lineno });
    });

    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
        trackEvent('promise_rejection', { reason: e.reason });
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('SAMRAT Executors Hub JavaScript Loaded Successfully');
    manageTheme();
    manageNavigation();
    setupSmoothScrolling();
    setupSearch();
    setupPlatformFilters();
    setupCopyToClipboard();
    setupBackToTop();
    setupAnimations();
    managePreferences();
    manageRecentlyViewed();
    setupExternalLinks();
    handleMobileResponsive();
    setupErrorHandling();

    window.addEventListener('resize', debounce(handleMobileResponsive, 300));
    window.addEventListener('offline', () => {
        alert('You are offline. Some features may not work.');
        trackEvent('offline_detected');
    });
    window.addEventListener('online', () => {
        alert('You are back online!');
        trackEvent('online_restored');
    });
});

// Prevent Form Submission
document.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Form submission prevented. Add form handling logic if needed.');
    trackEvent('form_submission_attempt');
});

// Simplified Console Protection
(() => {
    const consoleMethods = ['log', 'warn', 'error', 'info', 'debug', 'table', 'trace'];
    const originalConsole = console;
    console = {};
    consoleMethods.forEach(method => {
        console[method] = (...args) => originalConsole[method](...args);
    });

    Object.defineProperty(navigator, 'userAgent', {
        get: () => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    });
})();
