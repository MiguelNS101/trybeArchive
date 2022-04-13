const lotteryChecker = (myNumber, lotteryNumber) => myNumber === lotteryNumber;

const lotteryResult = (myNumber, testeLoteria) => {
  let resp = '';
  const lotteryNumber = Math.floor(Math.random() * 5 + 1);
  console.log('Resultado da loteria:', lotteryNumber);
  console.log('Seu numero da loteria:', myNumber);
  if (testeLoteria(myNumber, lotteryNumber) === true) {
    resp = 'Parabéns você ganhou';
  } else {
    resp = 'Tente novamente';
  }
  return resp;
};

console.log(lotteryResult(2, lotteryChecker));
