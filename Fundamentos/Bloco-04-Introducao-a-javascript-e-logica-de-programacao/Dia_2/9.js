let num = [];
let divis = [];

for(let index = 0; index < 25; index += 1) {
    num[index] = index + 1;
}

console.log(num);

for(let index = 0; index < 25; index += 1) {
    divis[index] = num[index] / 2;
}

console.log(divis);