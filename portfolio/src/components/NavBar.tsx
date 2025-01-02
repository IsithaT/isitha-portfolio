// filepath: /home/isitha/Code/PortfolioSite/isitha-portfolio/portfolio/src/components/NavBar.tsx
import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='w-full'>
      <ul className='h-[40px] flex flex-wrap justify-around items-center gap-[40px] mx-[40px] mt-[30px]'>
        <li className='h-full flex-1 flex items-center justify-center'>
          <Link className='nav-link' href="/">Home</Link>
        </li>
        <li className='h-full flex-1 flex items-center justify-center'>
          <Link className='nav-link' href="/projects">Projects</Link>
        </li>
        <li className='h-full flex-1 flex items-center justify-center'>
          <Link className='nav-link' href="/education">Education & Experience</Link>
        </li>
        <li className='h-full flex-1 flex items-center justify-center'>
          <Link className='nav-link' href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar