document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const html = document.documentElement;

  if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
  } else if (localStorage.getItem('theme') === 'light') {
    html.classList.remove('dark');
  }

  toggleBtn?.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
