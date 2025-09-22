document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('checkbox');
    const body = document.body;

    // Function to set the theme and update UI
    function setTheme(theme) {
        if (theme === 'dark-mode') {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleSwitch.checked = true;
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleSwitch.checked = false;
        }
        localStorage.setItem('theme', theme);
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

    // Event listener for the toggle switch
    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }
    });
});
