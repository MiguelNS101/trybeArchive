const longestWordArray = frase => {
    let palavs = frase.split(' ');
    let maiorPal = '';
    let tamMaiorPal = 0;
    for(let i = 0; i < palavs.length; i += 1) {
        if(palavs[i].length > tamMaiorPal) {
            tamMaiorPal = palavs[i].length;
            maiorPal = palavs[i]
        }
    }
    return maiorPal;
}

const result = longestWordArray('Antônio foi no banheiro e não sabemos o que aconteceu');
console.log(`Maior palavra e: ${result}`);