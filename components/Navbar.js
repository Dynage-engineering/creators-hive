import React from 'react'
import NavItem from './NavItem'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'


const MENU_ITEMS = [
    {
        href: '/',
        text: 'Home',
    },
    {
        href: '/Domain',
        text: 'Design',
    },
    {
        href: '/',
        text: 'IoT & Robotics',
    },
    {
        href: '/',
        text: 'Finance',
    },
    {
        href: '/',
        text: 'Software development',
    },

]
export default function Navbar()
{
    const [active, setActive] = useState(false)
  return (
      <header>
          <nav className="nav">
              <Link href={'/'} >
                  <Image className='logo' src='/Lockup.svg' alt='Creators Hive' width={200 } height={40}/>
              </Link>
              <div className='nav__menu-bar' onClick={()=>setActive(!active)}>
                  <div></div>
                  <div></div>
                  <div></div>

              </div>
              <div className={`nav__menu-list ${active ? 'active': ''}`}>
                  {MENU_ITEMS.map(item =>
                  {
                      return (
                          <div key={item.text} >
                                <NavItem  href={item.href} text={item.text} active={active} />
                          </div>
                    )})}
              </div>
        </nav>
    </header>
  )
}
