import React from 'react'
import './header.scss'
import logo from '../../images/logo.svg'

import {
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <div className="header flex">
        <nav className="main flex nav">
        <Link to="/">
            <img src={logo} alt='logo' className="logo"/>
        </Link>
            <button className="btn">SIGN IN</button>
        </nav>
    </div>
  )
}

export default Header