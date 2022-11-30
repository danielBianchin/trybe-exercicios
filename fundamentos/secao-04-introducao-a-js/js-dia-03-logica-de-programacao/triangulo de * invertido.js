// resolução com 2 FOR
// let n = 5;
// let asterisco = '';

// for (index = 0; index < n; index += 1) {

//     for (let segundoIndex = n - 1; segundoIndex > index; segundoIndex -= 1) {
//         asterisco = asterisco + ' ';
//     }

//     for (let terceiroIndex = 0; terceiroIndex <= index; terceiroIndex += 1) {
//         asterisco = asterisco + '*';
//     }
    
//     console.log(asterisco);
//     asterisco = '';
// }

// resolução com 1 FOR e um IF
let n = 5;
let asterisco = '';

for (index = 0 ; index < n; index += 1) {
    for (let segundoIndex = n; segundoIndex >= 0; segundoIndex -= 1) {
        if (segundoIndex > index) {
            asterisco = asterisco + ' ';
        } else {
            asterisco = asterisco + '*';
        }
    }
    console.log(asterisco);
    asterisco = '';
}

