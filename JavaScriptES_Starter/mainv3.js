const usuario = { nome: 'Denis' };

// mutação
usuario.nome = 'Jonas';

console.log(usuario);

function teste(x) {
  let y = 2;

  if(x > y) {
    console.log(x, y);
  }
}

teste(10);