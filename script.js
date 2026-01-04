function loadContent(section) {
  const content = document.getElementById("content");

  const data = {
    about: `
      <h1>Про гру</h1>
      <p>Це стратегічна гра, натхненна сучасними подіями.</p>
    `,
    ppo: `
      <h1>Сюжет</h1>
      <p>Події розгортаються у вигаданій державі, яка бореться за виживання.</p>
    `,
    weapons: `
      <h1>Фракції</h1>
        <li>Армія оборони</li>
      <ul>
      <h1>х101</h1>
        <li>Повстанці</li>
      <ul>
      <h1>х47м2</h1>
        <li>Найманці</li>
      </ul>
    `,
    buildings: `
      <h1>Озброєння</h1>
      <p>Ракети, ППО, дрони, артилерія.</p>
    `,
    map: `
      <h1>Карта</h1>
      <p>Карта поділена на регіони з різним контролем.</p>
    `
  };

  content.innerHTML = data[section];
}
