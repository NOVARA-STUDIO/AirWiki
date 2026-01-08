const themeButton = document.getElementById('toggle-theme');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
}

function loadContent(section, event) {
  const content = document.getElementById("content");
  document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
  event.target.classList.add('active');

  const data = {
    about: `
      <h1>Про гру</h1>
      
      <h2>Актуальна версія: 1.22 (07.01.2026)</h2>
      <div class="ppo-block">
        <h2>Додано/змінено:</h2>
        <ul>
        
          <li>Деякі Х-101 можуть відстрілювати теплові пастки.</li>
          <li>Виправлено траєкторію Х-101.</li>
          <li>У NASAMS перероблено меню та додано опцію вибору боєприпасу.</li>
          <li>Усі ракети ППО втрачають ціль одразу після виходу із зони захоплення.</li>
          <li>Додано теплові пастки.</li>
          <li>Для Air 1A збільшено дальність польоту з 200 до 400.</li>
          <li>Щоб увімкнути режим “Налагодження”, увімкніть його в налаштуваннях.</li>
          
        </ul>
      </div>
      
      <iframe frameborder="0" 
        src="https://itch.io/embed/4164169?border_width=3&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=b00000&amp;border_color=8a8a8a" 
        width="556" 
        height="171">
        <a href="https://novyra-studio.itch.io/air-defense-ops">Air Defense Ops by NOVYRA STUDIO™</a>
      </iframe>   
    `,
    ppo: `
      <h1>Види ППО:</h1>
      
      <div class="ppo-block">
        <h2>Мобільна Вогнева Група (МВГ)</h2>
        <ul>
        
          <li>Мобільний підрозділ протиповітряної оборони.</li>
          <li>Тип боєприпасу: кулі.</li>
          <li>Скорострільність: 1 куля/0.5с.</li>
          <li>Радіус дії: 96px.</li>
          
        </ul>
      
      </div>
      <div class="ppo-block">
        <h2>NASAMS</h2>
        <ul>
        
          <li>Зенітний ракетний комплекс.</li>
          <li>Стандартний тип боєприпасу: ракета Air 1A.</li>
          <li>Скорострільність: 1 ракета/2с.</li>
          <li>Радіус дії: 232px.</li>
          <li>Підтримує боєприпаси: Air 1A, Air 1B.</li>
          
        </ul>
      </div>
      
      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,
    weaponsppo: `
      <h1>Види боєприпасів ППО:</h1>
      
      <div class="ppo-block">
        <h2>Куля</h2>
        <ul>
        
          <li>Швидкість: 150px/c.</li>
          <li>Швидкість повороту: 0px/с.</li>
          <li>Тип керування: немає.</li>
          <li>Дальність польоту: 225px.</li>
          
        </ul>
      
      </div>
      <div class="ppo-block">
        <h2>Air 1A</h2>
        <ul>
        
          <li>Швидкість: 200px/c.</li>
          <li>Швидкість повороту: 14px/с.</li>
          <li>Тип керування: самонаведення.</li>
          <li>Дальність польоту: 400px.</li>
          
        </ul>
        <img src="img/weaponsppo/Air1A.png" alt="Air1A ракета" class="img-medium">
        <figure><figcaption>Зона захоплення цілі.</figcaption></figure>
      </div>
      
      <div class="ppo-block">
        <h2>Air 1B</h2>
        <ul>
        
          <li>Швидкість: 300px/c.</li>
          <li>Швидкість повороту: 15px/с.</li>
          <li>Тип керування: самонаведення.</li>
          <li>Дальність польоту: 300px.</li>
          
        </ul>
        <img src="img/weaponsppo/Air1B.png" alt="Air1B ракета" class="img-medium">
        <figure><figcaption>Зона захоплення цілі.</figcaption></figure>
      </div>
      
      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,
    weapons: `
      <h1>Види зброї:</h1>
      
      <div class="ppo-block">
        <h2>Shahed-136</h2>
        <img src="img/weapons/shaheed136.png" alt="Shahed-136" class="img-small">
        <img src="img/weapons/shaheed136_n.png" alt="Shahed-136" class="img-small">
        <ul>
        
          <li>Швидкість: 10-15px/c.</li>
          <li>Швидкість повороту: 3px/с.</li>
          <li>Може маневрувати.</li>
          <li>Є біла й чорна версія.</li>
          
        </ul>
      </div>

      <div class="ppo-block">
        <h2>Shahed-238</h2>
        <img src="img/weapons/shaheed136_n_r.png" alt="Shahed-136" class="img-small">
        <ul>
        
          <li>Швидкість: 40-50px/c.</li>
          <li>Швидкість повороту: 3px/с.</li>
          <li>Може маневрувати.</li>
          
        </ul>
      </div>
      
      <div class="ppo-block">
        <h2>Х-101</h2>
        <img src="img/weapons/x101.png" alt="Х-101" class="img-small">
        <ul>
        
          <li>Швидкість: 150-200px/c.</li>
          <li>Швидкість повороту: 2px/с.</li>
          <li>Може маневрувати.</li>
          <li>Деякі Х-101 можуть відстрілювати теплові пастки</li>
           
        </ul>
      </div>
      
      <div class="ppo-block">
        <h2>Х-47М2 «Кинджал»</h2>
        <img src="img/weapons/Х47М2.png" alt="Х-47М2 «Кинджал»" class="img-small">
        <ul>
        
          <li>Початкова швидкість: 1000px/c. На відстані 500px до цілі швидкість знижується до 200px/c.</li>
          <li>Швидкість повороту: 0px/с.</li>
          <li>Не може маневрувати.</li>
          
        </ul>
      </div>
      
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
