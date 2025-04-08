const inputTypeEId = ['email', 'lastname', 'mailaddress', 'phonenumber'];
const label = ['First Name', 'Last Name', 'Mail Address', 'Phone Number'];
const formIcones = ['fa-solid fa-user', 'fa-solid fa-user', 'fa-solid fa-envelope', 'fa-solid fa-phone']

const divFormularioContatos = document.querySelector('.div-form');

for (let i = 0; i < 4; i++) {
    const formularioContatos = document.createElement('div');
    formularioContatos.className = ('form-contato');
    formularioContatos.innerHTML = `
        <div class="form-floating mb-3">
            <input type="${inputTypeEId[i]}" class="form-control border-0" id="${inputTypeEId[i]}">
            <label for="${inputTypeEId[i]}" class="fs-5">
                <i class="${formIcones[i]} style="color: #d32424;"></i>
                    ${label[i]}
                </label>
        </div>
    `;

    divFormularioContatos.appendChild(formularioContatos);
}




const selectOptions = ['EN', 'SP', 'AR'];
const labelFor = ['floatingSelectGrid', 'floatingTextarea2'];
const labelSelectTextArea = ['Select Subject', 'Enter Message'];
const idSelectTextArea = ['floatingSelectGrid', 'floatingTextarea2'];

for (let i = 0; i < 1; i++) {
    const selectETextArea = document.createElement('div');
    selectETextArea.className = ('select-text-area');
    selectETextArea.innerHTML = `
        <div class="col-md">
            <div class="form-floating mb-3">
                <select class="form-select border-0" id="${idSelectTextArea[i]}">
                <option selected></option>
                <option value="1">${selectOptions[0]}</option>
                <option value="2">${selectOptions[1]}</option>
                <option value="3">${selectOptions[2]}</option>
                </select>
                <label for="${labelFor[i]}" class="fs-5">${labelSelectTextArea[i]}</label>
            </div>
        </div>
        <div class="form-floating border-0">
            <textarea class="form-control" placeholder="Leave a comment here" id="${idSelectTextArea[i]}" style="height: 100px"></textarea>
            <label for="${labelFor[i]}" class="fs-5">
                <i class="fa-solid fa-envelope" style="color: #d32424;"></i>
                ${labelSelectTextArea[i]}                
            </label>
        </div>
         <div class="d-flex justify-content-end align-items-center mt-4">
            <button type="button" class="btn btn-form btn-primary btn-lg">Submmit Request</button>
        </div>
    `;

    divFormularioContatos.appendChild(selectETextArea);
}



const iconeInfoCompany = ['fa-solid fa-building', 'fa-solid fa-phone', 'fa-solid fa-envelope'];
const tituloIncoCompany = ['Office Adress:', 'Phone Number:', 'Mail Adress:'];
const descricaoInfoCompany = ['254 Lillian Blvd, Holbrook,Tower,NYC,Us', 'Head Office:(210) 123 123 123', 'info@example.com'];

const divCompanyInfo = document.querySelector('.info-company');

for (let i = 0; i < 3; i++) {
    const informacoesEmpresa = document.createElement('div');
    informacoesEmpresa.className = ('company-infos');
    informacoesEmpresa.innerHTML = `
        <div class="infos-company d-flex gap-3 flex-wrap">
            <div class="icone-div">
                <i class="${iconeInfoCompany[i]}" style="color: #ffffff;"></i>
            </div>
            <div>
                <p class="office-adress-title p-0 m-0">${tituloIncoCompany[i]}</p>
                <p class="office-adress-p">${descricaoInfoCompany[i]}</p>
            </div>
        </div>
    `;

    divCompanyInfo.appendChild(informacoesEmpresa);
}







