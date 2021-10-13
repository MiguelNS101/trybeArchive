let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for(let index = 0; index < num.length; index += 1) {
    if(num[index] > maior) {
        maior = num[index];
    }
}

console.log(maior);