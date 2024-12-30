import React from 'react'
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className='w-full'>
      <ul className='h-[40px] flex flex-wrap justify-around items-center gap-[40px] mx-[40px] mt-[30px]'>
        <li className='h-full flex-1 flex items-center justify-center'>
          <Link className='p-[15px] h-full w-full flex items-center justify-center text-center 
          relative px-8 py-2 rounded-md isolation-auto z-10 border-2 border-black 
          before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
          hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-[#A12347] 
          before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
          inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black 
          border border-black rounded-lg shadow-sm gap-x-2 disabled:opacity-50 
          disabled:pointer-events-none transition-colors duration-700' href="/">Home</Link>
        </li>
        <li className='h-full flex-1 flex items-center justify-center'> 
          <Link className='p-[15px] h-full w-full flex items-center justify-center text-center 
          relative px-8 py-2 rounded-md isolation-auto z-10 border-2 border-black 
          before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
          hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-[#A12347] 
          before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
          inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black 
          border border-black rounded-lg shadow-sm gap-x-2 disabled:opacity-50 
          disabled:pointer-events-none transition-colors duration-700' href="/projects">Projects</Link>
        </li>
        <li className='h-full flex-1 flex items-center justify-center'>
          <Link className='p-[15px] h-full w-full flex items-center justify-center text-center 
          relative px-8 py-2 rounded-md isolation-auto z-10 border-2 border-black 
          before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
          hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-[#A12347] 
          before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
          inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black 
          border border-black rounded-lg shadow-sm gap-x-2 disabled:opacity-50 
          disabled:pointer-events-none transition-colors duration-700 text-nowrap' href="/education">Education & Experience</Link>
        </li>
        <li className='h-full flex-1 flex items-center justify-center'>
          <Link className='p-[15px] h-full w-full flex items-center justify-center text-center 
          relative px-8 py-2 rounded-md isolation-auto z-10 border-2 border-black 
          before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
          hover:text-white before:-left-full before:hover:left-0 before:rounded-full before:bg-[#A12347] 
          before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 
          inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-black 
          border border-black rounded-lg shadow-sm gap-x-2 disabled:opacity-50 
          disabled:pointer-events-none transition-colors duration-700' href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}


export default NavBar