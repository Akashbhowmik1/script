async function loadScriptsFromDatabase() {

    try {

        const response = await fetch(
            "https://scriptshub-api.akashbhowmik110.workers.dev/scripts"
        );

        const data = await response.json();
        scripts = scripts.filter(
    script => !script.fromDatabase
);

       const existing =
new Set(
    scripts.map(
        s => `${s.name}|${s.game}`
    )
);

for (const item of data) {

    const key =
    `${item.script_name}|${item.game}`;

    if (existing.has(key))
        continue;

    existing.add(key);

    scripts.push({
        id: item.id,
        name: item.script_name,
        game: item.game,
        category: item.category,
        description: item.description,
        code: item.code,
        popularity: 0,
        dateAdded: item.date_added,
        fromDatabase: true
    });

}


     console.log("D1 data:", data);
console.log("Scripts array:", scripts.length);

currentPage = 1;



    }
    catch(error){

        console.error(
            "Failed to load scripts:",
            error
        );

    }

}

// Define scripts array with corrected entries
let scripts = [];

let favorites = [];
let currentPage = 1;
const scriptsPerPage = 15;
let adminSessionKey = null;
let isAdmin = false;
let loginMode = "";



function showToast(message, type = "success") {

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 10);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);
}

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
       showToast(
`Script '${scriptName}' not found`,
'error'
);
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
               showToast(
'Failed to copy code. Please try again.',
'error'
);
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

          
        const adminAccessBtn =
document.getElementById(
    "adminAccessBtn"
);

if (adminAccessBtn) {

    adminAccessBtn.addEventListener(
    "click",
    () => {

        if (overlayMenu && hamburger) {

            overlayMenu.classList.remove(
                "active"
            );

            hamburger.classList.remove(
                "active"
            );

        }

       loginMode = "edit";

document.getElementById(
    "passwordModal"
).style.display = "flex";

    });

}



       const addScriptBtn = document.getElementById("addScriptBtn");

if (addScriptBtn) {
    addScriptBtn.addEventListener("click", () => {

        // Close hamburger menu
        if (overlayMenu && hamburger) {
            overlayMenu.classList.remove("active");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            overlayMenu.setAttribute("aria-hidden", "true");
        }

        // Open password modal
        loginMode = "add";

document.getElementById(
    "passwordModal"
).style.display = "flex";
        document.getElementById("passwordModal")
            .setAttribute("aria-hidden", "false");
    });
}



const verifyKeyBtn =
document.getElementById("verifyKeyBtn");

if (verifyKeyBtn) {
verifyKeyBtn.addEventListener("click", async () => {

    const key =
        document.getElementById("adminKey")
        .value
        .trim();

    try {

       const endpoint =
loginMode === "edit"
? "https://scriptshub-api.akashbhowmik110.workers.dev/verify-edit-key"
: "https://scriptshub-api.akashbhowmik110.workers.dev/verify-key";

const res = await fetch(
    endpoint,
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ key })
    }
);

        if (!res.ok) {
            showToast("Wrong Key", "error");
            return;
        }

      document.getElementById(
    "passwordModal"
).style.display = "none";

if (loginMode === "edit") {

    adminSessionKey = key;
    isAdmin = true;

    showToast("Admin Mode Enabled");

    filterScripts();

} else {

    adminSessionKey = key;

    document.getElementById(
        "addScriptModal"
    ).style.display = "flex";

}
    }
    catch(error){

    console.error(error);

    showToast(
        "Server Error",
        "error"
    );

}
    

});
}


 

   const saveScriptBtn =
document.getElementById("saveScriptBtn");

if (saveScriptBtn) {
saveScriptBtn.addEventListener("click", async () => {

    const game =
        document.getElementById("gameName").value;

            const category =
    document.getElementById("categoryName").value;

    const name =
        document.getElementById("scriptName").value;

    const description =
        document.getElementById("scriptDescription").value;

    const code =
        document.getElementById("scriptCode").value;

    if(
        !game ||
        !category ||
        !name ||
        !description ||
        !code
    ){
        showToast("Fill all fields", "error");
        return;
    }

    try {

    const response = await fetch(
        "https://scriptshub-api.akashbhowmik110.workers.dev/add-script",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                key: adminSessionKey,
                game,
                script_name: name,
                 category,
                description,
                code
            })
        }
    );

    if (!response.ok) {

       showToast("Failed To Save Script", "error");

        return;

    }

    showToast("Script Added Successfully");

document.getElementById(
    "addScriptModal"
).style.display = "none";

currentPage = 1;

await loadScriptsFromDatabase();

rebuildGameFilter();

filterScripts();

}
catch(error){

    console.error(error);

    showToast("Server Error", "error");

    return;

}

});
}

     


             const saveEditBtn =
