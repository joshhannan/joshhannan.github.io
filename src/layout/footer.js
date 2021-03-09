import React from 'react'
import Logo from '../components/logo'
import Nav from '../components/nav'
import '../assets/scss/layout/footer.scss'

function Footer() {
    return (
        <footer className="site-footer">
            <Nav />
            <Nav />
            <Nav />
            <Logo />
        </footer>
    )
}

export default Footer