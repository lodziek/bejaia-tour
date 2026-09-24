import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { places } from '../data/places';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="container footer-grid">
            <div className="footer-brand">
                <Link to="/" className="logo">
                    <span className="logo-mark">Saldae</span>
                    <span className="logo-sub">Béjaïa Tour</span>
                </Link>
                <p>Mountains that plunge into the sea, a thousand years of history and the warmest welcome in Kabylia.</p>
                <a className="footer-github" href="https://github.com/lodziek/bejaia-tour" target="_blank" rel="noreferrer">
                    <Icon name="github" size={18} /> Source code
                </a>
            </div>

            <div>
                <h3>Explore</h3>
                <ul>
                    <li><Link to="/places">All places</Link></li>
                    <li><Link to="/videos">The film</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </div>

            <div>
                <h3>Must-see</h3>
                <ul>
                    {places.slice(0, 4).map((p) => (
                        <li key={p.slug}><Link to={`/places/${p.slug}`}>{p.title}</Link></li>
                    ))}
                </ul>
            </div>

            <div>
                <h3>Contact</h3>
                <ul>
                    <li><Link to="/contact">Send us a message</Link></li>
                    <li>
                        <a href="https://www.google.com/maps/search/?api=1&query=B%C3%A9ja%C3%AFa%2C+Algeria" target="_blank" rel="noreferrer">
                            Béjaïa, Algeria
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="container footer-bottom">
            <p>© {new Date().getFullYear()} Béjaïa Tour</p>
            <p>
                Designed by BiBi &amp;{' '}
                <a href="https://github.com/lodziek" target="_blank" rel="noreferrer">AHMED ZAID Aghiles</a>
            </p>
        </div>
    </footer>
);

export default Footer;
