document.addEventListener('DOMContentLoaded', () => {
    const lightModeToggle = document.getElementById('light-mode-toggle');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Function to set the theme and update UI
    function setTheme(theme) {
        body.classList.remove('light-mode', 'dark-mode'); // Remove both first
        body.classList.add(theme); // Add the new theme class
        localStorage.setItem('theme', theme); // Save preference
        updateToggleButtons(theme); // Update active state of buttons
    }

    // Function to update the visual state of the toggle buttons
    function updateToggleButtons(theme) {
        if (theme === 'dark-mode') {
            darkModeToggle.classList.add('active');
            lightModeToggle.classList.remove('active');
        } else { // light-mode
            lightModeToggle.classList.add('active');
            darkModeToggle.classList.remove('active');
        }
    }

    // Check for a saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no saved theme, check system preference
        setTheme('dark-mode');
    } else {
        // Default to light mode if nothing else is specified
        setTheme('light-mode');
    }

    // Event listeners for the buttons
    // Clicking the light button always sets light mode
    lightModeToggle.addEventListener('click', () => {
        setTheme('light-mode');
    });

    // Clicking the dark button always sets dark mode
    darkModeToggle.addEventListener('click', () => {
        setTheme('dark-mode');
    });
});
