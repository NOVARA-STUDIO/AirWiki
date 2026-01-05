function loadContent(section, event) {
  const content = document.getElementById("content");

  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  event.target.classList.add('active');

  const data = {
    about: `
      <h1>Про гру</h1>
      
      <ul>
        <li>Актуальна версія: 1.20</li>
      </ul>
      
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
        <li>Мобільний підрозділ протиповітряної оборони.</li>
        <li>Тип боєприпасу: кулі.</li>
        <li>Скорострільність: 1 куля/0.5с.</li>
        <li>Радіус дії: 96px.</li>
      </ul>



      <h2>NASAMS</h2>
      <ul>
        <li>Зенітний ракетний комплекс.</li>
        <li>Тип боєприпасу: ракета Air1.</li>
        <li>Скорострільність: 1 ракета/2с.</li>
        <li>Радіус дії: 256px.</li>
      </ul>



      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,


    
    weaponsppo: `
      <h1>Види боєприпасів ППО:</h1>



      <h2>Куля</h2>
      <ul>
        <li>Швидкість: 150px/c.</li>
        <li>Швидкість повороту: 0px/с.</li>
        <li>Тип керування: немає.</li>
        <li>Дальність польоту: 225px.</li>
      </ul>


      
      <h2>Air1A</h2>
      <img src="img/Air1A.png" alt="Air1A ракета" class="icon">
      <ul>
        <li>Швидкість: 200px/c.</li>
        <li>Швидкість повороту: 14px/с.</li>
        <li>Тип керування: самонаведення.</li>
        <li>Дальність польоту: 200px. При знаходженні цілі дальність збільшується ще на 200px.</li>
      </ul>

      <img src="img/Air1A.png" alt="Air1A ракета" class="icon">
      <figure>
        <img src="img/air1a.png" alt="Ракета Air1A">
        <figcaption>Ракета Air1A — самонаведний боєприпас ППО.</figcaption>
      </figure>



      <h2>Air1B</h2>
      <img src="img/Air1B.png" alt="Air1B ракета" class="icon">
      <ul>
        <li>Швидкість: 300px/c.</li>
        <li>Швидкість повороту: 15px/с.</li>
        <li>Тип керування: самонаведення.</li>
        <li>Дальність польоту: 300px. При знаходженні цілі дальність збільшується ще на 300px.</li>
      </ul>



      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,


    
    weapons: `
      <h1>Види зброї:</h1>


      
      <h2>Shahed-136</h2>
      <ul>
        <li>Швидкість: 10-15px/c.</li>
        <li>Швидкість повороту: 3px/с.</li>
        <li>Може маневрувати.</li>
      </ul>


      
      <h2>Х-101</h2>
      <ul>
        <li>Швидкість: 150-200px/c.</li>
        <li>Швидкість повороту: 2px/с.</li>
        <li>Може маневрувати.</li>
      </ul>


      
      <h2>Х-47М2 «Кинджал»</h2>
      <ul>
        <li>Початкова швидкість: 1000px/c. На відстані 500px до цілі швидкість знижується до 200px/c.</li>
        <li>Швидкість повороту: 0px/с.</li>
        <li>Не може маневрувати.</li>
      </ul>


      
      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,


    
    transport: `<h1>Види техніки:</h1>`,
    buildings: `<h1>Види будівель:</h1>`,
    map: `<h1>Карта</h1>`
  };

  content.innerHTML = data[section] || `
    <h1>Розділ порожній</h1>
    <p><em>Тут зʼявиться контент пізніше.</em></p>
  `;
}
