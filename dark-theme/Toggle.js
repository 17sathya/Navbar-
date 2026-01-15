const toggleButton = document.getElementById('themetoggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');

// Apply saved theme on load
if (savedTheme==="dark") {
    body.classList.add("dark");
    toggleButton.textContent="switch to light theme";


}

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');  

    if (body.classList.contains('dark')) {
        toggleButton.textContent="switch to light theme";
        localStorage.setItem('theme', 'dark');
    }   
    else {
        toggleButton.textContent="switch to dark theme";
        localStorage.setItem('theme', 'light');
    }   
});