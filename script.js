document.addEventListener('DOMContentLoaded', () => {
    // Utility Functions
    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    // Navigation Toggle for Mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            navToggle.setAttribute('aria-expanded', isActive);
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
                
                // Close mobile menu
                if (navMenu && navToggle) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                    navToggle.setAttribute('aria-expanded', 'false');
                }

                // Save scroll position
                sessionStorage.setItem('scrollPosition', targetId);
            }
        });
    });

    // Restore scroll position on page load
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition) {
        const targetSection = document.getElementById(savedScrollPosition);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Theme Toggle with Accessibility
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
            body.dataset.theme = newTheme;
            const icon = themeToggle.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
            themeToggle.setAttribute('aria-label', `Switch to ${newTheme === 'dark' ? 'light' : 'dark'} theme`);
            localStorage.setItem('theme', newTheme);
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.dataset.theme = savedTheme;
            const icon = themeToggle.querySelector('i');
            icon.classList.remove('fa-moon', 'fa-sun');
            icon.classList.add(savedTheme === 'dark' ? 'fa-moon' : 'fa-sun');
            themeToggle.setAttribute('aria-label', `Switch to ${savedTheme === 'dark' ? 'light' : 'dark'} theme`);
        }
    }

    // Search Functionality with Debouncing
    const searchInput = document.getElementById('executor-search');
    const searchSuggestions = document.getElementById('search-suggestions');
    const executorCards = document.querySelectorAll('.executor-card');

    const executors = Array.from(executorCards).map(card => ({
        name: card.querySelector('.executor-info h3')?.textContent.toLowerCase() || '',
        element: card
    }));

    if (searchInput && searchSuggestions) {
        const handleSearch = debounce(() => {
            const query = searchInput.value.toLowerCase().trim();
            searchSuggestions.innerHTML = '';

            if (query.length > 0) {
                const suggestions = executors.filter(executor => 
                    executor.name.includes(query)
                );

                suggestions.forEach((suggestion, index) => {
                    const suggestionItem = document.createElement('div');
                    suggestionItem.classList.add('suggestion-item');
                    suggestionItem.textContent = suggestion.name;
                    suggestionItem.setAttribute('role', 'option');
                    suggestionItem.setAttribute('tabindex', '0');
                    suggestionItem.setAttribute('aria-selected', 'false');
                    suggestionItem.setAttribute('id', `suggestion-${index}`);

                    suggestionItem.addEventListener('click', () => {
                        suggestion.element.scrollIntoView({ behavior: 'smooth' });
                        searchInput.value = suggestion.name;
                        searchSuggestions.innerHTML = '';
                        searchInput.focus();
                    });

                    suggestionItem.addEventListener('keydown', (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            suggestion.element.scrollIntoView({ behavior: 'smooth' });
                            searchInput.value = suggestion.name;
                            searchSuggestions.innerHTML = '';
                            searchInput.focus();
                        }
                    });

                    searchSuggestions.appendChild(suggestionItem);
                });

                executorCards.forEach(card => {
                    const cardName = card.querySelector('.executor-info h3')?.textContent.toLowerCase() || '';
                    card.style.display = cardName.includes(query) ? 'block' : 'none';
                });
            } else {
                executorCards.forEach(card => card.style.display = 'block');
            }
        }, 300);

        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchInput.value = '';
                searchSuggestions.innerHTML = '';
                executorCards.forEach(card => card.style.display = 'block');
            }
        });

        // Close suggestions on outside click
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
                searchSuggestions.innerHTML = '';
            }
        });
    }

    // Filter Functionality
    const filterTags = document.querySelectorAll('.filter-tag');
    const platformSections = document.querySelectorAll('.platform-section');

    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const filter = tag.dataset.filter;

            filterTags.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tag.classList.add('active');
            tag.setAttribute('aria-selected', 'true');

            platformSections.forEach(section => {
                if (filter === 'all' || section.id === filter) {
                    section.style.display = 'block';
                    section.querySelectorAll('.executor-card').forEach(card => {
                        card.style.display = 'block';
                    });
                } else {
                    section.style.display = 'none';
                }
            });

            // Reset search
            if (searchInput && searchSuggestions) {
                searchInput.value = '';
                searchSuggestions.innerHTML = '';
            }
        });

        // Keyboard accessibility for filters
        tag.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                tag.click();
            }
        });
    });

    // Lazy Loading for Images
    const images = document.querySelectorAll('img[data-src]');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                img.setAttribute('loading', 'lazy');
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        observer.observe(img);
        img.dataset.src = img.src;
        img.src = '';
    });

    // Scroll Animation for Cards
    const cards = document.querySelectorAll('.executor-card');
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => cardObserver.observe(card));

    // Copy Command Functionality
    document.querySelectorAll('.copy-btn').forEach(button => {
        button.addEventListener('click', async () => {
            const commandInput = button.previousElementSibling;
            if (commandInput && commandInput.value) {
                try {
                    await navigator.clipboard.writeText(commandInput.value);
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check"></i>';
                    button.setAttribute('aria-label', 'Copied');
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.setAttribute('aria-label', 'Copy command');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy: ', err);
                    alert('Failed to copy command. Please try again.');
                }
            }
        });
    });

    // Update Executor Count
    platformSections.forEach(section => {
        const countElement = section.querySelector('.executor-count');
        if (countElement) {
            const cardCount = section.querySelectorAll('.executor-card').length;
            countElement.textContent = cardCount;
        }
    });

    // Handle Disabled Download Buttons
    document.querySelectorAll('.btn-download.disabled').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This executor is currently offline and cannot be downloaded.');
        });
    });

    // Sticky Navigation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const stickyOffset = navbar.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset >= stickyOffset) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        });
    }

    // Keyboard Navigation for Accessibility
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle Back/Forward Navigation
    window.addEventListener('popstate', () => {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const targetSection = document.getElementById(hash);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Performance Optimization: Throttle Scroll Events
    const throttle = (func, limit) => {
        let inThrottle;
        return (...args) => {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    };

    // Scroll Progress Indicator
    const scrollProgress = document.createElement('div');
    scrollProgress.classList.add('scroll-progress');
    document.body.appendChild(scrollProgress);

    const updateScrollProgress = throttle(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = `${progress}%`;
    }, 100);

    window.addEventListener('scroll', updateScrollProgress);

    // Error Boundary
    window.addEventListener('error', (event) => {
        console.error('JavaScript Error:', event.message, event.filename, event.lineno);
        // Optionally log to an external service
    });

    // Focus Management for Accessibility
    const focusableElements = document.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.classList.add('focused');
        });
        element.addEventListener('blur', () => {
            element.classList.remove('focused');
        });
    });
});

// Additional CSS for scroll progress
const style = document.createElement('style');
style.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary), var(--primary-light));
        z-index: 1001;
        transition: width 0.3s ease-out;
        width: 0;
    }

    .focused {
        outline: 2px solid var(--primary);
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);
