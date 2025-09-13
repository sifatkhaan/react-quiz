import React from 'react'
import Account from './Account'
import classes from  '../styles/Nav.module.css'
import logo from '../assets/images/logo-bg.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Nav() {
  return (
    
    <nav className={classes.nav}>
    <ul>
      <li>
        <Link href="/" className={classes.brand}>
          <Image src={logo} alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </Link>
      </li>
    </ul>
    <Account />
  </nav>
  )
}
