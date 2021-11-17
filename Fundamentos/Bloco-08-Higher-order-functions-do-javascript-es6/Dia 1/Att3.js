const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calcNota = (rightAnswers, studentAnswers, func) => {
    let nota = 0;
    for (let i = 0; i < rightAnswers.length; i += 1) {
        nota += func(rightAnswers[i], studentAnswers[i]);
    }
    return `Resultado final: ${nota} corretas`;
};

console.log(calcNota(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAns, sAns) => {
    if (rAns === sAns) {
        return 1;
      } if (sAns === 'N.A') {
        return 0;
      } else {
        return -0.5;
      }
}));