document.getElementById("saveEditBtn");

if (saveEditBtn) {

    saveEditBtn.addEventListener(
    "click",
    async () => {

        const id =
        document.getElementById(
        "editScriptId"
        ).value;
        console.log("EDIT ID =", id);

        const game =
        document.getElementById(
        "editGameName"
        ).value;

        const category =
        document.getElementById(
        "editCategoryName"
        ).value;

        const script_name =
        document.getElementById(
        "editScriptName"
        ).value;

        const description =
        document.getElementById(
        "editScriptDescription"
        ).value;

        const code =
        document.getElementById(
        "editScriptCode"
        ).value;

        const response =
        await fetch(
        "https://scriptshub-api.akashbhowmik110.workers.dev/edit-script",
        {
            method: "POST",
            headers: {
                "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
                key: adminSessionKey,
                id,
                game,
                category,
                script_name,
                description,
                code
            })
        });

        console.log(
    "Status:",
    response.status
);

        if (!response.ok) {

           showToast("Failed To Update", "error");

            return;

        }

       showToast("Script Updated");

closeModal(
"editScriptModal"
);

await loadScriptsFromDatabase();

rebuildGameFilter();

filterScripts();

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

if (isAdmin && script.id) {

    const editBtn =
    document.createElement("button");

    editBtn.innerHTML =
    '<i class="fas fa-edit"></i>';

    editBtn.className =
    "edit-script-btn";

    editBtn.onclick = () =>
    openEditModal(script);

    buttonsDiv.appendChild(editBtn);

}

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
     * Get filtered and sorted scripts based on user input (without resetting page or displaying)
     * @returns {Array} - Filtered and sorted scripts
     */
    const getFilteredScripts = () => {
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
            const matchesGame = selectedGame === '' || script.game.trim() === selectedGame.trim();
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

        return filteredScripts;
    };

    /**
     * Apply filters, reset page, and display scripts
     */
   const filterScripts = () => {

    console.log(
        "filterScripts called"
    );

    const filtered =
    getFilteredScripts();

    console.log(
        "Filtered:",
        filtered.length
    );

    currentPage = 1;

    displayScripts(filtered);

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
                displayScripts(getFilteredScripts());
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });

        nextPage.addEventListener('click', () => {
            const filteredScripts = getFilteredScripts();
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


    function rebuildGameFilter() {

    const gameFilter =
    document.getElementById("gameFilter");

    if (!gameFilter) return;

    const uniqueGames = [
        ...new Set(
            scripts.map(
                script => script.game.trim()
            )
        )
    ].sort();

    gameFilter.innerHTML =
    '<option value="">All Games</option>';

    uniqueGames.forEach(game => {

        const option =
        document.createElement("option");

        option.value = game;
        option.textContent = game;

        gameFilter.appendChild(option);

    });

}

const init = async () => {

    try {

        rebuildGameFilter();

        initEventListeners();

await loadScriptsFromDatabase();

rebuildGameFilter();

filterScripts();

    }
    catch (error) {

        console.error(
            'Initialization failed:',
            error
        );

       showToast(
    'Failed to initialize the application. Please refresh the page.',
    'error'
);

    }

};



function openEditModal(script) {

    document.getElementById(
        "editScriptId"
    ).value = script.id;

    document.getElementById(
        "editGameName"
    ).value = script.game;

    document.getElementById(
        "editCategoryName"
    ).value = script.category;

    document.getElementById(
        "editScriptName"
    ).value = script.name;

    document.getElementById(
        "editScriptDescription"
    ).value = script.description;

    document.getElementById(
        "editScriptCode"
    ).value = script.code;

    document.getElementById(
        "editScriptModal"
    ).style.display = "flex";

}



init();

});














