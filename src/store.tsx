import { makeAutoObservable } from 'mobx';

interface Todo {
  id: number;
  text: string;
}

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
  },
];

class Todos {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = '';
  }

}

export default new Todos()

