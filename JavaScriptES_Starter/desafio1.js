// 1
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  isAdmin() {
    return this.admin ? 'É Administrador' : 'Não é Administrardor';
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

// 2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(u => {
  return u.idade;
});

console.log(idades);

const trabalhaNaRs = usuarios.filter(u => {
  return u.idade > 18 && u.empresa === 'Rocketseat'
});

console.log(trabalhaNaRs);

const trabalhaNaGoogle = usuarios.find(u => {
  return u.empresa === 'Google';
});

console.log(trabalhaNaGoogle);

const idade2MenorQue50 = usuarios.map(u => {
  return { ...u, idade: u.idade * 2 };
}).filter(uNew => {
  return uNew.idade < 50;
});

console.log(idade2MenorQue50);

// 3
// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(item => {
  return item + 10;
});

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => {
  return usuario.idade;
}
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const name = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => {
  return { nome, idade };
}
mostraUsuario(name, idade);
mostraUsuario(name);

// 3.4
const promise = () => {
  return new Promise((resolve, reject) => {
    return resolve();
  });
}

//4
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};

const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// 5
const array = [1, 2, 3, 4, 5, 6];

const [x, ...y] = array;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
function soma(...array) {
  return array.reduce((total, item) => total + item);
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

const usuario5 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario52 = { ...usuario5, nome: 'Gabriel' };
const usuario53 = { ...usuario5, endereco: { cidade: 'Lontras' } };

console.log(usuario52);
console.log(usuario53);

// 6 
const usuario6 = 'Diego';
const idade6 = 23;
console.log(`O usuário ${usuario6} possui ${idade6} anos`);

// 7
const nome7 = 'Diego';
const idade7 = 23;

const usuario7 = {
  nome7,
  idade7,
  cidade: 'Rio do Sul',
};

console.log(usuario7);