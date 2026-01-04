function loadContent(section, event) {
  const content = document.getElementById("content");

  // Активний пункт меню
  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  event.target.classList.add('active');

  const data = {
    about: `
      <h1>Про гру</h1>
      <p><em>Тут буде опис гри. Напиши загальну ідею, жанр, суть.</em></p>
    `,

    ppo: `
      <h1>Види ППО:</h1>
      <p><em>Тут буде інформація про системи протиповітряної оборони.</em></p>
    `,

    weapons: `
      <h1>Види зброї:</h1>

      <h2>Х-101</h2>
      <ul>
        <li><em>Швидкість: 150-200px/c.</em></li>
        <li><em>Тут буде дальність, швидкість, роль</em></li>
      </ul>

      <h2>Х-47М2 «Кинджал»</h2>
      <ul>
        <li><em>Початкова швидкість: 1000px/c. На відстані 500px до цілі швидкість знижується до 200px/c.</em></li>
        <li><em>Тут буде особливості та застосування</em></li>
      </ul>

      <p><em>Усі характеристики є вигаданими та не є реальними.</em></p>
    `,

    buildings: `
      <h1>Види будівель:</h1>
      <p><em>Тут буде опис будівель, їх роль у грі.</em></p>
    `,

    map: `
      <h1>Карта</h1>
      <p><em>Тут буде опис карти, регіонів і механік.</em></p>
    `
  };

  content.innerHTML = data[section] || `
    <h1>Розділ порожній</h1>
    <p><em>Тут зʼявиться контент пізніше.</em></p>
  `;
}
