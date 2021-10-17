let lista = [2, 4, 6, 7, 10, 0, -3];

function menorNum(lista) {
    let menor = 99999999999999999999999;
    let indMenor = 0;

    for (let i = 0; i < lista.length; i= i +1) {
        if(lista[i] < menor) {
            menor = lista[i];
            indMenor = i;
        }
    }

    return indMenor;
}

console.log(menorNum(lista))