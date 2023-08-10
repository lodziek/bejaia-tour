import React, { useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navRef = useRef();
    const hamburgerRef = useRef();
    const linkRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle('active');
    }

    const closeHam = () => {
        hamburgerRef.current.classList.toggle('close');
    }

    const linkClose = () => {
        navRef.current.classList.remove('active');
        hamburgerRef.current.classList.remove('close');
    }

    const navLinks = [{id: 0, to:'/', link:'home'},{id: 1, to:'/places', link:'places'}, {id: 2, to:'/videos', link:'videos'}, {id: 3, to:'/about', link:'about us'}, {id: 4, to:'/contact', link:'contact'}]

    return (
        <>
            <header>
                <nav className="navbar">
                    <Link to='/' className="logo">My Logo</Link>
                    <i className='bx bx-moon dark'></i>
                    <ul className="nav-menu" ref={(e) => { navRef.current = e; linkRef.current = e }}>
                        {navLinks.map((link)=>{
                            return(
                                <Link key={link.id} to={link.to} className="nav-link" onClick={linkClose}><li className="nav-item">{link.link}</li></Link>            
                            )})}
                    </ul>
                    <div className="hamburger" ref={hamburgerRef} onClick={() => { showNav(); closeHam() }}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar