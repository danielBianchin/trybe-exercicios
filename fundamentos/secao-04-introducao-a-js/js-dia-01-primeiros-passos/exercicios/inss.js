const salarioBruto = 3000;
let salarioBase = 0;
let iR = 0;
let salarioLiquido = 0;

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto * 0.92;
} else if (salarioBruto <= 2594.92) {
    salarioBase = salarioBruto * 0.91;
} else if (salarioBruto <= 5189.82) {
    salarioBase = salarioBruto * 0.89;
} else {
    salarioBase = salarioBruto - 570.88;
}


if (salarioBase > 1903.98 && salarioBase <= 2826.65) {
    iR = salarioBase * 0.075 - 142.80;
} else if (salarioBase <= 3751.05) {
    iR = salarioBase * 0.15 - 354.80;
} else if (salarioBase <= 4664.68) {
    iR = salarioBase * 0.225 - 636.13;
} else {
    iR = salarioBase * 0.275 - 869.36;
}

salarioLiquido = salarioBase - iR;

console.log(salarioLiquido);