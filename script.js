const emailElemento = document.getElementById('email-login');
const passwordElemento = document.getElementById('password-login');
const btnLoginElemento = document.getElementById('btn-login');
const checkboxAgreement = document.getElementById('agreement');
const btnSubmitForm = document.getElementById('submit-btn');
const textarea = document.getElementById('textarea');
const counterElement = document.getElementById('counter');
const evaluationForm = document.getElementById('evaluation-form');

btnLoginElemento.addEventListener('click', () => {
  if (emailElemento.value === 'tryber@teste.com' && passwordElemento.value === '123456') {
    alert('Olá, Tryber!');
    return;
  }
  alert('Email ou senha inválidos.');
});

checkboxAgreement.addEventListener('change', () => {
  if (checkboxAgreement.checked === true) {
    btnSubmitForm.disabled = false;
    return;
  }
  btnSubmitForm.disabled = true;
});

textarea.addEventListener('beforeinput', () => {
  counterElement.innerText = 500 - textarea.value.length;
});

textarea.addEventListener('keyup', () => {
  counterElement.innerText = 500 - textarea.value.length;
});

function contactsInfo() {
  const dataNome = document.getElementById('data-nome');
  const inputNome = document.getElementById('input-name');
  const inputSobrenome = document.getElementById('input-lastname');
  dataNome.innerText = `Nome: ${inputNome.value} ${inputSobrenome.value}`;
  const dataEmail = document.getElementById('data-email');
  const inputEmail = document.getElementById('input-email');
  dataEmail.innerText = `Email: ${inputEmail.value}`;
  const dataObs = document.getElementById('data-observacoes');
  const inputObs = document.getElementById('textarea');
  dataObs.innerText = `Observações: ${inputObs.value}`;
}

function subjectsInfo() {
  const arrayMaterias = document.getElementsByClassName('subject');
  const materias = [];
  for (let index = 0; index < arrayMaterias.length; index += 1) {
    const elemento = arrayMaterias[index];
    if (elemento.checked === true) {
      materias.push(elemento.value);
    }
  }
  return materias;
}

document.getElementById('show-login').addEventListener('click', (event) => {
  document.getElementsByClassName('trybewarts-login')[0].style.position = 'relative';
  event.target.style.display = 'none';
  // eslint-disable-next-line no-undef
  $('.form-login').animate({ height: 'toggle', opacity: 'toggle' }, 'fast');
});

btnSubmitForm.addEventListener('click', (event) => {
  event.preventDefault();
  evaluationForm.style.display = 'none';
  document.getElementById('form-data').style.display = 'flex';
  contactsInfo();
  const dataFamilia = document.getElementById('data-familia');
  const selectFamilia = document.querySelector('input[name="family"]:checked');
  dataFamilia.innerText = `Família: ${selectFamilia.value}`;
  const dataCasa = document.getElementById('data-casa');
  const inputCasa = document.getElementById('house');
  dataCasa.innerText = `Casa: ${inputCasa.value}`;
  const dataAvaliacao = document.getElementById('data-avaliacao');
  const inputAvaliacao = document.querySelector('input[name="rate"]:checked');
  dataAvaliacao.innerText = `Avaliação: ${inputAvaliacao.value}`;
  const dataMaterias = document.getElementById('data-materias');
  dataMaterias.innerText = `Matérias: ${subjectsInfo().join(', ')}`;
});