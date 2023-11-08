import React from "react";

type pageProps = {
  params: {
    todoId: string; // this key name should be the  same as folder name is : [todoId]
  };
};
 
const fetchTodo = async (todoId : string) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const todo = await res.json();
    console.log(todo)
    return todo;
}
  const TodoPage = async ({ params: { todoId } }: pageProps) => {
    const todo = await fetchTodo(todoId);

  return <div>page:{todoId}</div>;
};

export default TodoPage;
