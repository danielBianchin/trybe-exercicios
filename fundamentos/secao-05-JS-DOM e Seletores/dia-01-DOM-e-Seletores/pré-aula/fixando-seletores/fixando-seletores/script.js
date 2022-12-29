document.getElementById('header-container').style.backgroundColor = 'green';

const urgente = document.getElementsByClassName('emergency-tasks')[0];
urgente.style.backgroundColor = 'salmon';

for (value of document.querySelectorAll(".emergency-tasks h3")) {
  value.style.backgroundColor = 'purple';
}
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

for (value of document.querySelectorAll(".no-emergency-tasks h3")) {
  value.style.backgroundColor = 'black';
}

document.getElementById('footer-container').style.backgroundColor = 'green';


