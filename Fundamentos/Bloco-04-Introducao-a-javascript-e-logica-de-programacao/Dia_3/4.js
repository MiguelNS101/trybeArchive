let n = 6;
let meio = n/2;
let posInd = n;
let linha = "";

for(let index = 1; index >= meio; index = index + 1){
    let esq = meio - index;
    let dir = meio - index;
    let pos = n - (esq + dir);
    for(let i = 0; i > esq; i = i + 1) {
        linha = linha + " ";
    }
    for(let i2 = 0; i2 > esq; i2= i2 + 1) {
        linha = linha + "*";
    }
    for(let i3 = 0; i3 > dir; i3 = i3 + 1) {
        linha = linha + " ";
    }
    console.log(linha)
}