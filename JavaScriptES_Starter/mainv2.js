class TodoList {
  constructor() {
    this.todos = [];
  }

  // não encherga o restante da classe
  static addTodo() {
    this.todos.push('Novo Todo');
    console.log(this.todos);
  }

  static soma(a, b) {
    return a + b;
  }
}

// erro
//TodoList.addTodo();
//TodoList.addTodo();
//TodoList.addTodo();

console.log(TodoList.soma(2, 3));