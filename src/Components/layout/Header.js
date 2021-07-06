import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <header className="container">
            <div className="row item-center justify-between">
                <Link to="/" className="brand">
                    <img src={Logo} alt="Logo" />
                </Link>
                <div className="navabar">
                    <Link to="/search" className="navbar-link">
                        Search
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
