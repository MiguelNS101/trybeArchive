const num = 4;

const fatorialFunc = num => {
    let soma = 1
    for(let i = 1; i <= num; i += 1) {
        soma = soma * i;
    }
    return soma;
}

const result = fatorialFunc(num);
console.log(`Fatorial de: ${num} e: ${result}`);