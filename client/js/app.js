document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const openSidebarBtn = document.getElementById('open-sidebar');
    const closeSidebarBtn = document.getElementById('close-sidebar');
    const arScene = document.getElementById('ar-scene');

    // Open sidebar
    openSidebarBtn.addEventListener('click', () => {
        sidebar.style.left = '0'; // Slide the sidebar into view
        navbar.classList.add('navbar-hidden'); // Hide the navbar
    });

    // Close sidebar
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.style.left = '-250px'; // Slide the sidebar out of view
        navbar.classList.remove('navbar-hidden'); // Show the navbar again
    });

    // Start AR Navigation
    document.getElementById('start-navigation').addEventListener('click', () => {
        arScene.style.display = 'block'; // Show AR scene
    });

    // Admin login form submission
    document.getElementById('admin-login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const response = await fetch('/api/admin/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (data.message === 'Login successful') {
            alert('Admin logged in');
            // Redirect to admin page or show admin controls
        } else {
            alert('Invalid credentials');
        }
    });
});
