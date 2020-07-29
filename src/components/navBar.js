import React from 'react'
import '../App.css'

import { Link } from 'react-router-dom'



const NavBar = () => {
    return (
        <nav>
            <ul className="app-ul">
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
