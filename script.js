new Swiper('.card-wrapper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 4
    }
  }
});

//segundo carrossel

new Swiper('.card-workingprocess-wrapper', {
  direction: 'horizontal',
  loop: true,
    autoplay: {
    delay: 3000,
  },
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    0: {
      slidesPerView: 1
    },

    768: {
      slidesPerView: 2
    },

    1024: {
      slidesPerView: 3
    }
  }
});

//criando os cards do carrossel

const iconeServicesCard = ['fa-solid fa-network-wired', 'fa-solid fa-cloud', 'fa-solid fa-clock', 'fa-solid fa-computer', 'fa-solid fa-mobile-screen-button', 'fa-solid fa-swatchbook'];
const imagens = ['assets/imagem-um-carrossel.jpg', 'assets/imagem-dois-carrossel.jpg', 'assets/imagem-tres-carrossel.jpg', 'assets/imagem-quatro-carrossel.jpg', 'assets/imagem-dois-carrossel.jpg', 'assets/imagem-tres-carrossel.jpg',]
const tituloServicesCard = ['Corporate Solutions', 'Cloud Development', 'Call Center Solution', 'Backup & Recovery', 'Android Application', 'UX/UI Design'];
const loremServicesCard = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur ipsum dolor.'];
const learnMoreCard = ['Learn More'];

const divRecentProjects = document.querySelector('.card-carrossel-list');

for (let i = 0; i < 6; i++) {
    const cardProjetos = document.createElement('li');
    cardProjetos.className = ('card-carrossel-item swiper-slide');
    cardProjetos.innerHTML = `
        <div class="card-carrossel-div">
          <img src="${imagens[i]}" alt="Grupo de pessoas trabalhando no computador" class="card-image">
          <i class="icones-projeto ${iconeServicesCard[i]}"></i>
          <p class="carrossel-titulo">${tituloServicesCard[i]}</p>
          <p class="carrossel-lorem">${loremServicesCard[0]}</p>
          <a href="#" class="carrossel-link">${learnMoreCard[0]}</a>
        </div>
    `;

    divRecentProjects.appendChild(cardProjetos);
}




// aqui estou criando os elementos do card com as porcentagens 

const nomeAreas = ['CYBER SECURITY', 'UI/UX Design', 'App Development'];
const porcentagem = ['55%', '55%', '55%', '55%', '55%'];
 
const divPorcentagem = document.querySelector('.div-texto-porcentagem');

for (let i = 0; i < 3; i++) {
    const divTextoPorcentagem = document.createElement('div');
    divTextoPorcentagem.className = ('divTextoPorcentagem');
    divTextoPorcentagem.innerHTML = `
      <div class="mb-3">
        <div class="d-flex justify-content-between">
          <span class="fw-bolder">${nomeAreas[i]}</span> <span class="fw-bold">${porcentagem[i]}</span>
        </div>
          <hr class="rounded-divisor">
          <hr>
      </div>
    `;

    divPorcentagem.appendChild(divTextoPorcentagem);
}




// criando os cards após o video 

const numeracao = ['01', '02', '03', '04'];
const tituloCard = ['IT CONSULTANCY', 'MARKETING PLAN', 'IOS/MACOS APPS', 'CORPORATE SOLUTION'];
const loremCard = ['Lorem ipsum dolor sit amet cons ectetur adipisicing elit, sed do eiusmod tempor incididunt.', 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit, sed do eiusmod tempor incididunt.', 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit, sed do eiusmod tempor incididunt.', 'Lorem ipsum dolor sit amet cons ectetur adipisicing elit, sed do eiusmod tempor incididunt.'];
const iconeCard = ['fa-solid fa-signal', 'fa-solid fa-mobile-screen-button', 'fa-solid fa-voicemail', 'fa-solid fa-thumbs-up'];
const colorIcon = ['#d00a2b', '#d00a2b', '#d00a2b', '#d00a2b'];

const cardsServicos = document.querySelector('.div-4-cards-container');

