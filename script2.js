// Define scripts array with corrected entries
const scripts = [
    {
        name: "Blox Fruit Auto Farm",
        game: "Blox Fruits",
        category: "Adventure",
        description: "A script for Blox Fruits with auto-farm and stats boost.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/tlredz/Scripts/refs/heads/main/main.luau"))(Settings)`,
        popularity: 100,
        dateAdded: "2025-05-01"
    },
    {
        name: "Adopt Me Pet Collector",
        game: "Adopt Me",
        category: "Simulation",
        description: "A script for Adopt Me with pet auto-collect.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/JusticeValley/Antarctic-Hub/main/New.lua", true))()`,
        popularity: 90,
        dateAdded: "2025-04-15"
    },
    {
        name: "Brookhaven Money Hack",
        game: "Brookhaven",
        category: "Roleplay",
        description: "A script for Brookhaven to boost in-game currency.",
        code: `loadstring(game:HttpGet("https://rawscripts.net/raw/Brookhaven-RP-Sander-XY-35845"))()`,
        popularity: 85,
        dateAdded: "2025-03-20"
    },
    {
        name: "Steal a brainrot hack script",
        game: "Steal a Brainrot",
        category: "Simulation",
        description: "A script for Steal a Brainrot to automate resource collection and hacks.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Anoonymouss69/ScriptHUB/refs/heads/main/steal%20a%20brainrot"))()`,
        popularity: 90,
        dateAdded: "2025-04-15"
    },
    {
        name: "Dead Rails Auto Bonds And More",
        game: "Dead Rails",
        category: "Adventure",
        description: "A script for Dead Rails to automate resource gathering.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ArdyBotzz/NatHub/refs/heads/master/NatHub.lua"))()`,
        popularity: 70,
        dateAdded: "2025-05-10"
    },
    {
        name: "Blue Lock Rivals Speed and Hit-box Boost",
        game: "Blue Lock Rivals",
        category: "Sports",
        description: "A script for Blue Lock Rivals to enhance player skills.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Ultik-max/Isisis/refs/heads/main/Protected_9713416812708883.txt"))()`,
        popularity: 65,
        dateAdded: "2025-04-25"
    },
    {
        name: "Arise Crossover Auto Farm",
        game: "Arise Crossover",
        category: "Adventure",
        description: "A script for Arise Crossover to automate farming tasks.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Omgshit/Scripts/main/MainLoader.lua"))()`,
        popularity: 60,
        dateAdded: "2025-05-05"
    },
    {
        name: "Doors Speedrun Hack",
        game: "Doors",
        category: "Horror",
        description: "A script for Doors to speed up navigation through levels.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/CatEnddroid/Kitty-Cats-Doors-Beta/refs/heads/main/hub.lua"))()`,
        popularity: 75,
        dateAdded: "2025-04-10"
    },
    {
        name: "Forsaken Auto Battle",
        game: "Forsaken",
        category: "Action",
        description: "A script for Forsaken to automate combat sequences.",
        code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/sigmaboy-sigma-boy/sigmaboy-sigma-boy/refs/heads/main/StaminaSettings.ESP.PIDC.raw"))()`,
        popularity: 80,
        dateAdded: "2025-05-12"
    },
    {
        name: "Tower Defense Simulator Auto Wave",
        game: "Tower Defense Simulator",
        category: "Strategy",
        description: "A script for Tower Defense Simulator to automate wave defense.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Prosexy/Demonic-HUB-V2/main/DemonicHub_V2.lua", true))()`,
        popularity: 85,
        dateAdded: "2025-04-20"
    },
    {
        name: "The Strongest Battlegrounds Combo Hack",
        game: "The Strongest Battlegrounds",
        category: "Fighting",
        description: "A script for The Strongest Battlegrounds to optimize combat combos.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/yes1nt/yes/refs/heads/main/CHAINSAW%20MAN/Chainsaw%20Man%20(Obfuscated).txt"))()`,
        popularity: 95,
        dateAdded: "2025-05-08"
    },
    {
        name: "Fisch Auto Farm",
        game: "Fisch",
        category: "Simulation",
        description: "A script for Fisch to automate resource collection.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Skzuppy/forge-hub/main/loader.lua"))()`,
        popularity: 60,
        dateAdded: "2025-04-05"
    },
    {
        name: "Jujutsu Shenanigans Auto Skill",
        game: "Jujutsu Shenanigans",
        category: "Fighting",
        description: "A script for Jujutsu Shenanigans to automate skill usage.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/PawsThePaw/Plutonium.AA/main/Plutonium.Loader.lua", true))()`,
        popularity: 70,
        dateAdded: "2025-05-03"
    },
    {
        name: "Realistic Street Soccer Hit-Box Boost etc.",
        game: "Realistic Street Soccer",
        category: "Sports",
        description: "A script for Realistic Street Soccer to enhance trick performance.",
        code: `loadstring(game:HttpGet("https://rawscripts.net/raw/Realistic-Street-Soccer-rayan-s-hub-SOlARA-SUPORT-39402"))()`,
        popularity: 65,
        dateAdded: "2025-04-12"
    },
    {
        name: "Bubble Gum Simulator Auto Bubble",
        game: "Bubble Gum Simulator",
        category: "Simulation",
        description: "A script for Bubble Gum Simulator to automate bubble collection.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/MIKEDRIPZOWSKU/test/refs/heads/main/SmorgsHubBGSI.lua", true))()`,
        popularity: 95,
        dateAdded: "2025-04-12"
    },
    {
        name: "Grow a Garden No Lag Hub Script.",
        game: "Grow a Garden",
        category: "Simulation",
        description: "A script for Grow a Garden to automate plant harvesting and resource collection.",
        code: `loadstring(game:HttpGetAsync("https://raw.githubusercontent.com/NoLag-id/No-Lag-HUB/refs/heads/main/Loader/LoaderV1.lua"))()`,
        popularity: 75,
        dateAdded: "2025-05-15"
    },
    {
        name: "Anime Vanguards Auto Mission",
        game: "Anime Vanguards",
        category: "Adventure",
        description: "A script for Anime Vanguards to automate mission completion.",
        code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/godor1010/godor/refs/head/main/anime_vanguards_'))()`,
        popularity: 80,
        dateAdded: "2025-05-06"
    },
    {
        name: "99 Nights In The Forest Script",
        game: "99 Nights In The Forest",
        category: "Adventure",
        description: "A script for 99 Nights In The Forest hack.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/Anoonymouss69/ScriptHUB/refs/heads/main/99-Nights-In-Forest"))()`,
        popularity: 70,
        dateAdded: "2025-04-18"
    },
    {
        name: "Attack on Titan Revolution Titan Slayer",
        game: "Attack on Titan Revolution",
        category: "Action",
        description: "A script for Attack on Titan Revolution to optimize titan slaying.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/zerunquist/TekkitAotr/refs/heads/main/main"))()`,
        popularity: 85,
        dateAdded: "2025-05-09"
    },
    {
        name: "Blade Ball Auto Dodge",
        game: "Blade Ball",
        category: "Sports",
        description: "A script for Blade Ball to automate dodging mechanics.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ImNotRox1/Trous-Hub/refs/heads/main/blade-ball.lua"))`,
        popularity: 90,
        dateAdded: "2025-04-22"
    },
    {
        name: "Pet Simulator 99 Auto Pet",
        game: "Pet Simulator 99",
        category: "Simulation",
        description: "A script for Pet Simulator 99 to automate pet collection.",
        code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/SlamminPig/6FootScripts/main/Scripts/PetSimulator99.lua'))()`,
        popularity: 95,
        dateAdded: "2025-05-11"
    },
    {
        name: "Arsenal aim bot",
        game: "Arsenal",
        category: "Action",
        description: "A script for Arsenal with silent aimbot and wallbang features.",
        code: `loadstring(game:HttpGet("https://rawscripts.net/raw/Universal-Script-Express-Hub-Free-Universal-GUI-V6-30568"))()`,
        popularity: 80,
        dateAdded: "2025-05-11"
    },
    {
        name: "Tower Of Hell speed hack",
        game: "Tower of Hell",
        category: "Parkour",
        description: "A script for Tower of Hell to boost walk speed and jump power.",
        code: `loadstring(game:HttpGet("https://gist.githubusercontent.com/BloxiYT/85f97364b6367baac677e109488c9905/raw/c2972a2b892c4193509ddb2fe1ba3061435e1a8a/gistfile1.txt"))()`,
        popularity: 80,
        dateAdded: "2025-05-11"
    },
    {
        name: "Jailbreak Auto Rob And More",
        game: "Jailbreak",
        category: "Open World",
        description: "A script for Jailbreak to automate robbing and other tasks.",
        code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/BlitzIsKing/UniversalFarm/main/Loader/Regular'))()`,
        popularity: 90,
        dateAdded: "2025-05-11"
    },
    {
        name: "Murder Mystery 2 Auto Win",
        game: "Murder Mystery 2",
        category: "Action",
        description: "A script for Murder Mystery 2 to automatically win rounds.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/C Gomez/Official/refs/heads/main/freemium"))()`,
        popularity: 85,
        dateAdded: "2025-05-20"
    },
    {
        name: "Phantom Forces Aimbot",
        game: "Phantom Forces",
        category: "Action",
        description: "A script for Phantom Forces to assist with aiming and shooting.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/dementiaenjoyer/homohack/main/homohack.lua"))()`,
        popularity: 90,
        dateAdded: "2025-05-20"
    },
    {
        name: "Anime Fighting Simulator Auto Train",
        game: "Anime Fighting Simulator",
        category: "Fighting",
        description: "A script for Anime Fighting Simulator to automate training and power-ups.",
        code: `loadstring(game:HttpGet("https://rawscripts.net/raw/DIMENSION-6-Anime-Fighting-Simulator-Data-Roll-back-7000"))()`,
        popularity: 95,
        dateAdded: "2025-05-21"
    },
    {
        name: "Pet Simulator X Auto Farm",
        game: "Pet Simulator X",
        category: "Simulation",
        description: "A script for Pet Simulator X to automate pet collection and farming.",
        code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/RunDTM/ZeeroxHub/main/Loader.lua'))()`,
        popularity: 90,
        dateAdded: "2025-05-21"
    },
    {
        name: "Basketball Zero script",
        game: "Basketball Zero",
        category: "Sports",
        description: "A script for Basketball Zero to automate shooting and performance.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/roscripts749/loader/refs/heads/main/loader"))()`,
        popularity: 90,
        dateAdded: "2025-05-21"
    },
    {
        name: "Arc hub script",
        game: "King Legacy",
        category: "Adventure",
        description: "A script for King Legacy to auto-farm and level up like a pirate king.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ChopLoris/ArcHub/main/main.lua"))()`,
        popularity: 90,
        dateAdded: "2025-05-21"
    },
    {
        name: "Grow a Garden Thunderz Hub Script",
        game: "Grow a Garden",
        category: "Simulation",
        description: "A script for Grow a Garden to auto-farm, buy, and sell, turning your garden into a profit machine.",
        code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ThundarZ/Welcome/main/Main/GaG/Main.lua"))()`,
        popularity: 90,
        dateAdded: "2025-05-21"
    }
];

