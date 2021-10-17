let word = 'trybe';
let ending = 'be';

function finalString(word, ending) {
    word = word.split('');
    ending = ending.split('');
    control = true;
    for (let index = 0; index < ending.length; index = index + 1 ) {
        let cont = (word.length - ending.length + index);
        if(word[cont] != ending[index]) {
            control = false;
        }
    }
    return control;
} 

console.log(finalString(word, ending));