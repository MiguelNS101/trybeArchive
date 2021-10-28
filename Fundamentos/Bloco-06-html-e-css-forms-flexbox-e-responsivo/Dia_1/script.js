
let statesSelec  = document.getElementById('state');
let stateList = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
for (let index = 0; index < stateList.length; index += 1) {
    let createStates = document.createElement('option');
    createStates.innerText = stateList[index];
    createStates.value = stateList[index];
    statesSelec.appendChild(createStates);
}

function nameLimit() {
    let name = document.querySelector('#name')
    let resp = false;
    if(name.value.length > 40) {
        alert('Limite de caracteres atingido em: Nome')
        resp = true
    }
    return resp;
}

function emailLimit() {
    let email = document.querySelector('#email')
    let resp = false;
    if(email.value.length > 50) {
        alert('Limite de caracteres atingido em: Email')
        resp = true
    }
    return resp;
}

function cpfLimit() {
    let cpf = document.querySelector('#cpf')
    let resp = false;
    if(cpf.value.length > 11) {
        alert('Limite de caracteres atingido em: CPF')
        resp = true
    }
    return resp;
}

function addressLimit() {
    let address = document.querySelector('#address')
    let resp = false;
    if(address.value.length > 200) {
        alert('Limite de caracteres atingido em: Endereco')
        resp = true
    }
    return resp;
}

function cityLimit() {
    let city = document.querySelector('#city')
    let resp = false;
    if(city.value.length > 28) {
        alert('Limite de caracteres atingido em: Cidade')
        resp = true
    }
    return resp;
}

function resumeLimit() {
    let resume = document.querySelector('#resume')
    let resp = false;
    if(resume.value.length > 1000) {
        alert('Limite de caracteres atingido em: Resumo do curriculo')
        resp = true
    }
    return resp;
}

function roleLimit() {
    let role = document.querySelector('#role')
    let resp = false;
    if(role.value.length > 40) {
        alert('Limite de caracteres atingido em: Cargo')
        resp = true
    }
    return resp;
}

function roleDescriptionLimit() {
    let roleDescription = document.querySelector('#roleDescription')
    let resp = false;
    if(roleDescription.value.length > 500) {
        alert('Limite de caracteres atingido em: Descricao de cargo')
        resp = true
    }
    return resp;
}

function dateValidation() {
    input = document.querySelector('#startDate')
    let resp = false;
    if(input.value.length === 0){
      alert('A data não foi preenchida!')
      resp = true
    }
  
    let regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    
    if(!regex.test(input.value)){
      alert('Data: Formato inválido')
      resp = true
    }
  
    let splitted = input.value.split('/');
    let day = splitted[0];
    let month = splitted[1];
    let year = splitted[2];
  
    if(day < 0 || day > 30){
      alert('Dia inválido')
      resp = true
    }
  
    if(month < 0 || month > 12){
      alert('Mês inválido')
      resp = true
    }
  
    if(year < 0) {
      alert('Ano inválido')
      resp = true
    }
  
    return resp;
  }

let submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    if(nameLimit() === true && emailLimit() === true && cpfLimit() === true && addressLimit() === true && cityLimit() === true && resumeLimit() === true && roleLimit() === true && roleDescriptionLimit() === true && dateValidation() === true) {
        console.log('nao esta funcionando')
    } else {
        console.log('funcionando')
    }
})
