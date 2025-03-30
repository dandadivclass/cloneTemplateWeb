const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 4,

    // Optional parameters
    direction: 'horizontal',
    // loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
  
    // // Navigation arrows
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
}); 



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
      // let cardIcone = divCardsServicos.querySelector('.card-icone');
      // if (cardIcone) cardIcone.classList.add('card-icone-hover');

      // let icones = divCardsServicos.querySelector('.card-icone i');
      // if (icones) icones.classList.add('card-icone-i-hover');

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
          <a href="#"><i class="working-process-icone p-0 m-0 ${arrowSegundoCard[i]}" style="color: #d00a2b;"></i></a>
        </div>
      </div>
  `;

  // utilizando função para que os cards mudem de cor 

  divWorkingProcess.addEventListener('mouseover', function() {

  });

  divCardsWorkingProcess.appendChild(divWorkingProcess);
} 
























// const imagensCarrossel = ['./assets/imagem-um-carrossel.jpg', './assets/imagem-dois-carrossel.jpg', './assets/imagem-tres-carrossel.jpg', './assets/imagem-quatro-carrossel.jpg']
// const nomeServicos = ['Backup & Recovery', 'Corporate Solution', 'Cloud Computing', 'Data Security', 'IT Management'];
// const descricaoServicos = ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore'];
// const link = ['Learn more'];

// const cardCarrossel = document.querySelector('.swiper-wrapper');

// for (let i = 0; i < 9; i++) {
//     const divCards = document.createElement('div');
//     divCards.className = ('swiper-slide');
//     divCards.innerHTML = `
//         <img src="${imagensCarrossel[i]}" class="img-fluid" alt="">
//         <h5 class="fs-5 fw-bold pt-3">${nomeServicos[i]}</h5>
//         <p class="flex-grow-1">${descricaoServicos[i]}</p>
//         <a href="#" class="text-danger text-decoration-none align-self-start">${link[i]}</a>
              
//     `;

//     cardCarrossel.appendChild(divCards);
// }