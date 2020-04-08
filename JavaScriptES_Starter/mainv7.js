const usuario = {
  nome: 'Denis',
  idade: 26,
  endereco: {
    cidade: 'Assis',
    estado: 'SP'
  }
}

console.log(usuario);

const {nome, idade, endereco: { cidade }} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade}) {
  console.log(nome);
  console.log(idade);
}

mostraNome(usuario);