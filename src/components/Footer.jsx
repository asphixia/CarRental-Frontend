import React from 'react';
import '../styling/FooterStyling.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} CarRentals</p>
            <p>
                <a href="/terms" className="footer-link">Terms of Service</a> | 
                <a href="/privacy" className="footer-link">Privacy Policy</a>
            </p>
            <p>
                Follow us on: 
                <a href="https://facebook.com" className="social-link"> Facebook</a>, 
                <a href="https://twitter.com" className="social-link"> Twitter</a>, 
                <a href="https://instagram.com" className="social-link"> Instagram</a>
            </p>
        </footer>
    );
}

export default Footer;