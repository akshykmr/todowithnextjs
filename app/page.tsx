import React, {Suspense }from 'react';
import TodosList from './todoList/TodoList';


export default function Home() {
  return (
    <div className="flex flex-col space-y-10">
    <Suspense fallback={<p>Loading the Todos ...</p>}>   {/* Here we are rendering a light weight fallback component while data is loading */}
    <div className="flex space-x-2 flex-wrap">
    {/* @ts-ignore */}
    <TodosList />
    </div>
    </Suspense>
    <Suspense fallback={<p>Loading the Todos ...</p>}>
    <div className="flex space-x-2 flex-wrap">
    {/* @ts-ignore */}
    <TodosList />
    </div>
    </Suspense>
    </div>
  )
}
