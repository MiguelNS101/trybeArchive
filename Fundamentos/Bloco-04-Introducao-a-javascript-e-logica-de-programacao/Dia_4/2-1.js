let palavra = 'arara';
let resultado = true;
 
function reverse(palav) {
    rev = palav.split("");
    rev.reverse();
    res = rev.join("");
    return res;
}

function compararPalindromo(palav, rev) {
    if(palav != rev) {
        resultado = false;
    }
    return resultado;
}

let inverso = reverse(palavra);
resultado = compararPalindromo(palavra, inverso);

console.log('E um plalindromo: ', resultado)