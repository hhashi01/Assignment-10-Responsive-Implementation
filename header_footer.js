fetch('navigations/header.html')
  .then(res => res.text())
  .then(html => document.getElementById('nav-placeholder').innerHTML = html);

fetch('navigations/footer.html')
  .then(res => res.text())
  .then(html => document.getElementById('footer-placeholder').innerHTML = html);