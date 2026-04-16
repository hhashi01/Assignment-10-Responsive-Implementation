window.accountCreated = sessionStorage.getItem("accountCreated") === "true";

function loadStyle(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

fetch('navigations/header.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('nav-placeholder').innerHTML = html;
    loadStyle('navigations/header.css');
    initHamburger();
    initDarkModeToggle();

    const navHeight = document.getElementById('nav-placeholder').offsetHeight;
    document.body.style.paddingTop = navHeight + 'px';
  });

fetch('navigations/footer.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
    loadStyle('navigations/footer.css');
  });

function updateNavAccountBtn() {
  const btn = document.getElementById("nav-account-btn");
  if (!btn) return;

  if (window.accountCreated) {
    btn.href      = "user_account.html";
    btn.innerHTML = "<b>Your Account</b>";
    btn.setAttribute("aria-label", "Go to your account");
  } else {
    btn.href      = "signup.html";
    btn.innerHTML = "<b>Sign Up</b>";
    btn.setAttribute("aria-label", "Sign up for an account");
  }
}

function watchForNav() {
  const placeholder = document.getElementById("nav-placeholder");
  if (!placeholder) return;

  if (document.getElementById("nav-account-btn")) {
    updateNavAccountBtn();
    return;
  }

  const observer = new MutationObserver(() => {
    if (document.getElementById("nav-account-btn")) {
      updateNavAccountBtn();
      observer.disconnect();
    }
  });

  observer.observe(placeholder, { childList: true, subtree: true });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", watchForNav);
} else {
  watchForNav();
}