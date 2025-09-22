document.addEventListener('DOMContentLoaded', () => {
    const lightModeToggle = document.getElementById('light-mode-toggle');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Function to set the theme and update UI
    function setTheme(theme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme);
        localStorage.setItem('theme', theme);
        updateToggleButtons(theme);
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

    // Check for a saved theme preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark-mode');
    } else {
        setTheme('light-mode');
    }

    // Event listeners for the buttons
    lightModeToggle.addEventListener('click', () => {
        setTheme('light-mode');
    });

    darkModeToggle.addEventListener('click', () => {
        setTheme('dark-mode');
    });
});