let favorites = [];
let currentPage = 1;
const scriptsPerPage = 15;

// Initialize favorites from localStorage with error handling
try {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
        favorites = JSON.parse(savedFavorites);
        // Validate favorites to ensure they exist in scripts
        favorites = favorites.filter(name => scripts.some(script => script.name === name));
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
} catch (error) {
    console.error('Failed to load favorites from localStorage:', error);
}

/**
 * Check if a script is in favorites
 * @param {string} scriptName - Name of the script
 * @returns {boolean} - True if the script is favorited
 */
const isFavorite = (scriptName) => {
    if (typeof scriptName !== 'string' || !scriptName.trim()) {
        console.warn('Invalid script name provided to isFavorite:', scriptName);
        return false;
    }
    return favorites.includes(scriptName.trim());
};

/**
 * Toggle favorite status for a script
 * @param {string} scriptName - Name of the script
 */
const toggleFavorite = (scriptName) => {
    if (typeof scriptName !== 'string' || !scriptName.trim()) {
        console.warn('Invalid script name for toggleFavorite:', scriptName);
        return;
    }
    scriptName = scriptName.trim();

    const scriptExists = scripts.some(script => script.name === scriptName);
    if (!scriptExists) {
        console.warn(`Script '${scriptName}' not found in scripts array.`);
        return;
    }

    if (isFavorite(scriptName)) {
        favorites = favorites.filter(name => name !== scriptName);
    } else {
        favorites.push(scriptName);
    }

    try {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } catch (error) {
        console.error('Failed to update localStorage:', error);
        return;
    }

    // Update all favorite buttons for this script
    document.querySelectorAll(`.favorite-btn[data-script-name="${CSS.escape(scriptName)}"]`).forEach(button => {
        button.innerHTML = isFavorite(scriptName) ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
        button.classList.toggle('favorited', isFavorite(scriptName));
        button.setAttribute('aria-label', isFavorite(scriptName) ? `Remove ${scriptName} from favorites` : `Add ${scriptName} to favorites`);
        button.classList.remove('animate');
        void button.offsetWidth; // Trigger reflow for animation
        button.classList.add('animate');
    });

    // Refresh display if showing favorites
    const showFavorites = document.getElementById('showFavorites');
    if (showFavorites?.checked) {
        filterScripts();
    }
};

