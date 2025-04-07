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


