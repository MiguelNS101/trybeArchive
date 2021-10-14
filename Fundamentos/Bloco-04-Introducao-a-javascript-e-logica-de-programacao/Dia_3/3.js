let n = 5;
let linha = "";
let inputPos = n;
let simb = "*";

for(let indexLinha = 0; indexLinha < n; indexLinha += 1) {
    for(let indexCol = 0; indexCol <= n; indexCol += 1) {
        if (indexCol < inputPos) {
            linha = linha + " ";
        } else {
            linha = linha + simb;
        }
    }
    console.log(linha);
    linha = "";
    inputPos -= 1;
}