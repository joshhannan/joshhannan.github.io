import React from 'react'
import logo from './../logo.svg'

function Logo() {
    return (
        <div className="site-logo">
            <img src={logo} alt="logo" />
            <span>React Site</span>
        </div>
    )
}

export default Logo