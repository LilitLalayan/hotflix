import React from 'react'
import './header.scss'
import logo from '../../images/logo.svg'

const Header = () => {
  return (
    <div className="header flex">
        <nav className="main flex nav">
            <img src={logo} alt='logo' className="logo"/>
            <button className="btn">SIGN IN</button>
        </nav>
    </div>
  )
}

export default Header