const employeeGenerator = (nomeComp) => {
  const email = nomeComp.toLowerCase().split(' ').join('_');
  return {nome: nomeComp, email: `${email}@trybe.com` };
};

const newEmployees = (empGen) => {
  const employees = {
    id1: empGen('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: empGen('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: empGen('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));
