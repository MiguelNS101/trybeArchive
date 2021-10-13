let num = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 999999999999999999;

for(let index = 0; index < num.length; index += 1) {
    if(num[index] < menor) {
        menor = num[index];
    }
}

console.log(menor);