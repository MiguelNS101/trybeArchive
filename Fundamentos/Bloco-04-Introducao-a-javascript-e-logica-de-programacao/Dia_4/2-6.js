let n = 5;

function somatorio(num) {
    let soma = 0;
    for(let i = 1; i <= num; i = i + 1) {
        soma = soma + i;
    }
    return soma;
}

console.log(somatorio(n));