
import React from "react";
import { Todo } from "../../typing";
import Link from "next/link";

const fetchTodo = async (): Promise<Todo[]> => { //  type annotations : RETURING ARRAY 
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
          <Link href={`/todoList/${todo.id}`}>Todo:{todo.id}</Link>
        </p>
      ))}
    </>
  );
};

export default TodoList;
