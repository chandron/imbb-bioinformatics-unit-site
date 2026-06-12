/* =========================================================
   Bioinformatics Unit — IMBB-FORTH
   Shared JavaScript
   ========================================================= */

// ── Theme (dark / light) ──────────────────────────────────
(function applyThemeEarly() {
  try {
    var saved = localStorage.getItem('bu-theme');
    var prefersDark = window.matchMedia &&
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch(e) {}
})();

function toggleDarkMode() {
  var html  = document.documentElement;
  var icon  = document.getElementById('theme-icon');
  var isDark = html.getAttribute('data-theme') === 'dark';

  if (isDark) {
    html.removeAttribute('data-theme');
    if (icon) { icon.className = 'fa-solid fa-moon'; }
    try { localStorage.setItem('bu-theme', 'light'); } catch(e) {}
  } else {
    html.setAttribute('data-theme', 'dark');
    if (icon) { icon.className = 'fa-solid fa-sun'; }
    try { localStorage.setItem('bu-theme', 'dark'); } catch(e) {}
  }
}

// Sync icon to current theme once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  var icon = document.getElementById('theme-icon');
  if (icon && document.documentElement.getAttribute('data-theme') === 'dark') {
    icon.className = 'fa-solid fa-sun';
  }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
});

// ── Tab switching (Resources page) ───────────────────────
function showTab(name) {
  document.querySelectorAll('.tab-content').forEach(function (el) {
    el.classList.remove('active-tab');
  });
  document.querySelectorAll('.tab-btn').forEach(function (el) {
    el.classList.remove('active');
  });
  var target = document.getElementById('tab-' + name);
  if (target) target.classList.add('active-tab');
  if (event && event.target) event.target.classList.add('active');
}
