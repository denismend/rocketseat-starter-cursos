//import axios from 'axios';
/*import * as funcoes from './funcoes';
import soma, { sub }  from './soma';

console.log(funcoes.soma(1, 2));
console.log(soma(1, 2));
console.log(sub(2, 1)); */

//alert('Denis');

const minhaPromisse = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK')
  }, 2000);
});

/*async function executaPromise() {
  const response = await minhaPromisse();
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());

  console.log('first ' + response);
} */

const executaPromise = async () => {
  const response = await minhaPromisse();
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());
  console.log(await minhaPromisse());

  console.log('first ' + response);
}

//executaPromise();

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    }
    catch (err) {
      console.warn('Erro na API');
    }

    console.log(response);
  }
}

//Api.getUserInfo('denismendasd');

// desafio 3
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay();
  console.log('1s');
  await delay();
  console.log('2s');
  await delay();
  console.log('3s');
};

//umPorSegundo();

import axios from 'axios';
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response);
  }
  catch (err) {
    return console.log('Usuário não existe');
  }
}
//getUserFromGithub('diego3g');
//getUserFromGithub('diego3g124123');

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response);
    }
    catch (err) {
      console.warn('Repositorio não existe');
    }
  }
}
//Github.getRepositories('denismend/ng5');
//Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);
    console.log(response);
  }
  catch(err) {
    console.warn('Usuario não existe');
  }
}
//buscaUsuario('diego3g');


