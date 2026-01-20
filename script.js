const content = document.getElementById('content');

/* === Theme === */
const themeButton = document.getElementById('toggle-theme');

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem(
    'theme',
    document.body.classList.contains('dark-theme') ? 'dark' : 'light'
  );
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}

/* === Page loader === */
function loadContent(page, event) {
  document
    .querySelectorAll('.sidebar li')
    .forEach(li => li.classList.remove('active'));

  if (event) event.target.classList.add('active');

  content.classList.add('fade-out');

  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      setTimeout(() => {
        content.innerHTML = html;
        content.classList.remove('fade-out');
      }, 200);
    })
    .catch(() => {
      content.innerHTML = `
        <h1>Помилка</h1>
        <p>Сторінку не знайдено</p>
      `;
    });
}
