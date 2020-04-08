// REST

const usuario = {
  nome: 'Denis',
  idade: 26,
  empresa: 'Sinqia' 
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

function soma(...params) {
  return params.reduce((total, item) => total + item);
}

console.log(soma(1, 2, 3, 4, 5));

function soma2(a, b, ...params) {
  return params;
}

console.log(soma2(1, 2, 3, 4, 5));

// SPREAD

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const user = {
  nome: 'Denis',
  idade: 26,
  empresa: 'Sinqia'
}

const user2 = {...user, nome: 'Ronaldo'};
console.log(user2);

