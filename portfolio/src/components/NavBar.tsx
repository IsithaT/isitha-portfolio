import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <>
        <nav className='bg-green-600 h-full'>
            <ul className=''>
                <li className=''><Link className='' href="/">Home</Link></li>
                <li className=''><Link className='' href="/Projects">Projects</Link></li>
                <li className=''><Link className='' href="/Education">Education</Link></li>
                <li className=''><Link className='' href="/Reach">Reach Out</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar