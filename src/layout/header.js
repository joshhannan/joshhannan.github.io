import React from 'react';
import Logo from '../components/logo'
import Nav from '../components/nav'
import '../assets/scss/layout/header.scss'

function Header() {
    return (
        <header className="site-header">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;