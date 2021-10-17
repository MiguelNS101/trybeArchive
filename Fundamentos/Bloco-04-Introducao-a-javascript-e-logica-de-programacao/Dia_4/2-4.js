let listName = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let maiorName = '';

function maiorNome(lista) {
    let maior = 0;
    for (let i = 0; i < lista.length; i= i +1) {
        if(listName[i].length > maior) {
            maior = listName[i].length;
            maiorName = listName[i];
        }
    }
    return maiorName;
}

console.log(maiorNome(listName))