
import React from "react";
import { Todo } from "../../typing";
import Link from "next/link";

const fetchTodo = async (): Promise<Todo[]> => { //  type annotations : RETURING ARRAY 
  // timeout for random number of seconds between 1 and 5
const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
await new Promise((resolve) => setTimeout(resolve, timeout));

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json(); // using Todo[] coz res is in array form 
  return todos;
};

const TodoList = async () => {
  const todos = await fetchTodo();

  return (
    <>
      {todos.map((todo) => (
        <p key={todo.id}>
          <Link href={`/todoList/${todo.id}`}>Todo:{todo.id}</Link>  {/* THIS WILL BE REDIRECTED TO ITS LEAF NODE : /todoList/id */}
        </p>
      ))}
    </>
  );
};

export default TodoList;
