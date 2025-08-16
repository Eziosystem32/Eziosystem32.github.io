document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebarNav');
    const toggle = document.getElementById('sidebarToggle');
    const closeBtn = document.getElementById('closeSidebar');

    toggle.addEventListener('click', () => {
        sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });

    // Optional: close sidebar if clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
});
