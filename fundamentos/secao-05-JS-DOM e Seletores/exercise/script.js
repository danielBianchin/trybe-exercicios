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
    if ((value === 24) || (value === 25) || (value === 31)) {
      createDay.className = 'day holiday';
    } else if ((value === 4) || (value === 11) || (value === 18) || (value ===25)) {
      createDay.className = 'day friday';
    }
    pathToDays.appendChild(createDay);
  };
}

createCalendar();

const createButton = (string) => {
  const botao = document.createElement('button');
  botao.id = "btn-holiday";
  botao.innerHTML = string;
  document.querySelector(".buttons-container").appendChild(botao);
  
}

createButton('Feriados');

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

document.querySelector("#btn-holiday").addEventListener("click", mudaCorFundo);

