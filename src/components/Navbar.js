import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Icon from './Icon';
import useTheme from '../hooks/useTheme';
import './Navbar.css';

const LINKS = [
    { to: '/', label: 'Home', end: true },
    { to: '/places', label: 'Places' },
    { to: '/videos', label: 'Film' },
    { to: '/about', label: 'About' },
    { to: '/faq', label: 'FAQ' },
];

const Navbar = () => {
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, toggleTheme] = useTheme();

    // The bar is transparent over the home hero, solid everywhere else.
    const overHero = pathname === '/' && !scrolled && !open;

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => setOpen(false), [pathname]);

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header className={`navbar${overHero ? ' is-transparent' : ''}${open ? ' is-open' : ''}`}>
            <nav className="navbar-inner container" aria-label="Main">
                <Link to="/" className="logo" aria-label="Béjaïa Tour, home">
                    <span className="logo-mark">Saldae</span>
                    <span className="logo-sub">Béjaïa Tour</span>
                </Link>

                <ul id="nav-menu" className="nav-menu">
                    {LINKS.map((l) => (
                        <li key={l.to}>
                            <NavLink to={l.to} end={l.end} className="nav-link">
                                {l.label}
                            </NavLink>
                        </li>
                    ))}
                    <li className="nav-cta-item">
                        <Link to="/contact" className="btn btn-primary nav-cta">
                            Plan your trip
                        </Link>
                    </li>
                </ul>

                <div className="nav-actions">
                    <button
                        type="button"
                        className="icon-btn"
                        onClick={toggleTheme}
                        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                    >
                        <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
                    </button>
                    <button
                        type="button"
                        className="icon-btn burger"
                        aria-expanded={open}
                        aria-controls="nav-menu"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((o) => !o)}
                    >
                        <Icon name={open ? 'close' : 'menu'} />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
