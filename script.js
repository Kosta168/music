function toggleTheme() {
  const body = document.body;
  const wasDarkmode = localStorage.getItem('darkmode') === 'true';

  localStorage.setItem('darkmode', !wasDarkmode);
  body.classList.toggle('dark-mode', !wasDarkmode);
}

// Автоматичне застосування теми після оновлення сторінки
window.addEventListener('DOMContentLoaded', () => {
  const isDark = localStorage.getItem('darkmode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
  }
});

document.querySelector('.btn1').addEventListener('click', toggleTheme);