import React from 'react'
import {Link} from 'react-router-dom'
import { directive } from '@babel/types'

function Header() {
  return (
    <div className="header">
      <header id="header">
        <nav className="menu">
            <a href="javascript:;">导航</a>
        </nav>
        <h1 className="logo">miaov.com</h1>
        <Link className="user" to="/login" />
      </header>
    </div>

  )
}

export default Header;