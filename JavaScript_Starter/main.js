function checaIdade(idade) {
  // Retornar uma promise
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      (idade > 18) ? resolve('maior que 18') : reject('menor ou igual a 18'); 
    }, 2000);
  }, function(err) {
    reject(err);
  });
}

checaIdade(15)
  .then(function () {
    console.log("Maior que 18");
  })
  .catch(function () {
    console.log("Menor que 18");
  });
  
var btnBuscarElement = document.querySelector('#buscarRepos');
var listElement = document.querySelector('#app ul');
btnBuscarElement.onclick = buscarRepositoriosGit;

function buscarRepositoriosGit() {
  listElement.innerHTML = '';

  var inputNome = document.querySelector('input[name=nome]')

  var repoElement = document.createElement("li");
  var repoElementName = document.createTextNode('Carregando...');
  repoElement.appendChild(repoElementName);

  listElement.appendChild(repoElement);

  axios.get('https://api.github.com/users/' + inputNome.value + '/repos').
    then(function(response) {
      listElement.removeChild(listElement.childNodes[0]);
      response.data.forEach(repository => {
        newLiItem(repository);
      });
    })
    .catch(function(error) {
      if(error.request.status === 404) {
        console.log('Usuario não existe');

        listElement.removeChild(listElement.childNodes[0]);

        var repoElement = document.createElement("p");
        var repoElementError = document.createTextNode('Usuario não existe');
        repoElement.style.color = '#F00'
        repoElement.appendChild(repoElementError);
      
        listElement.appendChild(repoElement);
      }
    });

}

function newLiItem(repository) {
  var repoElement = document.createElement("li");
  var repoElementName = document.createTextNode(repository.name);
  repoElement.appendChild(repoElementName);

  listElement.appendChild(repoElement);
}