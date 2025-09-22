document.addEventListener('DOMContentLoaded', () => {
    const lightModeToggle = document.getElementById('light-mode-toggle');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for a saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedTheme);
        updateToggleButtons(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // If no saved theme, check system preference
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        updateToggleButtons('dark-mode');
    }

    // Function to update the UI
    function updateToggleButtons(theme) {
        if (theme === 'dark-mode') {
            darkModeToggle.classList.add('active');
            lightModeToggle.classList.remove('active');
        } else {
            lightModeToggle.classList.add('active');
            darkModeToggle.classList.remove('active');
        }
    }

    // Event listeners for the buttons
    lightModeToggle.addEventListener('click', () => {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateToggleButtons('light-mode');
    });

    darkModeToggle.addEventListener('click', () => {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateToggleButtons('dark-mode');
    });
});
