let numero = 389;
let ehPrimo = true;
for (index = 2; index < numero; index += 1) {
    if (numero % index === 0) {
        ehPrimo = false;
    }

}
console.log(ehPrimo);