const parametro = "Bebeto";
const skills = ["HTML", "CSS", "Javascript", "Github", "Bootstrap"];

const findX = (parametro) => {
  return `Tryber ${parametro} aqui!`;
};

const skillsSort = (skills) => {
  return skills.sort();
};

const result = findX(parametro);
console.log(`${result}`);
const resultSkills = skillsSort(skills);
for (let i = 0; i < resultSkills.length; i += 1) {
  console.log(`${resultSkills[i]}`);
}
console.log("#GoTybe");
