import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
      <footer>
        <section className="footer">
            <div className="footer-box fade-in-2">
                <h2>Travel</h2>
                <p>Get your Saldae dream<br/>become the big journey<br/>you ever had</p>
                <div className="social fade-in-3">
                    <Link to="https://fr-fr.facebook.com/"><i className="bx bxl-facebook"></i></Link>
                    <Link to="https://twitter.com/?lang=fr"><i className="bx bxl-twitter"></i></Link>
                    <Link to="https://www.instagram.com/?hl=fr"><i className="bx bxl-instagram"></i></Link>
                    <Link to="https://www.tiktok.com/fr/"><i className="bx bxl-tiktok"></i></Link>
                </div>
            </div>
            <div className="footer-box fade-in-4">
                <h3>Services</h3>
                <li><Link to="/places">Products</Link></li>
                <li><Link to="/contact">Help & Support</Link></li>
                <li><Link to="#">Pricing</Link></li>
                <li><Link to='/Faq'>FAQ</Link></li>
            </div>
            <div className="footer-box fade-in-4">
                <h3>Offices</h3>
                <li><Link to="https://en.wikipedia.org/wiki/Algiers">Algiers</Link></li>
                <li><Link to="https://fr.wikipedia.org/wiki/Paris">Paris</Link></li>
                <li><Link to="https://fr.wikipedia.org/wiki/Barcelone">Barcelona</Link></li>
                <li><Link to="https://fr.wikipedia.org/wiki/Milan">Milan</Link></li>
            </div>
            <div className="footer-box fade-in-4">
                <h3>Contact Us</h3>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="#">Our Team</Link></li>
                <li><Link to="#">Our Blog</Link></li>
                <li><Link to="#">Customers</Link></li>
            </div>
        </section>
        <div className="copyright">
            <p>&copy; Designed by <Link to="#">BiBi</Link> & <a href="https://github.com/lodziek">AHMED ZAID Aghiles</a> All Right Reserved.</p>
        </div>
    </footer>
    
  )
}

export default Footer