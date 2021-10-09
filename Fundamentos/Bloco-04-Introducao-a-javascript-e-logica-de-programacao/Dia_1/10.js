const custo = 10;
const valor = 15;

if(valor >= 0 && custo >= 0){
    console.log(1000 * (valor - (custo + 20 * (custo / 100))));
} else {
    console.log("Valor ou Custo invalido");
}