const prompt = require ('prompt-sync')();

const nome = prompt ('Type your name: ');

const sobrenome = prompt ('Type your lastname: ');

const peso = prompt ('Type your weight: ');

const altura = prompt ('Type your height: ');

const dataDeInternacao = prompt ('Type the date of your hospitalization: ');

const diabetico = prompt ('Do you have diabetes? Type yes or no: ')

console.log = prompt (`Name: ${nome}`);
console.log = prompt (`Lastname: ${sobrenome}`);
console.log = prompt (`Weight: ${peso}`);
console.log = prompt (`Height: ${altura}`);
console.log = prompt (`Date of hospitalization: ${dataDeInternacao}`);
console.log = prompt (`Have diabetes? : ${diabetico}`);