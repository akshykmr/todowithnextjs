import React from "react";
import { Todo } from "./../../../typing";
import { notFound } from "next/navigation";

type pageProps = {
  params: {
    todoId: string; // this key name should be the  same as folder name is : [todoId]
  };
};

// export const dynamicParams = false; // It is a alternative of fallback property as by default it is set true that means when it is true it helps to pre render(ssr) the page that was not been generated at build time(ssg) like if after build  and have only 10 page generated then it will help to pre rendered(ssr) the 11th or any other page after 10th page at request time. This behaviour can be prevent by setting it false where it will display a not-found page for those pages which are not been pre redered at built time(ssg).
 
const fetchTodo = async (todoId : string) =>{ // INCREMENTAL SIDE GENERATION (ISG)
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,{next:{revalidate:60}}); // this revalidation methode is used to convert this component into ISG( Incremental side generation) which will pre render the page after every 60 sec of this req.

    const todo: Todo = await res.json(); // no need to add square bracket after Todo type as res is just a single object not an array

    // console.log(todo)
    return todo;
}
  const TodoPage = async ({ params: { todoId } }: pageProps) => {
    const todo = await fetchTodo(todoId);

    if(!todo.id) return notFound();

  return <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
  <p>
  #{todo.id}: {todo.title}
  </p>
  <p>Completed: {todo.completed ? "Yes" : "No"}</p>
  <p className="border-t border-black mt-5 text-right">
  By User: {todo.userId}
  </p>
  </div>;
};

export default TodoPage;


export async function generateStaticParams() { //SERVER SIDE GENERATION (SSG)
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json(); 
 const trimmTodo = todos.splice(0,10) // here I just have limit the static side generation limit as 10 pages only that means this will only pre rendere(SSG) first 10 page for respective id's[0-10] as these pages are pre rendered at build time but there is one more thing like if we want to access the 11th page of any other page than 0-10 then next js will pre-render(SSR) that page on server side and will send in res. 
  return trimmTodo.map((todo)=>({
    todoId : todo.id.toString()
  }))
}




































