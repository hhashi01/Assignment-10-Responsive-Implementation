const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'styles/hamburger_menu.css';
document.head.appendChild(link);


function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const drawerClose = document.getElementById('drawerClose');

  hamburger.addEventListener('click', () => {
    drawer.classList.add('active');
    overlay.classList.add('active');
  });

  drawerClose.addEventListener('click', () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', () => {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
  });
}