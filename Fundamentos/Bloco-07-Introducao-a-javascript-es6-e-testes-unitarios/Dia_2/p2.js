const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// ATT 1: Adicionar Chave e Valor a Objeto
const addKey = (object, key, value) => {
  object[key] = value;
};
addKey(lesson2, "turno", "noite");

//ATT 2 Lista e printa as keys de um Objeto
const listarKeys = (obj) => Object.keys(obj);
console.log(listarKeys(lesson1));

//ATT 3 Calcula e printa o tamanho de um Objeto
const objSize = (obj) => Object.keys(obj).length;
console.log(objSize(lesson1));

//ATT 4 lista e printa os valores de um Objeto
const listarValues = (obj) =>  Object.values(obj);
console.log(listarValues(lesson1));

//ATT 5 agrupar todos os objetos listados em um unico e printar
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//ATT 6 conta e printa o numero de estudantes em todas as aulas
const totalOfStudents = (obj) => {
  let resp = 0;
  const array = Object.keys(obj);
  for(let i = 0; i < array.length; i += 1) {
    resp += obj[array[i]].numeroEstudantes;
  }
  return resp;
};
console.log(totalOfStudents(allLessons));

//ATT 7 Obtem o valor da chave com base na posicao no objeto
const valueWithPos = (obj,number) => Object.values(obj)[number];
console.log(valueWithPos(lesson1, 0));

//ATT 8 verifica se a o par de chave e valor existem no Obj
const verificaChavObj = (obj, key, value) => {
  const array = Object.entries(obj);
  let boll = false;
  for(let i = 0; i < array.length; i += 1) {
    if (array[i][0] === key && array[i][1] === value)
    boll = true;
  }
  return boll;
};
console.log(verificaChavObj(lesson2, "professor", "Carlos"));
  