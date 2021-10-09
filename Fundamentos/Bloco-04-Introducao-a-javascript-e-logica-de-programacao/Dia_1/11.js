let salarioBruto = 3000.00;
let salarioLiquido;
let salarioBase

if(salarioBruto <= 1556.94 && salarioBruto >= 0){
    salarioBase = salarioBruto - (8 * (salarioBruto / 100));
} else if(salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (9 * (salarioBruto / 100));
} else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (11 * (salarioBruto / 100));
} else if(salarioBruto >= 5189.83){
    salarioBase = salarioBruto - 570.88;
} else {
    console.log("Salario Bruto invalido");
}

if(salarioBase >= 0 && salarioBase <= 1903.98){
   salarioLiquido = salarioBase;
} else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - ((7.5 * (salarioBase / 100) - 142.80));
} else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - ((15 * (salarioBase / 100) - 354.80));
} else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - ((22.5 * (salarioBase / 100) - 636.13));
} else if(salarioBase >= 4664.69){
    salarioLiquido = salarioBase - ((27.5 * (salarioBase / 100) - 869.36));
} else{
    console.log("Salario Base invalido");
}

console.log(salarioLiquido)