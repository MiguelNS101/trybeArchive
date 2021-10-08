const a = 60;
const b = 60;
const c = 60;

if(a + b + c === 180 && a > 0 && b > 0 && c > 0) {
    console.log(true);
} else if(a < 0) {
    console.log("Angulo invalido");
} else if(b < 0) {
    console.log("Angulo invalido");
} else if(c < 0) {
    console.log("Angulo invalido");
} else {
    console.log(false);
}