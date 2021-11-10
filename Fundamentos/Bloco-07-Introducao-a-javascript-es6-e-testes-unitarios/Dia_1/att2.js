const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const oddsAndEvensSort = oddsAndEvens => {
    oddsAndEvens.sort((a, b) => a - b);
    return oddsAndEvens;
}

const sortedNumbers = oddsAndEvensSort(oddsAndEvens);
console.log(`Os números ${sortedNumbers} estao em ordem crescente!`);