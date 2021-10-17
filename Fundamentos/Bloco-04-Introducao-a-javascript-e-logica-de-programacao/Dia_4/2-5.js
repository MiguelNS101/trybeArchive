let list = [2, 3, 2, 5, 8, 2, 3];

function maiorRep(list) {
    let repetid = 0;
    let result = 0;
    for (let index = 0; index < list.length; index= index +1) {
        let maisRep = 0;
        let compList = list[index];
        for (let index2 = 0; index2 < list.length; index2= index2 +1) {
            if(compList === list[index2]) {
                maisRep = maisRep + 1
            }
        }
        if(maisRep > repetid) {
            repetid = maisRep;
            result = list[index]
        }
    }
    return result;
}

console.log(maiorRep(list))