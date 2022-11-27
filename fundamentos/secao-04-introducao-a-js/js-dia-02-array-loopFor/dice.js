
function dice () { 
    return Math.ceil(Math.random() * 6);
}
let d1 = dice();
console.log ("O valor de d1 é: ",d1);
let d2 = dice();
let counter = 0;
while (d1 != d2) {
    d2 = dice();
    console.log('d2: ', d2);
    counter+=1;
}

console.log("O dado 2 precisou ser atirado: ", counter, "vezes");