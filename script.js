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
        <li><em>Мобільний підрозділ протиповітряної оборони</em></li>
        <li><em>Тип боєприпасу: стрілецькі боєприпаси</em></li>
      </ul>

      <h2>NASAMS</h2>
      <ul>
        <li><em>Зенітний ракетний комплекс</em></li>
        <li><em>Тип боєприпасу: ракета з самонаведеннямє</em></li>
      </ul>

      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,


    
    weapons: `
      <h1>Види зброї:</h1>

      <h2>Shahed-136</h2>
      <ul>
        <li><em>Швидкість: 10-15px/c.</em></li>
        <li><em>Може маневрувати.</em></li>
      </ul>

      <h2>Х-101</h2>
      <ul>
        <li><em>Швидкість: 150-200px/c.</em></li>
        <li><em>Може маневрувати.</em></li>
      </ul>

      <h2>Х-47М2 «Кинджал»</h2>
      <ul>
        <li><em>Початкова швидкість: 1000px/c. На відстані 500px до цілі швидкість знижується до 200px/c.</em></li>
        <li><em>Не може маневрувати.</em></li>
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
