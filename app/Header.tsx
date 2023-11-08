import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='p-5 backdrop-blur-lg border-2 bg-cyan-900 flex flex-row gap-4 justify-evenly'>
      {/* <button>{"<- back"}</button> */}
      <Link href="/">{"<- back"}</Link>
      <p>HEADER</p>
      <Link href="/todoList">{"Todo"}</Link>
    </header>
  )
}

export default Header