for(let i = 0; i < 4; i++) {
    const divCardsServicos = document.createElement('div');
    divCardsServicos.className = ('card-1');
    divCardsServicos.innerHTML = `
          <div class="card-textos">
            <p class="numero-card">${numeracao[i]}</p>
            <p class="main-title-card">${tituloCard[i]}</p>
            <p class="lorem">${loremCard[i]}</p>
          </div>
          <div id="card" class="card-icone">
            <i id="iconeCardId" class="${iconeCard[i]}" style="color: ${colorIcon[i]};"></i>
          </div>
    `;

    // utilizando função para que os cards mudem de cor 

    divCardsServicos.addEventListener('mouseover', function() { 

      divCardsServicos.classList.add('card-1:hover');
    });

    cardsServicos.appendChild(divCardsServicos);
}  





// criando mais cards 

const iconeSegundoCard = ['fa-solid fa-users-viewfinder', 'fa-solid fa-headphones', 'fa-solid fa-chart-simple', 'fa-solid fa-laptop'];
const tituloSegundoCard = ['Choose Service', 'Request Meeting', 'Custom Plan', 'Make Final Work'];
const arrowSegundoCard = ['fa-solid fa-arrow-right', 'fa-solid fa-arrow-right', 'fa-solid fa-arrow-right', 'fa-solid fa-arrow-right'];


const divCardsWorkingProcess = document.querySelector('.working-process-container-cards');

for(let i = 0; i < 4; i++) {
  const divWorkingProcess = document.createElement('div');
  divWorkingProcess.className = ('working-process-card');
  divWorkingProcess.innerHTML = `
      <div class="working-process-container-card card mt-5 border-0" style="width: 20rem">
        <div class="working-process-card card-body border-0 d-flex flex-column align-items-center justify-content-center gap-4">
          <div class="working-process-card-icone d-flex justify-content-center align-items-center">
            <i class="working-process-icone ${iconeSegundoCard[i]}" style="color: #d00a2b;"></i>
          </div>
          <p class="fw-bolder">${tituloSegundoCard[i]}</p>
        </div>
        <div class="working-process-link d-flex justify-content-center align-items-center">
          <a href="#"><i class="working-arrow-icone p-0 m-0 ${arrowSegundoCard[i]}" style="color: #d00a2b;"></i></a>
        </div>
      </div>
  `;

  // utilizando função para que os cards mudem de cor 

  divWorkingProcess.addEventListener('mouseover', function() {

  });

  divCardsWorkingProcess.appendChild(divWorkingProcess);
} 




//criando cards blog

const imagemCardBlog = ['./assets/blog3.jpg', './assets/blog2.jpg', './assets/blog.jpg'];
const spanBlog = ['TECH LOVE', 'VIRTUAL', 'CONFIGURE'];
const imagemAutorBlog = ['./assets/blog-author3.jpg', './assets/blog-author3.jpg', './assets/blog-author3.jpg'];
const dataPublicacao = ['June 27, 2024', 'June 27, 2024', 'June 27, 2024'];
const tituluCardBlog = ['Pure is the most healthy and most nourishing food', 'Pure is the most healthy and most nourishing food', 'Pure is the most healthy and most nourishing food'];
const loremBlog = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur molestias quia quod mollitia illum nostrum o', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur molestias quia quod mollitia illum nostrum o', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio pariatur molestias quia quod mollitia illum nostrum o'];
const linkBlog = ['Read More', 'Read More', 'Read More'];

const divPrincipalCardBlog = document.querySelector('.cards-latest-blog-div');

for(let i = 0; i < 3; i++) {
  const divCardsBlog = document.createElement('div');
  divCardsBlog.className = ('divCard');
  divCardsBlog.innerHTML = `
    <div class="card latest-blog-card border-0" style="width: 18rem;">
      <div>
      <img src="${imagemCardBlog[i]}" class="card-img-top" alt="homem e mulher jogando jogo com óculos de realidade virtual">
      <span>${spanBlog[i]}</span>
      </div>
      <div class="card-body border-0">
        <img src="${imagemAutorBlog[i]}" alt="imagem de um homem">
        <p class="latest-blog-data">${dataPublicacao[i]}</p>
        <h5 class="card-title fw-bolder">${tituluCardBlog[i]}</h5>
        <p class="card-text">${loremBlog[i]}</p>
        <a href="#" class="text-decoration-none fw-bold">${linkBlog[i]}</a>
      </div>
    </div>
  `

  divPrincipalCardBlog.appendChild(divCardsBlog);
}


particlesJS.load('particles-container', 'particlesjs-config.json');

