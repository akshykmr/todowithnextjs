import React from 'react'
import TodoList from './TodoList'
const Todo = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <p className='text-red-500'>TODO PAGE</p>
    <TodoList/>
    </main>
  )
}

export default Todo
