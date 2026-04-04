// Runs immediately to prevent flash of wrong theme on page load
(function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();

function initDarkModeToggle() {
  const toggles = [
    document.getElementById('darkToggle'),
    document.getElementById('darkToggleDrawer')
  ].filter(Boolean);

  // Sync visual state of all toggles to current theme
  function syncToggles() {
    const isDark = document.documentElement.classList.contains('dark');
    toggles.forEach(t => t.classList.toggle('is-dark', isDark));
  }

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      syncToggles();
    });
  });

  syncToggles();
}