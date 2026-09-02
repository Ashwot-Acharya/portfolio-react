import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggle = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="navbar-style-basic">
            <div>
                <div> <h3 className='logo'> <Link to="/" onClick={closeMenu}> ashwot@portfolio:~$ </Link></h3></div>
            </div>

            <nav className='flex' aria-label="Main navigation">
            <ul className='navlinks flex nav-list'>
                <li className='m-5 nav-links'>
                    <Link to='/projects' className="nav-link" onClick={closeMenu}>cd projects/</Link>
                </li>
                <li className='m-5 nav-links'>
                    <Link to="/papers" className="nav-link" onClick={closeMenu}>cd papers/</Link>
                </li>
                <li className='m-5 nav-links'>
                    <Link className="nav-link" to="/contactme" onClick={closeMenu}> contact --me </Link>
                </li>   
            </ul>

                <div className='mobile-view'>
                    <button
                        className="hamburger-btn"
                        onClick={handleToggle}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hamburger-lines">
                            <span className={`line line1 ${isMenuOpen ? 'open' : ''}`}></span>
                            <span className={`line line2 ${isMenuOpen ? 'open' : ''}`}></span>
                            <span className={`line line3 ${isMenuOpen ? 'open' : ''}`}></span>
                        </span>
                    </button>
                    {isMenuOpen && (
                        <ul className="menu-items nav-list">
                            <li><Link to='/projects' className="nav-link" onClick={closeMenu}>cd projects/</Link></li>
                            <li><Link to='/papers' className="nav-link" onClick={closeMenu}>cd papers/</Link></li>
                            <li><Link to='/contactme' className="nav-link" onClick={closeMenu}> contact --me </Link></li>

                        </ul>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