/**
 * Close a modal with animation
 * @param {string} modalId - ID of the modal to close
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`Modal with ID '${modalId}' not found.`);
        return;
    }
    modal.classList.add('hide');
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('hide');
        modal.setAttribute('aria-hidden', 'true');
    }, 300);
}

/**
 * Display script code in a modal
 * @param {string} scriptName - Name of the script
 */
function showCode(scriptName) {
    const script = scripts.find(s => s.name === scriptName);
    const modal = document.getElementById('scriptModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGame = document.getElementById('modalGame');
    const modalDescription = document.getElementById('modalDescription');
    const modalCode = document.getElementById('modalCode');
    const modalContent = document.querySelector('#scriptModal .modal-content');

    if (!script || !modal || !modalTitle || !modalGame || !modalDescription || !modalCode || !modalContent) {
        console.error('Script or modal elements not found.');
        alert(`Script '${scriptName}' not found or modal elements missing.`);
        return;
    }

    modalTitle.textContent = script.name;
    modalGame.textContent = `Game: ${script.game} | Category: ${script.category}`;
    modalDescription.textContent = script.description;
    modalCode.textContent = script.code;

    // Create or update copy button
    let copyButton = modalContent.querySelector('.copy-btn');
    if (!copyButton) {
        copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy Code';
        copyButton.setAttribute('aria-label', 'Copy script code');
        modalContent.insertBefore(copyButton, modalContent.querySelector('pre'));
    }

    copyButton.onclick = () => {
        navigator.clipboard.writeText(script.code)
            .then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy Code';
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy code:', err);
                alert('Failed to copy code. Please try again.');
            });
    };

    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    modal.focus();

    if (typeof hljs !== 'undefined') {
        hljs.highlightElement(modalCode);
    } else {
        console.warn('Highlight.js not loaded, skipping syntax highlighting.');
    }
}

