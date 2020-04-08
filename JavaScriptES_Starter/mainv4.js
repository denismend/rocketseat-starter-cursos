var arr = [1, 2, 3, 4, 5, 8, 9];

const newArray = arr.map(function(a) {
  return a * 2;
});

console.log(newArray);

const soma = arr.reduce(function(soma, item) {
  return soma + item;
});

console.log(soma);

const filter = arr.filter(function(item ) {
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);