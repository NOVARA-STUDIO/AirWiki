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

      <iframe frameborder="0" 
        src="https://itch.io/embed/4164169?border_width=3&amp;bg_color=000000&amp;fg_color=ffffff&amp;link_color=b00000&amp;border_color=8a8a8a" 
        width="556" 
        height="171">
        <a href="https://novyra-studio.itch.io/air-defense-ops">Air Defense Ops by NOVYRA STUDIO™</a>
      </iframe>   
      
      <h2>Актуальна версія: 0.23 (13.01.2026)</h2>
      <div class="ppo-block">
        <h2>Додано/змінено:</h2>
        <ul>
        
          <li>Новий формат версій: теперішня 0.23.</li>
          <li>Додано час перезарядки до всіх ППО.</li>
          <li>Додано MIM-104 Patriot.</li>
          <li>Додано нові маркери.</li>
          <li>Додано реактивний БПЛА.</li>
          <li>Додано групи БПЛА.</li>
          <li>В меню NASAMS виправлено баг.</li>
          <li>Зменшено радіуси ППО.</li>
          <li>МВГ складніше збити БПЛА.</li>
          <li>Спрайти ППО, БПЛА та ракет зменшено.</li>
          <li>Оновлено ШІ.</li>
          <li>Виправлено баг при натисканні на кнопки в грі.</li>
          <li>Збільшено карту для камери.</li>
          <li>В налаштування додано опцію «Час життя маркера».</li>
          <li>В налаштування додано опцію «Чутливість».</li>
          <li>В налаштування додано опцію «Чутливість зума».</li>
          <li>В налаштування додано опцію «Оптимізація».</li>
          <li>Виправлено баг ШІ з (0.499999) до (0.0).</li>
          <li>Після падіння ракети спавн маркера БПЛА вимикається.</li>
          <li>Додано кнопку паузи.</li>
          <li>Додано звук до Х-101.</li>
          <li>Звуки відтворюються залежно від відстані.</li>
          <li>Перероблено спрайт вибуху.</li>
          <li>Зроблено новий дезайн налаштувань.</li>
          
        </ul>
      </div>

            <div class="ppo-block">
        <h2>Зв’язатися з нами.</h2>
        <ul>
        <p>
          <a target="_blank" class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSdrjez7bbkCi3lq20-_vrGnw4W33upYfSGgPSRrlsf7p5ymjg/viewform?usp=dialog">
            Напишіть нам:)
          </a>
        </p>
 
        </ul>
      </div>
    `,
    ppo: `
      <h1>Види ППО:</h1>
      
      <div class="ppo-block">
        <h2>Мобільна Вогнева Група (МВГ)</h2>
        <ul>
        
          <li>Мобільний підрозділ протиповітряної оборони.</li>
          <li>Стандартний тип боєприпасу: кулі.</li>
          <li>Всього боєприпасів: 30.</li>
          <li>Скорострільність: 1 куля/0.5с.</li>
          <li>Час перезарядки: 1с.</li>
          <li>Підтримує боєприпаси: кулі.</li>
          <li>Радіус дії: 64px.</li>
          
        </ul>
      
      </div>
      <div class="ppo-block">
        <h2>NASAMS</h2>
        <ul>
        
          <li>Зенітний ракетний комплекс.</li>
          <li>Стандартний тип боєприпасу: ракета Air 1A.</li>
          <li>Всього боєприпасів: 6.</li>
          <li>Скорострільність: 1 ракета/2с.</li>
          <li>Час перезарядки: 4с.</li>
          <li>Радіус дії: 232px.</li>
          <li>Підтримує боєприпаси: Air 1A, Air 1B.</li>
          
        </ul>
      </div>

      <div class="ppo-block">
        <h2>MIM-104 Patriot</h2>
        <ul>
        
          <li>Зенітний ракетний комплекс.</li>
          <li>Стандартний тип боєприпасу: ракета Air 1A.</li>
          <li>Всього боєприпасів: 4.</li>
          <li>Скорострільність: 1 ракета/2с.</li>
          <li>Час перезарядки: 5с.</li>
          <li>Радіус дії: 256px.</li>
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
          <li>Не може маневрувати.</li>
          <li>Тип: -</li>
          <li>Клас: -</li>
          
        </ul>
      
      </div>
      <div class="ppo-block">
        <h2>Air 1A</h2>
        <ul>
        
          <li>Швидкість: 200px/c.</li>
          <li>Швидкість повороту: 14px/с.</li>
          <li>Тип керування: самонаведення.</li>
          <li>Дальність польоту: 400px.</li>
          <li>Може маневрувати.</li>
          <li>Тип: Спеціальні ракети</li>
          <li>Клас: земля-повітря</li>
          
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
          <li>Може маневрувати.</li>
          <li>Тип: Спеціальні ракети</li>
          <li>Клас: земля-повітря</li>
          
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
          <li>Тип: БПЛА</li>
          <li>Клас: земля-земля</li>
          
        </ul>
      </div>

      <div class="ppo-block">
        <h2>Shahed-238</h2>
        <img src="img/weapons/shaheed136_n_r.png" alt="Shahed-238" class="img-small">
        <ul>
        
          <li>Швидкість: 40-50px/c.</li>
          <li>Швидкість повороту: 3px/с.</li>
          <li>Може маневрувати.</li>
          <li>Тип: Реактивний БПЛА</li>
          <li>Клас: земля-земля</li>
          
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
          <li>Тип: Kрилата ракета</li>
          <li>Клас: повітря-земля</li>
           
        </ul>
      </div>
      
      <div class="ppo-block">
        <h2>Х-47М2 «Кинджал»</h2>
        <img src="img/weapons/Х47М2.png" alt="Х-47М2 «Кинджал»" class="img-small">
        <ul>
        
          <li>Початкова швидкість: 1000px/c. На відстані 500px до цілі швидкість знижується до 200px/c.</li>
          <li>Швидкість повороту: 0px/с.</li>
          <li>Не може маневрувати.</li>
          <li>Тип: Аеробалістична ракета</li>
          <li>Клас: повітря-земля</li>
          
        </ul>
      </div>
      
      <p>Усі характеристики є вигаданими та не є реальними.</p>
    `,
    transport: `<h1>Види техніки:</h1>`,
    buildings: `<h1>Види будівель:</h1>`,
    map: `
    <h1>Гра</h1>
    
    <div class="ppo-block">
      <h2>Інше:</h2>
      <ul>
        
        <li>Одиниці вимірювання відстані: px.</li>
        <li>Одиниці вимірювання швидкості: px/с.</li>
          
      </ul>
    </div>

    <div class="ppo-block">
      <h2>Маркери:</h2>
      <ul>

        <div class="ppo-block">
          <ul>
            <h2>БПЛА</h2>
            <img src="img/marker/circle yellow.png" alt="БПЛА" class="img-small">
          </ul>
        </div>

        <div class="ppo-block">
          <ul>
            <h2>Реактивний БПЛА</h2>
            <img src="img/marker/circle purple.png" alt="Реактивний БПЛА" class="img-small">
          </ul>
        </div>

        <div class="ppo-block">
          <ul>
            <h2>Kрилата ракета</h2>
            <img src="img/marker/circle red.png" alt="Kрилата ракета" class="img-small">
          </ul>
        </div>

        <div class="ppo-block">
          <ul>
            <h2>Аеробалістична ракета</h2>
            <img src="img/marker/circle blue.png" alt="Аеробалістична ракета" class="img-small">
          </ul>
        </div>
        
      </ul>
    </div>
    
    <p>Усі характеристики є вигаданими та не є реальними.</p>
    `
  };

  content.innerHTML = data[section] || `
    <h1>Розділ порожній</h1>
    <p><em>Тут зʼявиться контент пізніше.</em></p>
  `;
}
