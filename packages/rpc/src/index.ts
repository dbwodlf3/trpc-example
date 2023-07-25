interface FunctionType<T> {
  (...args: any[]): T;
}

type Todo = { id: string; message: string };

let todoList: () => Todo[];
let todoById: (id: string) => Todo;
let todoCreate: (data: { name: string }) => Todo;