/**
 * Initialize the application on DOM load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize syntax highlighting if available
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            themeToggle.innerHTML = `<i class="fas fa-${currentTheme === 'light' ? 'moon' : 'sun'}"></i> ${currentTheme === 'light' ? 'Dark' : 'Light'} Mode`;
            try {
                localStorage.setItem('theme', currentTheme);
            } catch (error) {
                console.error('Failed to save theme to localStorage:', error);
            }
        });

        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggle.innerHTML = `<i class="fas fa-${savedTheme === 'light' ? 'moon' : 'sun'}"></i> ${savedTheme === 'light' ? 'Dark' : 'Light'} Mode`;
    }

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const overlayMenu = document.getElementById('overlayMenu');
    if (hamburger && overlayMenu) {
        hamburger.addEventListener('click', () => {
            const isOpen = overlayMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', isOpen.toString());
            overlayMenu.setAttribute('aria-hidden', (!isOpen).toString());
            if (isOpen) {
                overlayMenu.focus();
            }
        });

        overlayMenu.addEventListener('click', (e) => {
            if (e.target === overlayMenu) {
                overlayMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                overlayMenu.setAttribute('aria-hidden', 'true');
            }
        });

        overlayMenu.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = overlayMenu.querySelectorAll('a, button, input, select, [tabindex="0"]');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    }

    // Consolidated modal event handling
    const modals = [
        { id: 'scriptModal', triggerId: null },
        { id: 'aboutModal', triggerId: 'aboutBtn' },
        { id: 'contactModal', triggerId: 'contactBtn' }
    ];

    modals.forEach(({ id, triggerId }) => {
        const modal = document.getElementById(id);
        if (!modal) return;

        if (triggerId) {
            const trigger = document.getElementById(triggerId);
            if (trigger) {
                trigger.addEventListener('click', () => {
                    modal.style.display = 'flex';
                    modal.setAttribute('aria-hidden', 'false');
                    modal.focus();
                    if (overlayMenu && hamburger) {
                        overlayMenu.classList.remove('active');
                        hamburger.classList.remove('active');
                        hamburger.setAttribute('aria-expanded', 'false');
                        overlayMenu.setAttribute('aria-hidden', 'true');
                    }
                });
            }
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(id);
            }
        });

        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusableElements = modal.querySelectorAll('button, a, input, select, textarea, [tabindex="0"]');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        });
    });

    // Escape key handling
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (overlayMenu && hamburger) {
                overlayMenu.classList.remove('active');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                overlayMenu.setAttribute('aria-hidden', 'true');
            }
            modals.forEach(({ id }) => closeModal(id));
        }
    });

    /**
     * Debounce function to limit frequent calls
     * @param {Function} func - Function to debounce
     * @param {number} delay - Delay in milliseconds
     * @returns {Function} - Debounced function
     */
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(null, args), delay);
        };
    };

    /**
     * Create a script card element
     * @param {Object} script - Script object
     * @returns {HTMLElement} - Script card element
     */
    const createScriptCard = (script) => {
        const scriptCard = document.createElement('div');
        scriptCard.className = 'script-card';
        scriptCard.setAttribute('role', 'article');

        const title = document.createElement('h3');
        title.textContent = script.name;

        const game = document.createElement('p');
        game.innerHTML = `<strong>Game:</strong> ${script.game}`;

        const category = document.createElement('p');
        category.innerHTML = `<strong>Category:</strong> ${script.category}`;

        const description = document.createElement('p');
        description.textContent = script.description;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const viewCodeButton = document.createElement('button');
        viewCodeButton.innerHTML = '<i class="fas fa-code"></i> View Code';
        viewCodeButton.setAttribute('aria-label', `View code for ${script.name}`);
        viewCodeButton.addEventListener('click', () => showCode(script.name));

        const favoriteButton = document.createElement('button');
        favoriteButton.className = `favorite-btn${isFavorite(script.name) ? ' favorited' : ''}`;
        favoriteButton.setAttribute('data-script-name', script.name);
        favoriteButton.setAttribute('aria-label', isFavorite(script.name) ? `Remove ${script.name} from favorites` : `Add ${script.name} to favorites`);
        favoriteButton.innerHTML = isFavorite(script.name) ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';

        buttonsDiv.appendChild(viewCodeButton);
        buttonsDiv.appendChild(favoriteButton);

        scriptCard.appendChild(title);
        scriptCard.appendChild(game);
        scriptCard.appendChild(category);
        scriptCard.appendChild(description);
        scriptCard.appendChild(buttonsDiv);

        return scriptCard;
    };

    /**
     * Display scripts with pagination
     * @param {Array} scriptsToShow - Array of scripts to display
     */
    const displayScripts = (scriptsToShow) => {
        const scriptsGrid = document.getElementById('scriptsGrid');
        const noResults = document.getElementById('noResults');
        const prevPage = document.getElementById('prevPage');
        const nextPage = document.getElementById('nextPage');
        const pageInfo = document.getElementById('pageInfo');

        if (!scriptsGrid || !noResults || !prevPage || !nextPage || !pageInfo) {
            console.error('Required DOM elements for displayScripts not found.');
            return;
        }

        scriptsGrid.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i> Loading scripts...</div>';

        requestAnimationFrame(() => {
            scriptsGrid.innerHTML = '';

            if (scriptsToShow.length === 0) {
                noResults.style.display = 'block';
                prevPage.disabled = true;
                nextPage.disabled = true;
                pageInfo.textContent = 'No scripts found';
                return;
            }

            noResults.style.display = 'none';
            const start = (currentPage - 1) * scriptsPerPage;
            const end = start + scriptsPerPage;
            const paginatedScripts = scriptsToShow.slice(start, end);

            const fragment = document.createDocumentFragment();
            paginatedScripts.forEach(script => {
                fragment.appendChild(createScriptCard(script));
            });
            scriptsGrid.appendChild(fragment);

            const totalPages = Math.ceil(scriptsToShow.length / scriptsPerPage);
            prevPage.disabled = currentPage === 1;
            nextPage.disabled = currentPage === totalPages || totalPages === 0;
            pageInfo.textContent = totalPages === 0 ? 'No scripts found' : `Page ${currentPage} of ${totalPages}`;
        });
    };

    /**
     * Filter and sort scripts based on user input
     * @returns {Array} - Filtered and sorted scripts
     */
    const filterScripts = () => {
        const searchInput = document.getElementById('searchInput');
        const gameFilter = document.getElementById('gameFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const showFavorites = document.getElementById('showFavorites');

        if (!searchInput || !gameFilter || !categoryFilter || !sortFilter || !showFavorites) {
            console.error('Filter elements not found.');
            return scripts;
        }

        const searchTerm = searchInput.value.trim().toLowerCase();
        const selectedGame = gameFilter.value;
        const selectedCategory = categoryFilter.value;
        const sortBy = sortFilter.value;
        const showFavoritesOnly = showFavorites.checked;

        let filteredScripts = scripts.filter(script => {
            const searchFields = [
                script.name.toLowerCase(),
                script.game.toLowerCase(),
                script.category.toLowerCase(),
                script.description.toLowerCase()
            ];
            const matchesSearch = searchTerm === '' || searchFields.some(field => field.includes(searchTerm));
            const matchesGame = selectedGame === '' || script.game === selectedGame;
            const matchesCategory = selectedCategory === '' || script.category === selectedCategory;
            const matchesFavorites = !showFavoritesOnly || isFavorite(script.name);
            return matchesSearch && matchesGame && matchesCategory && matchesFavorites;
        });

        if (sortBy === 'popularity') {
            filteredScripts.sort((a, b) => b.popularity - a.popularity);
        } else if (sortBy === 'newest') {
            filteredScripts.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        } else {
            filteredScripts.sort((a, b) => a.name.localeCompare(b.name));
        }

        currentPage = 1;
        displayScripts(filteredScripts);
        return filteredScripts;
    };

    /**
     * Initialize event listeners for filters and pagination
     */
    const initEventListeners = () => {
        const searchInput = document.getElementById('searchInput');
        const gameFilter = document.getElementById('gameFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const showFavorites = document.getElementById('showFavorites');
        const prevPage = document.getElementById('prevPage');
        const nextPage = document.getElementById('nextPage');
        const scriptsGrid = document.getElementById('scriptsGrid');

        if (!searchInput || !gameFilter || !categoryFilter || !sortFilter || !showFavorites || !prevPage || !nextPage || !scriptsGrid) {
            console.error('Required DOM elements for event listeners not found.');
            return;
        }

        const debouncedFilter = debounce(filterScripts, 300);
        searchInput.addEventListener('input', debouncedFilter);
        gameFilter.addEventListener('change', filterScripts);
        categoryFilter.addEventListener('change', filterScripts);
        sortFilter.addEventListener('change', filterScripts);
        showFavorites.addEventListener('change', filterScripts);

        prevPage.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                displayScripts(filterScripts());
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        nextPage.addEventListener('click', () => {
            const filteredScripts = filterScripts();
            const totalPages = Math.ceil(filteredScripts.length / scriptsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                displayScripts(filteredScripts);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        scriptsGrid.addEventListener('click', (e) => {
            const favoriteBtn = e.target.closest('.favorite-btn');
            if (favoriteBtn) {
                e.preventDefault(); // Prevent default button behavior
                const scriptName = favoriteBtn.dataset.scriptName;
                if (scriptName) {
                    toggleFavorite(scriptName);
                } else {
                    console.warn('No data-script-name found on favorite button.');
                }
            }
        });
    };

    /**
     * Initialize the application
     */
    const init = () => {
        try {
            initEventListeners();
            filterScripts();
        } catch (error) {
            console.error('Initialization failed:', error);
            alert('Failed to initialize the application. Please refresh the page.');
        }
    };

    init();
});

/* Ads system */

let lastOpened = 0;
const cooldown = 8000; // 8 seconds cooldown for ads

// Ad links (currently identical; replace with distinct links if needed)
const adLinks = [
    "https://mediocrecliffschangeless.com/nxtpva0b?key=6a516ed055d3c69ba578557cab77d4e8",
    "https://mediocrecliffschangeless.com/nxtpva0b?key=6a516ed055d3c69ba578557cab77d4e8" // Replace with a different link if available
];

// Function to pick a random ad link
function getRandomAdLink() {
    return adLinks[Math.floor(Math.random() * adLinks.length)];
}

// Open ad if cooldown is passed
function openAdWithCooldown() {
    const now = Date.now();
    if (now - lastOpened >= cooldown) {
        try {
            const randomAd = getRandomAdLink();
            const adWindow = window.open(randomAd, "_blank");
            if (!adWindow) {
                console.warn('Ad window blocked or failed to open. Possible pop-up blocker.');
            }
            lastOpened = now;
        } catch (error) {
            console.error('Failed to open ad:', error);
        }
    }
}

// Trigger on any click
document.addEventListener("click", openAdWithCooldown);
