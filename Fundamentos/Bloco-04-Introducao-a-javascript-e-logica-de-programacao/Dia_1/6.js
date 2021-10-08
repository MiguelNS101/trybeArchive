let peca = "Bispo";

switch(peca.toLowerCase()) {
    case "peao":
        console.log("1 casa pra frente, come pecas em diagonal");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
    case "torre":
        console.log("Horizontal e Vertical");
        break;
    case "cavalo":
        console.log("Em L,  2 casas em uma direcao e mais 1 casa perpendicular");
        break;
    case "rainha":
        console.log("Horizontal, Vertical e Diagonal");
        break;
    case "rei":
        console.log("Horizontal, Vertical e Diagonal 1 casa por vez");
        break;
    default:
        console.log("Peca invalida");
        break;
} 
