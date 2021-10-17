let lista = [2, 3, 6, 7, 10, 1];

function maiorNum(lista) {
    let maior = 0;
    let indMaior = 0;

    for (let i = 0; i < lista.length; i= i +1) {
        if(lista[i] > maior) {
            maior = lista[i];
            indMaior = i;
        }
    }

    return indMaior;
}

console.log(maiorNum(lista))