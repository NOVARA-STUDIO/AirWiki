function loadContent(section, event) {
  const content = document.getElementById("content");

  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  event.target.classList.add('active');

  const data = {
    about: `
      <h1>Про гру</h1>
      <iframe frameborder="0" 
          src="https://itch.io/embed/4164169?border_width=3&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=b00000&amp;border_color=8a8a8a" 
          width="556" 
          height="171">
        <a href="https://novyra-studio.itch.io/air-defense-ops">Air Defense Ops by NOVYRA STUDIO™</a>
      </iframe>   
    `,


    
    ppo: `
      <h1>Види ППО:</h1>
      
      <h2>Мобільна Вогнева Група (МВГ)</h2>
      <ul>
        <li>Мобільний підрозділ протиповітряної оборони</li>
        <li>Тип боєприпасу: кулі.</li>
        <li>Скорострільність: 1 куля/0.5с</li>
      </ul>

      <h2>NASAMS</h2>
      <ul>
        <li>Зенітний ракетний комплекс</li>
        <li>Тип боєприпасу: ракета з самонаведенням.</li>
        <li>Скорострільність: 1 ракета/2с</li>
      </ul>

      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,


    
    weapons: `
      <h1>Види зброї:</h1>

      <h2>Shahed-136</h2>
      <ul>
        <li>Швидкість: 10-15px/c.</li>
        <li>Може маневрувати.</li>
      </ul>

      <h2>Х-101</h2>
      <ul>
        <li>Швидкість: 150-200px/c.</li>
        <li>Може маневрувати.</li>
      </ul>

      <h2>Х-47М2 «Кинджал»</h2>
      <ul>
        <li>Початкова швидкість: 1000px/c. На відстані 500px до цілі швидкість знижується до 200px/c.</li>
        <li>Не може маневрувати.</li>
      </ul>

      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,


    
    transport: `
      <h1>Види техніки:</h1>
    `,



    buildings: `
      <h1>Види будівель:</h1>
    `,


    
    map: `
      <h1>Карта</h1>
    `
  };


  
  content.innerHTML = data[section] || `
    <h1>Розділ порожній</h1>
    <p><em>Тут зʼявиться контент пізніше.</em></p>
  `;
}
