var ulElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

/*
var todos = [
  'Fazer café',
  'Estudar JavaScript',
  'Acessar comunidade da Rocketseat'
]; */
var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderTodos() {
  ulElement.innerHTML = '';

  for(let todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.style.marginLeft = 2;
    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    ulElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() { 
  var todoText = inputElement.value;

  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveStorage();
}

function saveStorage() {
  localStorage.setItem('listTodos', JSON.stringify(todos));
}