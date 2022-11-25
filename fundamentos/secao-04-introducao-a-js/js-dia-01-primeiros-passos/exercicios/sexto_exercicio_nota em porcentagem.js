let notaEmPorcentagem = 57;
let conceito = '';

if (notaEmPorcentagem > 1000 || notaEmPorcentagem < 0) {
    conceito = 'Erro!!';
}else if (notaEmPorcentagem >= 90) {
    conceito = 'A';
} else if (notaEmPorcentagem >= 80) {
    conceito = 'B';
} else if (notaEmPorcentagem >= 70) {
    conceito = 'C';
} else if (notaEmPorcentagem >= 60) {
    conceito = 'D';
} else if (notaEmPorcentagem >= 50) {
    conceito = 'E';
} else {
    conceito = 'F';
}

console.log(conceito);