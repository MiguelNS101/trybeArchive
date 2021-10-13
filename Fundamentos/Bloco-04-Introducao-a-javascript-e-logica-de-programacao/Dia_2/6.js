let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qImpar = 0;  

for(let index = 0; index < num.length; index += 1) {
    let sobra = num[index] % 2;
    if(sobra != 0) {
        qImpar = qImpar + 1;
    }
}

if(qImpar === 0){
    console.log("Nenhum impar na lista");
} else {
    console.log("Quantidade de impar:  " + qImpar)
}