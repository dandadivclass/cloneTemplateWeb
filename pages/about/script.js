const iconeServicesCard = ['fa-solid fa-network-wired', 'fa-solid fa-cloud', 'fa-solid fa-clock', 'fa-solid fa-computer', 'fa-solid fa-mobile-screen-button', 'fa-solid fa-swatchbook'];
const tituloServicesCard = ['Corporate Solutions', 'Cloud Development', 'Call Center Solution', 'Backup & Recovery', 'Android Application', 'UX/UI Design'];
const loremServicesCard = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur ipsum dolor.'];
const readMoreCard = ['Read More', 'fa-solid fa-arrow-right'];

const divServicesCard = document.querySelector('.div-services');

for (let i = 0; i < 6; i++) {
    const cardServicos = document.createElement('div');
    cardServicos.className = ('col-lg-4 col-md-6');
    cardServicos.innerHTML = `
        <div class="services-card text-start rounded-0 m-2">
            <i class="primeiro-icone ${iconeServicesCard[i]}"></i>
            <h5>${tituloServicesCard[i]}</h5>
            <p>${loremServicesCard[0]}</p>
            <a href="#">${readMoreCard[0]} <i class="${readMoreCard[1]}"></i></a>
        </div>
    `;

    divServicesCard.appendChild(cardServicos);
}

 


const imagemCliente = ['/assets/testi4.png', '/assets/testi5.png', '/assets/testi4.png', '/assets/testi5.png'];
const classeDiv = ['carousel-item active', 'carousel-item', 'carousel-item', 'carousel-item'];
const nomeCliente = ['Hanson Deck', 'Saad Alam', 'Hanson Deck', 'Saad Alam'];
const profisssaoCliente = ['UI/UX Designer'];
const loremCliente = ['"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus."'];

const divCarrossel = document.querySelector('.carousel-inner');

for (let i = 0; i < 4; i++) {
    const cardFeedback = document.createElement('div');
    cardFeedback.className = ('carrossel-feedback');
    cardFeedback.innerHTML = `
        <div class="${classeDiv[i]}">
            <div class="cliente-card rounded-0 text-center p-4 p-lg-5">
                <div class="foto-nome d-flex gap-3 mb-4">
                    <img src="${imagemCliente[i]}" alt="Homem branco sorrindo">
                    <div class="foto-nome-textos">
                        <h5 class="cliente-nome">${nomeCliente[i]}</h5>
                        <h6 class="cliente-profissao">${profisssaoCliente}</h6>
                    </div>
                </div>
                <p class="mb-4">${loremCliente}</p>
            </div>
        </div>
    `;

    divCarrossel.appendChild(cardFeedback);
}