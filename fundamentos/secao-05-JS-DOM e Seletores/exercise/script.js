const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();


const createCalendar = () => {
  const pathToDays = document.querySelector('#days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (value of decemberDaysList) {
    const createDay = document.createElement('li');
    createDay.innerHTML = value;
    createDay.className = 'day'
    if ((value === 24) || (value === 31)) {
      createDay.className = 'day holiday';
    } else if ((value === 4) || (value === 11) || (value === 18)) {
      createDay.className = 'day friday';
    } else if (value === 25) {
      createDay.className = 'day friday holiday'
    } 
    pathToDays.appendChild(createDay);
  };
}

createCalendar();

const createButton = (string) => {
  const botao = document.createElement('button');
  if (string === 'Feriados'){
    botao.id = 'btn-holiday';
  } else if (string === 'Sexta-feira')
    botao.id = 'btn-friday'
  botao.innerHTML = string;
  document.querySelector(".buttons-container").appendChild(botao);
  
}

createButton('Feriados');
createButton('Sexta-feira')

const mudaCorFundo = () => {
  const feriados = document.getElementsByClassName("holiday");
  for (index in feriados) {
    if (feriados[index].style.backgroundColor != 'orange') {
      feriados[index].style.backgroundColor = 'orange';
    } else {
      feriados[index].style.backgroundColor = 'rgb(238,238,238)';
    }
  }
}

const mudaTexto = () => {
  fridays = [4,11,18,25]
  const sexta = document.getElementsByClassName("friday")
  for (index in sexta) {

    if (sexta[index].innerHTML == fridays[index]) {
      sexta[index].innerHTML = 'sextou';
    } else {
      sexta[index].innerHTML = fridays[index]
    }
  }
}

const zoom = (event) => {
  event.target.style.fontSize = '30px';
  event.target.style.fontWeight = '1000';
}

const offZoom = (event) => {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = '200';
}

document.getElementById('btn-holiday').addEventListener('click', mudaCorFundo);
document.getElementById('btn-friday').addEventListener('click', mudaTexto);
document.getElementById('days').addEventListener('mouseover', zoom);
document.getElementById('days').addEventListener('mouseout', offZoom);

const adicionaTarefa = (tarefa) => {
  let criandoElemento = document.createElement('span');
  criandoElemento.innerHTML = tarefa;
  document.querySelector('.my-tasks').appendChild(criandoElemento)
}

adicionaTarefa('lavar roupa');

const adicionaLegenda = (cor) => {
  let criandoElemento = document.createElement('div');
  criandoElemento.className = 'task';
  criandoElemento.style.backgroundColor = cor;
  document.querySelector('.my-tasks').appendChild(criandoElemento);
}

adicionaLegenda('green')
adicionaTarefa('cozinhar');
adicionaLegenda('purple')

const selecionaTarefa = (event) => {
  if (event.target.className != 'task selected') {
    event.target.className = 'task selected';
  } else {
    event.target.className = 'task';
  }
}

document.querySelector('.my-tasks').addEventListener('click', selecionaTarefa);


